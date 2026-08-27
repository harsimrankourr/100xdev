// Promises are synntactical sugar that make this code slightly more readable
// There is no use of callbacks in promises
// Promises are used to create our own asynchronous functions.

//The promise object represents the eventual completion of an asynchronous operation and its resulting value.

//This lets asynchronous method value like synchronous method

// Promise in a function can return synchronously
// But the data of the promise can return asynchronously 

/*
let p = new Promise (function(resolve){
    resolve("hi there");
});

p.then (function(){
    console.log(p);
})
*/

/*Place for the writer of the async function to do their magic (get the ketchup)
and call resolve at the end with the data.
resolve vich asi oh duja km likhna hunda jo async function de call hon de 
during krna hunda 
*/

/*
.then gets called whenever the async function resolve
.then wala function resolve wale function tou pele call hona jdd tkk  
.then wale function call hoyega onne der ch tusi resolve wala function call 
kr chukke hovoge 
*/

/*
Defining site first 
Calling site after thet
*/
//====================================================================

const fs = require('node:fs');

function HarsimranReadFile() {
    console.log("inside harsimransreadfile");
    return new Promise(function (resolve) {
        console.log("inside promise");
        fs.readFile("a.txt", "utf-8", function (err, data) {
            console.log("before resolve");
            resolve(data);
        });
    })
}

//Callback function to call
function onDone(data) {
    console.log(data)
}

HarsimranReadFile().then(onDone);

//================================================================

/*
var d = new Promise(function(resolve){
    setTimeout(function(){
        resolve("foo");
    }, 1000);
});

function callback(){
    console.log(d);
}

console.log(d);
d.then(callback)
*/

//===================================================================

//using callbacks

function myOwnSetTimeout(callback, duration) {
    setTimeout(function () {
        callback()
    }, duration);
}
myOwnSetTimeout(function()
{

}, 1000)

//using promises

function promisifiedOwnSetTimeout(duration) {
    const p = new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, duration);
    });
    return p;

}

//===================================================================

//Creating a promise 
function promisifiedOwnSetTimeout(duration) {
    const p = new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, duration);
    });
    return p;

}

//Calling a promisified function

// promisifiedOwnSetTimeout(1000).then(function(){
//     console.log("first is done"); 
//     // Callback hell
//     promisifiedOwnSetTimeout(2000).then(function(){
//         console.log("second one done");
//     });
// })

//Promise channing is used to get rid of callback hell

promisifiedOwnSetTimeout(1000).then(function(){
    console.log("first is done"); 
    // Promise channing
    return promisifiedOwnSetTimeout(2000)
}).then (function(){
    console.log("second one done")
});


//=================================================================

function sumOfSquares(a,b, fn){
    let value1 = a*a;
    let value2 = b*b;
    fn(value1+value2);
}

sumOfSquares(1,2,function(value){
    console.log(value);
})

sumOfSquares(1,2).then(function(value){
    console.log(value);
})

//==================================================================

// Steps of execution of a promisified function

console.log("at the top 1")

function promisifiedTimeout(){

    console.log("function called 3")

    return newPromise(function(resolve){

        console.log("inside promise callback 4")

        setTimeout(function(){

            console.log("setTimeout called 5")

            resolve("done baby! I am burnt out.");
        }, 5000);
    });
}

console.log("in the middle 2")

promisifiedTimeout(). then(function(value){
    console.log("promisified then 6")
    console.log(value);
});