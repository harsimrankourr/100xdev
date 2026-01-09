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
//busy waiting
function syncSleep(){
    let a=1;
    for (let i=0; i<100000000; i++){
        a++;
    }
}
//when the control reaches syncsleep it goes to function syncsleep and remains busy 
//Thread is not sleeping, it is busy in the function 
syncSleep();
findSumTill100();

console.log ("hello world")