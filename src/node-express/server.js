'use strict';
var express = require('express');
var path = require('path');
var PORT = 3666;
var app = express();
app.use(express.static(path.join(__dirname, '../../')));
/**加载本地词库地址*/
app.use(express.static('/storage'));
app.listen(PORT);
console.log('欢迎访问 http://localhost:' + PORT);
