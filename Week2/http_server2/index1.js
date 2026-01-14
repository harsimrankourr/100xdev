/*
const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const port = 3000

//Middlewares
app.use(bodyParser.urlencoded());

app.get('/', function(req, res)  {
    console.log(req.body);
  res.send('Hello World!')
})


app.listen(port, function()  {
  console.log(`Example app listening on port ${port}`)
})
  */

//to send a request from browser to here we use 
//fetch

//here port is 3000
//if there is not any existing posrt
//by default its port is 443

const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const port = 3000

//Middlewares
app.use(bodyParser.json());

app.get('/', function(req, res)  {
    console.log(req.body);
  res.send('Hello World!')
})

app.post('/backend-api/conversation', function(req, res){
    const message = req.body.message;
    console.log(message);
    //machine learning thing
    req.json({
        output: "2+2 = 4"
    })
})

app.listen(port, function()  {
  console.log(`Example app listening on port ${port}`)
})