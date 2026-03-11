//quais ações o carrinho pode fazer
//adicionar
//remover tudo e um item
//calcular total
//mostrar itens

async function addItem(userCart, item){

    userCart.push(item);
}

async function calculateTotal(userCart, item){

    console.log("\nShopee Cart Total is: ");
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`\nTotal: ${result} 🎁`);
}

async function deleteItem(userCart, name){

    const index = userCart.findIndex((item) => item.name === name); // se nao encontrar retorna -1

    if(index !== -1){
        userCart.splice(index, 1); // se achar corta no index q encontrou 
    }
}

async function displayCart(userCart) {
    console.log("\nShopee cart list:");

    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()} `);
    });
}

async function  removeItem(userCart, index){

    //transforma o index visual do usuario para o indice do backend
    const deleteIndex = index - 1;
    //é maior que zero e se eh menor que o tamanho do carrinho
    if(index >= 0 && index < userCart.length){
        userCart.splice(deleteIndex, 1);
    }
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
};

