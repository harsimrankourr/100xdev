/*
There are many libraries that let you create HTTP server
The most famous one is express
*/

const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res)  {
  res.send('Hello World!')
})

app.get('/Signup', function(req, res)  {
  res.send('Hello World1!')
})

app.listen(port, function()  {
  console.log(`Example app listening on port ${port}`)
})

//create a todo app that lets user store todos on the server
//try to create a http server from scratch in c 
//create an http server in rust using actix web
//create an http server in golang using the gurrila framework
//spring boot java

//AWS is a firebare which does not have server 
