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
const port = process.env.POST || 3000
app.use(express.json());

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

//for exporting environment variables use 
//"set PORT=3035" command in window
//use "export PORT=3035" in mac

/*
npm is node package manager 
it means installing packages for use 

npx means only use of the packages 
but not installing them
*/