const admin = require('firebase-admin');
const serviceAccount = require(process.env.FIREBASE_CREDENTIALS_PATH);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'your-firebase-app-id.appspot.com'
});

module.exports = admin;

