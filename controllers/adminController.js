const Cultivate = require('../model/cultivateModel');
const Report = require('../model/reportModel');
const User = require('../model/userModel');
const Reportadmin = require('../model/reportadminModel');

module.exports = {
    getHomepage: async(req, res) => {
        res.render('pages/admin/home');
    },
    getContactpage: async(req, res) => {
        const list = await User.find();
        res.render('pages/admin/contact', { list });
    },
    getListpage: async(req, res) => {
        const list = await Cultivate.find();
        res.render('pages/admin/list', { list });
    },
    getManagerpage: async(req, res) => {
        const list = await User.find();
        res.render('pages/admin/manager', { list });
    },
    getReportpage: async(req, res) => {
        const mes = await Report.find();
        res.render('pages/admin/report', { mes });
    },
    saveList: async(req, res) => {
        let list = new Cultivate({
            name: req.body.namelist,
            price: req.body.price,
            unit: req.body.unit,
            status: 'พร้อม'
        });
        // save to database
        list.save();
        res.redirect(req.get('referer'));
    },
    saveReportAdmin: async(req, res) => {
        const list = await User.find();
        var username = new Array();
        for (let i = 0; i < list.length; i++) {
            username.push(list[i].username);
        }

        let mes = await new Reportadmin({
            headname: req.body.headname,
            bodytext: req.body.bodytext,
            username: username
        });
        // save to database
        mes.save();
        res.redirect(req.get('referer'));
    },
    deleteUser: async(req, res) => {
        var id = req.params.id;
        User.findByIdAndRemove(id, (err) => {
            if (err) return res.status(500).send(err);
            return res.redirect(req.get('referer'));
        });
    },
    deleteList: async(req, res) => {
        var id = req.params.id;
        Cultivate.findByIdAndRemove(id, (err) => {
            if (err) return res.status(500).send(err);
            return res.redirect(req.get('referer'));
        });
    },
    deleteMes: async(req, res) => {
        var id = req.params.id;
        Report.findByIdAndRemove(id, (err) => {
            if (err) return res.status(500).send(err);
            return res.redirect(req.get('referer'));
        });
    },
    saveEditUser: async(req, res) => {
        User.findByIdAndUpdate(req.params.id, req.body, { new: true },
            (err) => {
                if (err) return res.status(500).send(err);
                return
            }
        );
        const list = await User.find();
        res.render('pages/admin/manager', { list });
    },
    saveReportAdminSome: async(req, res) => {
        var id = req.params.user;
        var s = id
        var matches = ['']
        var open = false
        for (i in s) {
            if (s[i] == ',' && !open) {
                matches.push('')

            } else {
                matches[matches.length - 1] += s[i]
            }
        }

        let mes = await new Reportadmin({
            headname: req.body.headname,
            bodytext: req.body.bodytext,
            username: matches

        });
        // // save to database
        mes.save();
        res.redirect(req.get('referer'));
    }



}