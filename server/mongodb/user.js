const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:String,
    username:String,
    password:String,
    identity: String,
    college:String,
    speciality:String,
    class:String,
    subject:Array,
    createTime:{
        type : Date,
        default : Date.now
    }
});
module.exports = userModel = mongoose.model('users',userSchema);
