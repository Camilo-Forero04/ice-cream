//Callback
function one(call_two){ //reciving function two
console.log("step one completed. Please call step 2");
call_two(); //calling function two
}
function two(){
console.log("step two")
}
one(two); // Calling function one, and passing function two
// Callback: Basically you can call a function in a function 