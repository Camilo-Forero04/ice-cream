let stocks ={
    Fruits :["strawberry", "grapes","banana","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"],
};
    //condition whether to resolve or reject
let is_shop_open=true;
    //relationship beetween time and work 
let order = (time, work)=>{
    return new Promise((resolve, reject)=>{
        if(is_shop_open){
            setTimeout(()=>{
                resolve(work())
            },time)
        }else{
            reject(console.log("Our shop is closed"))
        }
    })

}
    //resolving the promise
order(2000,()=>console.log(`${stocks.Fruits[3]} was selected`))
.then(()=>{
    return order(0,()=>console.log("Production has started"));
})
    //Promise chaining
.then(()=>{
    return order(2000,()=>console.log("fruit has been chopped"));
})
.then(()=>{
    return order(1000,()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has been added`))
})
.then(()=>{
    return order(1000,()=>console.log("the machine was started"));
})
.then(()=>{
    return order(2000,()=>console.log(`ice cream has been placed on ${stocks.holder[1]}`));
})
.then(()=>{
    return order(3000,()=>console.log(`${stocks.toppings[0]} was added as toppings`));
})
.then(()=>{
    return order(2000,()=>console.log("serve ice cream"));
})
    //to handle in case the promise was rejected
.catch(()=>{
    console.log("costumer left");
})
.finally(()=>{
    console.log("day ended, the shop is closed")
})