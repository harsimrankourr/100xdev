const jwt = require('jsonwebtoken');
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);

    if (!usernameResponse.success || !passwordResponse.success) {
        return null;
    }

    const signature = jwt.sign({
        username
    }, jwtPassword);

    return signature;
}

const ans = signJwt("harsimrankour48@gmail.com", "dabhbu")
console.log(ans);

function decodeJwt(token) {
    //true, false
    const decoded = jwt.decode(token);
    if (decoded) {
        return true;
    } else {
        return false;
    }
}

console.log(decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFyc2ltcmFuIiwiYWNjb3VudE51bWJlciI6MTIxMjMyMywiaWF0IjoxNzg4NDM3MTU3fQ.Ieksceyn6NsKtSIO_Fv0K_YQLJdHG0eJrbveqN8rrhI"))

function verifyJwt(token) {
    let ans = true;
    try {
        const verified = jwt.verify(token, jwtPassword);
    } catch (e) {
        ans1 = false;
    }
    return ans1;
}

const ans1 = verifyJwt("hhfjhvreunajkeifndsm");
console.log(ans);