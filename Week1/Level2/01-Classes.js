//Classes are the blue print of objects 
/*
class Animal{
    constructor(name, legCount, speaks){
        this.name = name;
        this.legCount = legCount;
        this.Speaks = speaks;
    }
    speaks(){
        console.log("hi there" + this.speaks)
    }
}


let dog = new Animal("dog", 4, "bhaow bhaow");
let cat = new Animal("cat", 4, "meow meow");
dog.speaks();
*/

//Static
class Animal{
    constructor(name, legCount, speaks){
        this.name = name;
        this.legCount = legCount;
        this.Speaks = speaks;
    }
    static myType(){
        console.log("Animal")
    }
    speaks(){
        console.log("hi there" + this.speaks)
    }
}
console.log(Animal.speak())


let dog = new Animal("dog", 4, "bhaow bhaow");
let cat = new Animal("cat", 4, "meow meow");
dog.speaks();





//Date is like a class which is premade for us 
const currentDate = new Date();


console.log(currentDate.getMonth()+1);
console.log(currentDate.getDate());
console.log(currentDate.getYear());
console.log(currentDate.getFullYear());

function dateMethods() {
  const currentDate = new Date();
  console.log("Current Date:", currentDate);

  // Getting various components of the date
  console.log("Date:", currentDate.getDate());
  console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
  console.log("Year:", currentDate.getFullYear());
  console.log("Hours:", currentDate.getHours());
  console.log("Minutes:", currentDate.getMinutes());
  console.log("Seconds:", currentDate.getSeconds());

  // Setting components of the date
  currentDate.setFullYear(2022);
  console.log("After setFullYear:", currentDate);

  currentDate.setMonth(5); // Setting month to June (zero-indexed)
  console.log("After setMonth:", currentDate);

  // Getting and setting time in milliseconds since 1970
  console.log("Time in milliseconds since 1970:", currentDate.getTime());

  const newDate = new Date(2023, 8, 15); // Creating a new date
  console.log("New Date:", newDate);
}

// Example Usage for Date Methods
dateMethods();

function calculateSum (n){
    let a = 0;
    for(let i = 0; i<100000000; i++){
        a = a + i
    }
    return a;
}


const beforeDate = new Date();
const beforeTimeInMS = beforeDate.getTime();
calculateSum();


const afterDate =new Date();
const afterTimeInMs =afterDate.getTime();


console.log()
