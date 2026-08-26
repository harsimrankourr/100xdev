const user1 = {
    firstName :"harsimran",
    gender : "female"
}


console.log(user1["firstName"])
console.log(user1["gender"])

//Write a program which print all the male people’s first name given a complex object
const allUsers = [{
    firstName: "Hrsimran",
    gender: "female"
}, {
    firstName: "harkirat",
    gender: "male"
}, {
    firstName: "priya",
    gender: "female"
}]


for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i]["gender"] == "male")
        console.log(allUsers[i]["firstName"])
}
