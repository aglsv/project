const user = require('../mongodb/user');
module.exports = teacher = (req,res)=>{
  user.aggregate([
    {$match:{identity:'teacher'}},
    {$project:{_id: 0,password:0}}
  ]).then((result)=>{
    res.send(result)
  })
}