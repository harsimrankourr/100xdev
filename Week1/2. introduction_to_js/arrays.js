//Print all the even number of an array 
const ages = [21,22,23,24,25]


for(let i=0; i<ages.length; i++){
    if(ages[i] % 2 == 0){
        console.log(ages[i]);
    }
}


//Write a program which print all the male people’s first name given a complex object
const personArray = ["Harskirat", "Harsimran", "Raman"]
const genderArray = ["male", "female", "male"]
 
for(let i=0; i<personArray.length; i++){
    if (genderArray[i] == "male"){
        console.log(personArray[i]);
    }
}

