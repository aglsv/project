const user  = require('../mongodb/user');
module.exports = userinfo = (req,res)=>{
  user.find({username:req.body.username}).then((result)=>{
    res.send(result)
  })
} 