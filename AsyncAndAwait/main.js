//Handeling promises the right way
let stocks ={
    Fruits :["strawberry", "grapes","banana","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"],
};
let is_shop_open=true;
//the chef asking for the costumer topping
let toppings_choice=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(console.log("Which topping would you like ?"));
        },3000)
    })
}
//async function
async function kitchen(){
    //things are going on in the kitchen as usual
    console.log(" A ");
    console.log(" B ");
    console.log(" C ");
    // until the chef has to leave the kitchen to ask for a costumer topping
    //await can only be used in async functions, and it is used to call a function that resolve or reject a promise in an specific time while completing other tasks
    await toppings_choice();
    //as the chef had to leave, this had to wait until the chef returns to be done.
    console.log(" D ");
    console.log(" E ");
}

kitchen();
//this will be happening after the chef leaves the kitchen, it's independent to wha the chef does.
console.log("doing the dishes");
console.log("cleaning the tables");
console.log("taking other orders");