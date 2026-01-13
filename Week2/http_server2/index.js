const express = require('express')
const app = express()
const port = 3000

app.get('/route-handler', function(req, res)  {
  res.JSON({
    name: "harsimran",
    age: 19
  })
})

app.get('/conversation', function(req, res)  {
    //console.log(req.header["authorization"])
    //console.log(req.body)
  res.send({
    msg: "2+2 = 4"
  })
})

app.get('/', function(req, res)  {
  res.send('Hello World!')
})

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})

//create a simple http server in c from scratch
//creat a todo application where u store data in a file
//create a rust/golang/java http server
//middlewares