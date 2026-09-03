// Assignment

const express = require('express');

const app = express();
// You have been given with an express server which have a few end points.
// Your task is to create a global middleware(app.use) which will
// Rate limit the requests from a user to only 5 requests per second 
// if a user sends more than 5 requests in a single second, the server
// should block them with a 404 .
// User will be sending in their user id in the header as 'user-id'
// You  have been given a numberofrequestsForUser object to start off with which  
// clears every one second 

let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsFOrUser = {};
}, 1000)

app.use(function (req, res) {
    const userId = req.headers["user-id"];
    if (numberOfRequestrsForUser[userId]) {
        numberOfRequestsForUser[userId] = numberOfRequestsForUser[userId] + 1;
        if (numberOfRequestsForUser[userId] > 5) {
            res.status(404).send("no entry");
        } else {
            next();
        }
    } else {
        numberOfRequestsForUser[userId] = 1;
        next();
    }
})