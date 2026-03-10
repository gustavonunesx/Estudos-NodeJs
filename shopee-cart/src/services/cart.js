//quais ações o carrinho pode fazer
//adicionar
//remover tudo e um item
//calcular total

async function addItem(userCart, item){

    userCart.push(item);
}

async function calculateTotal(userCart, item){

    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(result);
}

async function deleteItem(userCart, name){

}

async function removeItem(userCart, index){

}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem
};

