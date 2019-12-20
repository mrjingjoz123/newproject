const User = require('../model/userModel');

module.exports = {
    getLogin: async(req, res) => {
        res.render('pages/login');
    }
}