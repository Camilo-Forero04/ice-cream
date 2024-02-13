let stocks ={
    Fruits :["strawberry", "grapes","banana","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"],
};
let order = (fruit_name,call_production)=>{
    setTimeout(()=>{
        console.log(`${stocks.Fruits[fruit_name]} was selected`);
    },2000);
    call_production();
};
let production =()=>{

};
order(0,production);