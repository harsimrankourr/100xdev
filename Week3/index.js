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

/*
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

    app.get("/health-check-ups", userMiddleware, kidneyMiddleware, function(req, res){

        res.send("your heart is healthy");
    });
 

    app.get("/heart-check-ups", userMiddleware, function(req, res) {

        res.send("your heart is healthy");
    });
}

app.listen(3000);
*/

//===========================================================================

/*
const express = require("express");

const app = express();

app.get("/health-checkup", function(req, res, next){
    console.log("hi from req1")
    next();
}, function(req, res, next){
    console.log("hi from req2")
}, function (req, res){
    console.log("hi from req2")
    res.send("hello world");
});

app.listen(3000);

*/

//=============================================================================

const express = require("express");

const app = express();

app.use(express.json());

app.post("/health-checkup", function(req, res){

    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;
    res.send("you have" + kidneyLength + "kidneys");
});

//global catches
app.use(function(err, req, res, next){
    errorCount++;
    res.json({
        msg: "sorry something is up with our server "
    })
})

app.listen(3000);