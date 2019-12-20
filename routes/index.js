var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


// GET Login Page
router.get('/login', function(req, res, next) {
    res.render('pages/login');
});

// GET Register Page
router.get('/register', function(req, res, next) {
    res.render('pages/register');
});


// test 
router.get('/save', function(req, res, next) {
    res.render('pages/login');
});
router.get('/cancel', function(req, res, next) {
    res.render('pages/login');
});

router.route('/adduser').post(userController.addUser);
router.route('/gotest').get(userController.select);



module.exports = router;