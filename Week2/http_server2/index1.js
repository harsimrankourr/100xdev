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