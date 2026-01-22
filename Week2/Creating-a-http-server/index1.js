const express = require("express");
const app = express();

var users = [{
    name: 'John',
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    }]
}]


app.use(express.json());

app.get("/", function (req, res) {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        johnKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
    console.log(johnKidneys)
})


app.post("/", function (req, res) {
    const ishealthy = req.body.ishealthy;
    users[0].kidneys.push({
        healthy: ishealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/", function (req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/", function (req, res) {
    console.log("Enterd into Delete route")
    console.log("Original kidneys are : ", users[0].kidneys);

    console.log("Start deleting process...");

    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy) {
            newKidneys.push({
                healthy: true
            })
        }
    }

    console.log("New Kidneys are: ", newKidneys)
    users[0].kidneys = newKidneys;
    console.log("Original kidneys became afte deletion process...", users[0].kidneys);
    res.json({ msg: "done" });
})


// app.listen(3000);
app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
})