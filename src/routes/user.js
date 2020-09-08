const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const userMiddleware = require('../middlewares/user');

router.get('/user', userController.index);
router.get('/login',userController.login);
router.get('/my-profile',[userMiddleware.checkToken],userController.profile);


module.exports = router;