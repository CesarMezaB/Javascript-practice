const user = {
    name: 'pepe',
    age: 21,
    debt: 0,
};

let order = [];
let orderPrice = 0;

const showMenu = () => { 
    console.log('Code - Product - Price');
    productsArray.forEach(product => console.log(`${product.code} - ${product.name} - $${product.price}`))
}

const orderProduct = (cod) =>{
    if (!(typeof(cod) === 'string')) return 'The value is not valid'
    if (!cod ) return 'Enter a valid code'
    
   const searchProduct = productsArray.find(product => product.code === cod)

   if(!searchProduct) return 'The product does not exist';

   order.push(searchProduct);
   console.log('Your product has been added. Your order is:');
   return seeOrder();
 
}

const seeOrder = () => order

const calculatePrice = () =>{
    let price = 0
    for (product of order){
        price += product.price
    }
    orderPrice = price
    return orderPrice
}

const finalizeOrder = () =>{
    calculatePrice()
    user.debt = orderPrice

    order = []
    orderPrice = 0
    
    return `${user.name}, must pay ${user.debt} dollars`
}

const payOrder = (amountDelivered) => {
    if (!(typeof amountDelivered === "number")) return 'value is not a number';

    if (amountDelivered < user.debt){
        return `you do not have enough to pay for your order`
    }else if (amountDelivered === user.debt){
        user.debt = 0
        return 'your order has been paid'
    }else{
        let amount = amountDelivered - user.debt 
        user.debt = 0
        return `your order has been paid and your change is ${amount}`
    }
}