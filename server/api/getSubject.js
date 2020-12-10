const subjects = require('../mongodb/subjects');
module.exports = getSubject = (req,res)=>{
  subjects.aggregate([{$project:{_id: 0,name:1,children:1}}])
  .then((result)=>{
    res.send(result)
  })
}