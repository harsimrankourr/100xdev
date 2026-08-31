// How can we do batter input validation?

// There are some input validation libraries
// ZOD is one of the such libraries

// ZOD is typescript-first schema validation with static type inference.

const express = require("express");
const z = require("zod");
const app = express();

const schema = Zod.array(Zod.number());

const schema = zod.object({
    email : zod.string(),
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