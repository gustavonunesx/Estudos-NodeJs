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

async function  removeItem(userCart, item){
    //ecnontrar o indice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    
    //caso nao encontre
    if (indexFound == -1){
        console.log("item nao encontrado");
        return;
    }

    //item > 1 subtrair um item
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return;
    }


    //item = 1 deletar item
    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1); // encontra e deleta 1 item 
    }
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
};

