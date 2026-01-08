/*
 Even if we are single threaded, we can do things parallely by deligating.
 we can also context switching between tasks if need be.

 Net amount of time taken to do a task can be decreased.
 by doing context switching and deligating.
 */

function findSum(n){
    let ans = 0;
    for (let i=0; i<n; i++){
        ans += i;
    }
    return ans;
}

function findSumTill100(){
    return findSum(100);
}
setTimeout(findSumTill100, 1000)
console.log ("hello world")
