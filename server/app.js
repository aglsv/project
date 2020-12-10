const express = require('express');
const db = require('./mongodb/db');
const bodyParser = require('body-parser');
const app = express();
// 配置
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    next();
});
app.use('/public',express.static('public'));

// 接口
app.post('/login',require('./api/login'))
app.post('/user',require('./api/user'))
app.post('/teacher',require('./api/teacher'))
app.post('/home/sub',require('./api/getSubject'))
app.post('/home/start',require('./api/choiceSub'))
app.post('/home',require('./api/findSub'))
// 监听
app.listen(3000,()=>{
  console.log('服务已启动');
});