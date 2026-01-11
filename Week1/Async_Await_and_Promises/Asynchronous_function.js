/*
 Even if we are single threaded, we can do things parallely by deligating.
 we can also context switching between tasks if need be.

 Net amount of time taken to do a task can be decreased.
 by doing context switching and deligating.
 */

 //============================================================
 //Set time out Asynchronous function

 /*
function findSum(n){
    let ans = 0;
    for (let i=0; i<n; i++){
        ans += i;
    }
    return ans;
}

function findSumTill100(){
    console.log(findSum(100));
}

//Calling an Async function
//function will called after 1000 miliseconds 

setTimeout(findSumTill100, 1000)
console.log ("hello world")
*/

//===========================================================

//fs.readFile- to reading a file in our file system

/*
const fs = require("fs");
//fs is file system module 

fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data);
} );

console.log("hi there");

let a=0;
//takes very long, longer than the file read
for(let i=0; i<10000000; i++){
    a++;
}

console.log("hi there 2")
*/

//=================================================================
/*
console.log("hi there");

setTimeout(function(){
    console.log("from inside the async fn")
}, 20000);

setTimeout(function(){
    console.log("from inside the async fn")
}, 20000);

let a=0;
for (let i=0; i<10; i++){
    a = a+1;
}
console.log(a);
*/

/*there are three things: Call stack- where function calls 
   web apis- jithe oo function call hona hai jo sequence vich baad ch auna 
   then Callback queue- 
                      lets suppose sequence ch baad ch aun wale functions ready hai aapne time de according
                      but control hle loop vich fsya hai ta oh function callback queue reh k wait krega to be called 

    So this is the real world example of callbacks 
    they are used mainly in Asynchronous functions 
*/

//fetch- to fetch data from API endpoint
