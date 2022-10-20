const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const postController = require('../controllers/post-controller')
const router = new Router();
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),
    userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.post('/createPost', postController.createPost)
router.get('/getPosts', authMiddleware, postController.getPosts)
router.get('/refresh', userController.refresh);
router.get('/users', userController.getUsers);


module.exports = router
