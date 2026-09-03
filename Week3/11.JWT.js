/*

const jwt = require("jsonwebtoken");

// generate, decode, verify

const value = {
    name: "harsimran",
    accountNumber:1212323
}

// sign is the function to generate a token
const token = jwt.sign(value, "secret");
console.log(token);

// This token has been generated using this secret, and hence this token 
// can only be verified using this secret
// This is your chequebook

// Obtained JWT
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFyc2ltcmFuIiwiYWNjb3VudE51bWJlciI6MTIxMjMyMywiaWF0IjoxNzg4NDM3MTU3fQ.Ieksceyn6NsKtSIO_Fv0K_YQLJdHG0eJrbveqN8rrhI

*/
//---------------------------------------------------------------------------------------------

const jwt = require("jsonwebtoken");

const value = {
    name: "Harsimran",
    accountNumber: 123211222
}

//sign and not generate

const verifiedValue =
    jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFyc2ltcmFuIiwiYWNjb3VudE51bWJlciI6MTIxMjMyMywiaWF0IjoxNzg4NDM3MTU3fQ.Ieksceyn6NsKtSIO_Fv0K_YQLJdHG0eJrbveqN8rrhI");
console.log(verifiedValue);
