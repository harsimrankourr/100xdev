/*
if (kidneyId != 1 && kidneyId != 2){
return false};
*/

// THIS IS WHERE ZOD COME IN THE PICTURE 

const express = require("express");
const z = require("zod");
const app = express();

app.use(express.jsonn())

const kidneyInput = z.literal("1").or(z.literal("2"));

app.post("/health-check-up", function (req, res){
    //do something with kidney here
    const kidneyId = req.body.kidneyid;
    const validation = kidneysInput.safeParse(kidneyId)
    if(!validation.success){
        res.send("incorrect input");
        return;
    }
    res.send("your kidney id is " + kidneyid);
});

app.listen(3000);