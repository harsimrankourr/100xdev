function square(n){
    return n*n
}


function sumOfSquares(a,b){
    const  val1 = square(a);
    const  val2 = square(b);


    return val1 + val2;  
}


console.log(sumOfSquares(1,2));

//==================================================
 
function square(n){
    return n*n
}
function cube(n){
    return n*n*n
}


function sumOfSquares(a,b){
    const  val1 = square(a);
    const  val2 = square(b);


    return val1 + val2;  
}
function sumOfCubes(a,b){
    const  val1 = cube(a);
    const  val2 = cube(b);


    return val1 + val2;  
}


console.log(sumOfCubes(1,2));

//Replacing above with callbacks 


function square(n){
    return n*n
}
function cube(n){
    return n*n*n
}




function sumOfSomething(a,b,callback){
    const  val1 = callback(a);
    const  val2 = callback(b);


    return val1 + val2;  
}


console.log(sumOfSomething(1,2,cube));

