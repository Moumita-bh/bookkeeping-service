const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  imageUrl: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  currentLibrary: { type: mongoose.Schema.Types.ObjectId, ref: 'Library' },
  currentBorrower: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null }
});

module.exports = mongoose.model('Book', bookSchema);
