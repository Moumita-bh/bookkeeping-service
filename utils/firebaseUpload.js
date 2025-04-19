const { getStorage } = require("firebase-admin/storage");
const uuid = require("uuid").v4;

const uploadImage = async (fileBuffer, filename) => {
  const bucket = getStorage().bucket();
  const blob = bucket.file(filename);
  const blobStream = blob.createWriteStream({
    metadata: {
      contentType: 'image/jpeg',
      metadata: {
        firebaseStorageDownloadTokens: uuid()
      }
    }
  });

  return new Promise((resolve, reject) => {
    blobStream.on('error', reject);
    blobStream.on('finish', () => {
      const url = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(blob.name)}?alt=media`;
      resolve(url);
    });
    blobStream.end(fileBuffer);
  });
};

module.exports = uploadImage;
