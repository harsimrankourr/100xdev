function jsonMethods(jsonString) {
  console.log("Original JSON String:", jsonString);

  // Parsing JSON string to JavaScript object
  let parsedObject = JSON.parse(jsonString);
  console.log("After JSON.parse():", parsedObject);

  // Stringifying JavaScript object to JSON string
  let jsonStringified = JSON.stringify(parsedObject);
  console.log("After JSON.stringify():", jsonStringified);
}

// Example Usage for JSON Methods
const sampleJSONString =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

jsonMethods(sampleJSONString);

const users= {"name" : "harsimran" , "age" : 19 , "gender" : "female"}


/*const user = JSON.parse(users)
console.log(user["gender"]);

const user = {
    name : "harsimran",
    gender : "female"
}
user["name"]
const finalString = JSON.stringify(user)
console.log(finalString["name"])
*/
