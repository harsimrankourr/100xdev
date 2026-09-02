/*
User hit the backend and backend hits the database 

We don't have the access to database 

Multiple types of databases
    - Graph DB
    - Vector DB
    - SQL DB
    - NoSQL DB

Mongo DB which is NoSQL database lets us to create database 

In each DB, it lets us to create tables 
In each table, it lets you dump JSON data
It is schemaless (Schemaless means you can put anything in it)
It scales well and is a decent choice for most use cases 


How does the backend connect to the databases 
Using libraries!
- Express lets you to create an HTTP server 
- Jsonwebtokens library lets us to create jets
- Mongoose lets us connect to our database 
*/
//-------------------------------------------------------------------------------

// const mongoose = require('mongoose');
// mongoose.connect("mongodb+srv://harsimrankour48_db_user:X5LWDocMJgfTCSn1@cluster0.n5a7qcq.mongodb.net/myDatabase");

// const User = mongoose.model('user', { name: String, email: String, password: String });

//   const user = new User({
//     name: 'Harsimran kaur',
//     email: 'harsimrankour48@gmail.com',
//     password: '1234'
// });
// user.save();

//--------------------------------------------------------------------------------

const express = require("express")
const mongoose = require('mongoose');
const app = express();

app.use(express.json())

mongoose.connect("mongodb+srv://harsimrankour48_db_user:X5LWDocMJgfTCSn1@cluster0.n5a7qcq.mongodb.net/myDatabase");

const User = mongoose.model('user', { name: String, email: String, password: String });

app.post("/signup", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({ email: username });
    if (existingUser) {
        return res.status(400).send("Username already exists");
    }
    const user = new User({
        name: name,
        email: username,
        password: password
    });
    user.save();
    res.json({
        "msg": "User created successfully"
    })
})