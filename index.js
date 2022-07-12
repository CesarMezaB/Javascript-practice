const showMenu = () => { 
    console.log('Code - Product - Price')
    productsArray.forEach(product => console.log(`${product.code} - ${product.name} - $${product.price}`))
}
   