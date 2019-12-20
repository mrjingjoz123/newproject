const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserModel = new Schema({
    username :{ 
        type:String,
        require: true,
        unique: true,
        lowercase: true
    },
    password :{ 
        type:String,
        require: true     
    }
});

const Username = mongoose.model('user',UserModel,'user');
module.exports = Username