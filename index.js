const user = {
    name: 'pepe',
    age: 21,
    debt: 0,
};

const order = [];

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
   return order;

   
}