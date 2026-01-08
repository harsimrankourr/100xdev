//Write a function to sum of two numbers 
function sum (a,b){
    return a+b;
}


const value = sum(1,2)
console.log(value);

//Functions can take other functions as the input 
function sum (num1,num2){
    let result = num1+ num2;
    return result;
}


function displayResult(data){
    console.log("Result of sum is  "+ data);
}


function displayResultPassive(data){
    console.log("Sum's result is: " +data);
}


const ans = sum(1,2);
displayResult(ans);
