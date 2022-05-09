for (let i = 1; i <= 10; i++) {
    setTimeout(function() { console.log(i) }, 1000*i);
}

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};
let is_shop_open = true;

//async await
function time(ms){
    return new Promise((resolve, reject) => {

        if (is_shop_open){
            setTimeout(resolve,ms)
        }

        else {
            reject(console.log("Closed"))
        }
    })
}
async function kitchen(){
    try{

    await time(2000)
    console.log(`${stocks.Fruits[0]} was selected`);

    await time(0)
    console.log("production has started")

    await time(2000)
    console.log("fruit has been chopped")

    await time(1000)
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

    await time(1000)
    console.log("start the machine")

    await time(2000)
    console.log(`ice cream placed on ${stocks.holder[1]}`)

    await time(3000)
    console.log(`${stocks.toppings[0]} as toppings`)

    await time(2000)
    console.log("Serve Ice Cream")
}


    catch (error){
        console.log("customer left", error)
    }
    finally {
        console.log("Day end")
    }
}
kitchen()




//Promise

let order = (time,work)=>{
    return new Promise((resolve, reject) => {
        if (is_shop_open){

            setTimeout(()=>{

                resolve(work())
            },time)

        }

        else {
            reject(console.log('shop is closed'))
        }
    })
}

// order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))
//
// .then(()=>{
//     return order(0000,()=>console.log('production has startet'))
// })
// .then(()=>{
//     return order(2000, ()=>console.log("Fruit has been chopped"))
// })
//
// .then(()=>{
//     return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
// })
//
// .then(()=>{
//     return order(1000, ()=>console.log("start the machine"))
// })
//
// .then(()=>{
//     return order(2000, ()=>console.log(`ice cream placed on ${stocks.holder[1]}`))
// })
//
//
// .then(()=>{
//     return order(3000, ()=>console.log(`${stocks.toppings[0]} as toppings`))
// })
//
//
// .then(()=>{
//     return order(2000, ()=>console.log("Serve Ice Cream"))
// })
// .catch(()=>{
//     console.log('Customer left')
// })
// .finally(()=>{
//     console.log('end of the day')
// })


// function topping_choice(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve( console.log('which topping would you like?'))
//
//         },3000)
//     })
// }
//
// async function kitchen(){
//
//     console.log('a')
//     console.log('b')
//
//     await topping_choice()
//
//     console.log('c')
//     console.log('d')
// }
//
// kitchen()
// console.log("doing the dishes")
// console.log("cleaning the tables")
// console.log("taking orders")




