//pre checks that every real website do check 
    // 1. authentication
    // 2. input validation 

//no middlewares 

//======================================================================

//DUMB WAY TO CHECK INPUTS AND AUTHENTICATION

/*
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

app.listen(3000);
*/
 
//=======================================================================

//USING MIDDLEWARES

const express = require("express");
const app = express();

function UserMiddleware(req, res, next){
    if (username != "harkirat" && password != "pass"){
        res.status(403).json({
            msg: "Incorrect inputs",
        });
    }else{
        next();
    };

    function kidneyMiddleware(req, res, next){
        if(kidneyId != 1 && kidneyId != 2){
            res.status(403).json({
                msg: "incorrect inputs",
            });
        }else{
            next();
        }
    };

    app.get("/health-check-ups, userMiddleware, kidneyMiddleware", function(req, res){

        res.send("your heart is healthy");
    });

    app.get("/kidney-check-ups, userMiddleware, kidneyMiddleware", function(req, res){

        res.send("your heart is healthy");
    });

    app.get("/heart-check-ups", userMiddleware, function(req, res) {

        res.send("your heart is healthy");
    });
}

app.listen(3000)