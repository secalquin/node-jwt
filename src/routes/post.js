const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');

router.get('/', postController.getAllPosts);
router.get('/:id', postController.findPostByID);
router.get('/:id/comments', postController.getCommentsByPost);
router.get('*', postController.NotFound);

module.exports = router;