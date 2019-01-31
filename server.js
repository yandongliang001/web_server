const express = require('express');
const path = require('path');
const app = express();
const request = require('request');

//中间路径
const serverUrl = 'https://api.bootcdn.cn';//项目中的所有请求会经过本地的这个服务器，这里的路径就是本地的服务器所请求的具体的后端开发人员的服务路径
app.use(express.static(path.join(__dirname,'./')));//静态资源和这个文件在同一个目录下
app.use('/',(req,res) => {
    let url = serverUrl + req.url;
    req.pipe(request(url)).pipe(res);
})
app.listen(8080,'127.0.0.1',() => {
    console.log('server is running at port 8080');
})