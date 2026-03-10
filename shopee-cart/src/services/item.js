//criar item com subtotal certo
async function createItem(name, price, quanity) {
    return{
        name, 
        price,
        quanity,
        subtotal: () => price * quanity
    };
}

export default createItem;