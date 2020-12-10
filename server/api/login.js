const user = require('../mongodb/user');
module.exports = login = (req,res)=>{
    user.find({username:req.body.username}).then((result)=>{
        if(result.length == 0){
            res.json({
                code:0,
                msg:'当前用户不存在'
            })
        }else if(result.length > 0){
            user.find({
                username:req.body.username,
                password:req.body.password,
                identity:req.body.identity
            }).then((result)=>{
                if(result.length == 1){
                    res.json({
                        code:1,
                        msg:'登陆成功',
                        name:result[0].name,
                        username:result[0].username,
                        identity:result[0].identity
                    })
                }else{
                    res.json({
                        code:0,
                        msg:'用户名或密码错误'
                    })
                }
            })
        }
    })
}