const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const userMiddleware = require('../middlewares/user');

router.get('/user', userController.index);
router.post('/login',userController.login);
router.get('/my-profile',[ userMiddleware.checkToken ],userController.profile);
router.get('/my-posts',[ userMiddleware.checkToken ],userController.ListMyPosts);
router.get('*',userController.NotFound);

module.exports = router;