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

app.use(express.json());

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
    
    app.put("/", function(req, res){
        for (let i = 0; i<users[0].kidneys.length; i++){
            users[0].kidneys[i].healthy = true;
        }
        res.json({});
    })

    console.log(johnKidneys)
})

app.listen(3000);