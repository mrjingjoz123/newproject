var express = require('express');
var router = express.Router();

const loginController = require('../controllers/loginController');
const registerController = require('../controllers/registerController');
const adminController = require('../controllers/adminController');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


// GET Login Page
router.route('/login').get(loginController.getLogin);
router.route('/presslogin').post(loginController.getHomepage);

// GET Register Page
router.route('/register').get(registerController.getRegister);
router.route('/saveRegister').post(registerController.saveRegister);

// GET Admin Page
router.route('/home').get(adminController.getHomepage);
router.route('/contact').get(adminController.getContactpage);
router.route('/list').get(adminController.getListpage);
router.route('/manager').get(adminController.getManagerpage);
router.route('/report').get(adminController.getReportpage);


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