//it is just another way to write the function 
/*
function sum(a,b){
    return a+b;
}

const sum = (a,b) => {
    return a+b;
}

const ans = sum(1,2);
console.log(ans);
*/
//=========================================================

/*
given an array, give me back an array in whuch every value is multiplied by 2
    input = [1,2,3,4,5]
    output = [2,4,6,8,10]
*/

const input = [1,2,3,4,5];

// const newArray = [];

// for(let i = 0; i<input.length; i++){
//     newArray.push(input[i] * 2);
// }

// console.log(newArray);

/*
function transform(i){
    return i * 2;
}

const ans = input.map(transform);
console.log(ans);
*/

//whenever we are asked to transform arraybwe use map 

function filterLogic(n){
    if(n%2 == 0){
        return true;
    }else {
        return false;
    }
}

const ans = input.filter(filterLogic);
console.log(ans);