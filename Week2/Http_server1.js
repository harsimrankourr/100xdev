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