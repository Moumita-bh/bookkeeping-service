const Book = require('../models/Book');
const Library = require('../models/Library');
const uploadImage = require('../utils/firebaseUpload');

exports.createBook = async (req, res) => {
  const { title, libraryId } = req.body;
  const library = await Library.findById(libraryId);
  if (!library) return res.status(400).json({ message: 'Invalid library' });

  const imageUrl = await uploadImage(req.file.buffer, `${title}-${Date.now()}.jpg`);
  const book = new Book({ title, imageUrl, author: req.user._id, currentLibrary: library._id });
  await book.save();
  res.status(201).json(book);
};

exports.getAllBooks = async (req, res) => {
  const books = await Book.find().populate('author').populate('currentLibrary');
  res.json(books);
};
