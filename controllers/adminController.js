module.exports = {
    getHomepage: async(req, res) => {
        res.render('pages/admin/home');
    },
    getContactpage: async(req, res) => {
        res.render('pages/admin/contact');
    },
    getListpage: async(req, res) => {
        res.render('pages/admin/list');
    },
    getManagerpage: async(req, res) => {
        res.render('pages/admin/manager');
    },
    getReportpage: async(req, res) => {
        res.render('pages/admin/report');
    }

}