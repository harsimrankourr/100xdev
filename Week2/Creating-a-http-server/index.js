/*
const express = require("express")

function calculateSum(a, b){
    return a+b;
}

const app = express();

app.get("/", function(req, res){
    const a = req.query.a;
    const b = req.query.b;
    const ans = calculateSum(a, b)
    res.send(ans);
})

app.listen(3001);

*/
//========================================================================

/*
const express = require("express")

function calculateSum(n){
    let ans = 0;
    for(let i=1; i<=n; i++){
        ans = ans + i;
    }
    return ans;
}

const app = express();

app.get("/", function(req, res){
    const n= req.query.n
    const ans = calculateSum(n)
    res.send(ans);
})

app.listen(3000);
*/
//======================================================================

//how to reach there
//localhost:3000/?n=30
//type this in browser

//======================================================================

/*
const express = require("express")

function calculateSum(n){
    let ans = 0;
    for(let i=1; i<=n; i++){
        ans = ans + i;
    }
    return ans;
}

const app = express();

app.get("/", function(req, res){
    const n= req.query.n
    const ans = calculateSum(n)
    res.send("hi your ans is" + ans.toString());
})

app.listen(3000);
*/
//=======================================================================

/*
REQUESTS METHODS(examples)
    1.GET- going for a consultation to get a check up
    2.POST- going to get a new kidney inserted (new)
    3.PUT- going to get a kidney replacement (updation)
    4.DELETE- going to get a kidney removed 
*/

/*
STATUS CODES
    1. 200- Everything is ok
    2. 404- Doctor is not in the hospital
    3. 500- Mid surgery light went away
    4. 411- inputs  were incorrect, wrong person come to surgery
    5. 403- you are not allowed
*/
//======================================================================

const express = require("express");
const app = express();

var users = [{
    name: 'John',
    kidneys: [{
        healthy: false
    },{
        healthy: true
    }]
}]

app.get("/", function(req, res){
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i= 0; i<johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys+1;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys; 
    res.json({
        johnKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })

    app.post("/", function(req, res){
        const ishealthy = req.body.ishealthy;
        users[0].kidneys.push({
            healthy: ishealthy
        })
        res.json({
            msg: "Done!"
        })
    })

    console.log(johnKidneys)
})

app.listen(3000);