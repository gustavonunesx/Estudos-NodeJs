//quais ações meu carrinho pode fazer 

//adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

//calcular total
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);   
    console.log(result);
}

// deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);
    
    if (index !== -1)
        userCart.splice(index, 1)
}


async function displayCart(userCart) {
    console.log("Shopee Cart List:")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$${item.price} | ${item.quantity} | Subtotal: ${item.subtotal()}`)
    })
}
// remover um item
async function removeItem(userCart, index) {
    
}

export{
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displayCart
} 

