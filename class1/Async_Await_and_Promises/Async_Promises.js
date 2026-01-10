//Promises are synntactical sugar that make this code slightly more readable
//there is no use of callbacks in promises

function HarsimranReadFile(){
    console.log("inside harsimransreadfile");
    return new Promise(function(resolve){
        console.log("inside promise");
        FileSystem.readFile("a.txt", "utf-8", function(err, data){
            console.log("before resolve");
            resolve(data);
        });
     })
}

//Callbacl function to call
function onDone(data){
    console.log(data)
}

HarsimranReadFile().then(onDone);