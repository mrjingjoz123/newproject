var express = require('express');
var router = express.Router();
// const userController = require('../controllers/userController');
const loginController = require('../controllers/loginController');
const registerController = require('../controllers/registerController');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


// GET Login Page
router.route('/login').get(loginController.getLogin);

// GET Register Page
router.route('/register').get(registerController.getRegister);
router.route('/saveRegister').post(registerController.saveRegister);


// // test 
// router.get('/save', function(req, res, next) {
//     res.render('pages/login');
// });
// router.get('/cancel', function(req, res, next) {
//     res.render('pages/login');
// });

// router.route('/adduser').post(userController.addUser);
// router.route('/gotest').get(userController.select);



module.exports = router;