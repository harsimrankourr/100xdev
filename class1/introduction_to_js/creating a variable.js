/*
Languages are used to write the applications 
Developers write high level codes in these languages.
Every language has a compiler which convert the developer code into 0’s and 1’s
C++ is a compiled language 
It means first it converts its high level code into a binary t
Hen you can run binary distributed 
JavaScript is a Interpreted language 
It does not convert a js file into a binary first 

Static and dynamic language 
Single threaded nature of js
Js will use one core of a machine at a time 
Dont split the task to the different cores to minimise the time taken 
Can only use one thread at a time 
This is why it is considered to be bad language for scalable systems
There is a way to make it use all cores of a machine
Creating variables 
(let, const, var)
*/

console.log("Hello word");n


var a = 1;
console.log(a);


var a = 1;
a = 2;
console.log(a);


let a = 1;
a = 2;
console.log(a);


const a = 1;
a = 2;
console.log(a); //will give us error coz canst means a fix constant value



let firstName = "Harsimran";
let age = 19;
let isMarried = false;


console.log("This person name is " +firstName+ " and their age is " + age)


console.log("this person name is ");
console.log(firstName);
