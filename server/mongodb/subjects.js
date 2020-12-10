const mongoose = require('mongoose');
const subjectSchema = new mongoose.Schema({
  name:String,
  children:Array,
  createTime:{
      type : Date,
      default : Date.now
  }
});
module.exports = subjectModel = mongoose.model('subjects',subjectSchema);
