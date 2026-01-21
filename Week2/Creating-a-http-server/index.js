/*
const express = require("express")

function calculateSum(a, b){
    return a+b;
}

const app = express();

app.get("/", function(req, res){
    const a = req.query.a;
    const b = req.query.b;
    const ans = calculateSum(a, b)
    res.send(ans);
})

app.listen(3001);

*/

/*
const express = require("express")

function calculateSum(n){
    let ans = 0;
    for(let i=1; i<=n; i++){
        ans = ans + i;
    }
    return ans;
}

const app = express();

app.get("/", function(req, res){
    const n= req.query.n
    const ans = calculateSum(n)
    res.send(ans);
})

app.listen(3000);
*/

//how to reach there
//localhost:3000/?n=30
//type this in browser

const express = require("express")

function calculateSum(n){
    let ans = 0;
    for(let i=1; i<=n; i++){
        ans = ans + i;
    }
    return ans;
}

const app = express();

app.get("/", function(req, res){
    const n= req.query.n
    const ans = calculateSum(n)
    res.send("hi your ans is" + ans.toString());
})

app.listen(3000);


