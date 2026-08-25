function sum(num1, num2, fnToCall) {
    let result = num1 + num2;
    fnToCall(result);
}

function displayResult(data) {
    console.log("Result of the sum is: " + data);
}

const ans = sum(1, 2, fnToCall);

//====================================================

function calculateArithmatic(a, b, arithmaticFinalFunction) {
    const ans = arithmaticFinalFunction(a, b)
    return ans;
}

function sum(a, b) {
    return a + b;
}
const value = calculateArithmatic(1, 2, sum);
console.log(value);

//=====================================================

//Set Timeout

function greet(){
    console.log("It take 3 seconds to print");
}

setTimeout(GPUExternalTexture, 3*1000)