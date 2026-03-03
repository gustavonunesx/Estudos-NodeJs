import createItem from "./services/item.js"
import * as cartService from "./services/cart.js"


const myCart = [];
const myWishList = [];

console.log('Welcom to your Shopee Cart!');

const item1 =  await createItem("Teclado Gamer", 298.90, 10);
const item2 =  await createItem("Headset", 249.90, 1);

await cartService.addItem(myCart, item1);
await cartService.addItem(myWishList, item2);

// await cartService.deleteItem(myCart,item2.name);
// await cartService.deleteItem(myCart,item1.name);

await cartService.displayCart(myCart);

console.log("Shopee Cart Total:")
await cartService.calculateTotal(myCart);