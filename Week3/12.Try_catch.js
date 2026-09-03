/*
When an exception is raised the process exists 
since the js program doesn't want to proceed anymore

But you might want the program to still continue executing. 
That is where you can use try catch 

If you know that the certain code base is unsafe 
that may through an error 
wrap onside a catch 
*/

try {
    let a;
    console.log(a.length);
    console.log("hi there from the inside")
} catch (e) { // if control does found a error in the try then it will reach catch
    console.log("hi there from the catch")
    // if controle ndoesn't found any error in the try it doesn't reach the catch
}
// Try catch syntax

console.log("hi there")