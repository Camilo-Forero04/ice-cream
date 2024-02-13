let stocks ={
    Fruits :["strawberry", "grapes","banana","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"],
};
let is_shop_open=true;

function time(ms){
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(resolve(),ms);
        }else{
            reject();
        }
    })
}
async function kitchen(){
    try{
    await time(2000);
    console.log(`${stocks.Fruits[2]} was selected`);
    await time(0);
    console.log("production has started");
    await time(2000);
    console.log("fruit has been chopped");
    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`);
    await time(1000);
    console.log("machine has started");
    await time(2000);
    console.log(`ice cream was placed on a ${stocks.holder[0]}`);
    await time(3000);
    console.log(`${stocks.toppings[0]}was added as toppings`);
    await time(0);
    console.log("serve ice cream");
    }catch(error){
        console.log("costumer has left");
    }finally{
        console.log("day ended, shop is closed")
    }
}