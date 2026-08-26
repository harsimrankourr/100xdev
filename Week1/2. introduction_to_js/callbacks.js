/*
function sum (num1,num2){
    let result = num1+ num2;
    displayResult(result);
}


function displayResult(data){
    console.log("Result of sum is  "+ data);
}


function displayResultPassive(data){
    console.log("Sum's result is: " +data);
}


const ans = sum(1,2);
displayResult(ans);
function sum (num1,num2, fnToCall){
    let result = num1+ num2;
    fnToCall(result);
}


function displayResult(data){
    console.log("Result of sum is  "+ data);
}


function displayResultPassive(data){
    console.log("Sum's result is: " +data);
}


const ans = sum(1,2,displayResult);

//=====================================================================================

function calculateArthmatic (a,b,type){
    if (type == "sum"){
        return a+b;
    }
    if (type == "minus"){
        return a-b;
    }
}


const value = calculateArthmatic (1,2,"minus");
console.log(value);
//======================================================================================

/*
function calculateArthmatic (a,b,type){
    if (type == "sum"){
        const value = sum(a,b);
        return value;
    }
    if (type == "minus"){
        const value = sub(a,b);
        return value;
    }
}


function sum(a,b){
return a+b;
}


function sub(a,b){
    return a-b;
}


const value = calculateArthmatic (1,2,"minus");
console.log(value);
*/


//Using callback function
function calculateArthmatic (a,b,arthmaticFinalFunction){
   
    const ans = arthmaticFinalFunction(a,b)
    return ans;
}


function sum(a,b){
return a+b;
}


const value = calculateArthmatic (1,2,sum);
console.log(value);

