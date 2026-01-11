//Async await is also a syntatic sugar 
//no callbacks and no .then syntax 

function harsimransAsyncfunction(){
    let p = new Promise(function(resolve){
        //do some async logic here
        setTimeout(function(){
            resolve("hi there")
        }, 3000)
    });
    return p;
}

async function main(){
    //no callbacks, no .then syntax

    // if i wrote the below hi there1 will also print after 3 seconds 
    
    let value = await harsimransAsyncfunction()
    console.log("hi there1");
    console.log(value);
    

   // if i wrote the below hi there1 will print immidiately
    /*
    harsimransAsyncfunction().then(function(value){
        console.log(value);
    })
    console.log("hi there1")
    */
}

main();