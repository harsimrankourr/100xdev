//pre checks that every real website do check 
    // 1. authentication
    // 2. input validation 

//no middlewares 

const express = require("express");

const app = express();

app.get ("/health-check-ups", function(req, res){

    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.username;

    if(username != "harkirat" && password != "pass"){
        res.status(403).json({
            msg:"user doesnt exist",
        });
        return;
    }

    if(kidneyId != 1 && kidneyId != 2){
        res.status(411).json({
            msg: "wrong inputs",
        });
        return;
    }

    res.send("your heart is healthy");
})