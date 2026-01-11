//Promises are synntactical sugar that make this code slightly more readable
//there is no use of callbacks in promises

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

function HarsimranReadFile(){
    console.log("inside harsimransreadfile");
    return new Promise(function(resolve){
        console.log("inside promise");
        fs.readFile("a.txt", "utf-8", function(err, data){
            console.log("before resolve");
            resolve(data);
        });
     })
}

//Callback function to call
function onDone(data){
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


