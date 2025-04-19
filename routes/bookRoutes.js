const express = require('express');
const router = express.Router();
const multer = require('multer');
const { createBook, getAllBooks } = require('../controllers/bookController');
const auth = require('../middlewares/authMiddleware');
const role = require('../middlewares/roleMiddleware');

const upload = multer(); // Memory upload

router.post('/', auth, role(['Author']), upload.single('image'), createBook);
router.get('/', getAllBooks);

module.exports = router;
