// How can we do batter input validation?

// There are some input validation libraries
// ZOD is one of the such libraries

// ZOD is typescript-first schema validation with static type inference.

// ZOD can be used independent of express 

// ZOD will us blue print 

const express = require("express");
const z = require("zod");
const app = express();

const schema = z.object({
    email : z.string(),
    password: z.string(),
    country: z.literal("IN"). or(z.literal("US")), 
    kidneys: z.array(z.number())
})

app.use(express.json());

app.post("/health-checkup", function (req, res) {
    //kidney = [1,2]
    const kidneys = req.body.kidneys;

    const response = schema.safeParse(kidneys)
    if (!response.success) {
        res.status(411).json({
            msg: "input is invalid"
        })
    } else {
        res.send({
            response
        })
    }
});

app.listen(3000);

//==================================================================================

/*
const zod = require("zod");

//if this is an array of number with atleast 1 input, return true, else return false 

function validateInput(arr){

    const schema = zod.object({
        email : zod.string().email(),
        password : zod.string().min(8)
    })

    const reponse = schema.safeParse(obj);
    console.log(response);
}

validateInput([1,2,3]);

*/

// OR ---------------------------------

/*
const zod = require("zod");

//if this is an array of number with atleast 1 input, return true, else return false 

function validateInput(arr){

    const schema = zod.object({
        email : zod.string().email(),
        password : zod.string().min(8)
    })

    const reponse = schema.safeParse(obj);
    console.log(response);
}

validateInput({
    email: "hasrimarnkour48@gmail.com",
    password: "123123123"
});

*/

//OR ---------------------------------

const zod = require("zod");

//if this is an array of number with atleast 1 input, return true, else return false 

function validateInput(arr){

    const schema = zod.object({
        email : zod.string().email(),
        password : zod.string().min(8)
    })

    const reponse = schema.safeParse(obj);
    console.log(response);
}

app.post("/login", function(req,res){
    const response = validateInput(req.body)
    if(!response.success){
        res.json({
            msg: "your inputs are invalid"
        })
        return;
    }
})

// Coersion for permitives ->
    // To pusbh someone to do something