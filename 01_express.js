//导入express模块
const express = require('express')
//创建web服务器
const app = express()
//设置端口监听
app.listen('3000')
//监听客户端get请求
app.get('/user',(req,res)=>{
	res.send({code:500,msg:"响应了浏览器的请求"})
})


app.use(express.static('/public'))  //静态托管目录


app.post('/user',(req,res,next)=>{
	res.send({code:200,msg:'请求成功'})
})

//http://127.0.0.1:3000/?name=张三&age=18
app.get('/',(req,res)=>{
	console.log(req.query)  //获取浏览器端传递的张三和年龄
	res.send({code:200,msg:"获取成功",deta:req.query})
})

//http://127.0.0.1:3000/user/2
app.get('/user/:id/:name',(req,res)=>{
	console.log(req.params) //获取浏览器传递的2
	res.send(req.params)
})