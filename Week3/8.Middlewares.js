const express = require('express');

const app = express();

//function that returns a boolean that the age of the person is more than 14 

function isOldEnoughMiddleware(req, res, next){
    const age = req.query.age;
    if(age >= 14){
        next();
    }else{
        res.json({
            msg: "Sorry you are not if age yet",
        })
    }
}

//if i want to precheck the age before every request i can remove the midddleware from the particulare request and add it like below

//app.use(isOldEnoughMiddleware);

app.get("/ride1", isOldEnoughMiddleware, function(req, res){
        res.json({
            msg: "You have successfully riden the ride 1"
        });
});

//the order of introducing a middleware matters the most 
//if i introduce the middleware here it will applicable only for the rquests that are below
//not for the request that is above this 

app.get("/ride2",isOldEnoughMiddleware, function(req, res){
    
        res.json({
            msg: "You have successfully riden the ride 2"
        });
});

//if i introduce middleware here it will useless 
//neither of the route will use the middleware

app.listen(3000);