const user = require('../mongodb/user');
module.exports = choiceSub = (req,res)=>{
  user.update(
    {username:req.body.username},
    {$set:{subject:
      [{sub:req.body.sub,teacher:req.body.teacher}]
    }}
  ).then((result)=>{
    res.json({
      code:1,
      msg:'成功'
    })
  })
}