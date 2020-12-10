const user = require('../mongodb/user');
module.exports = findSub = (req,res)=>{
  user.find({username:req.body.username,subject:{$exists:true}}).then((result)=>{
    res.send(result[0].subject)
  })
}