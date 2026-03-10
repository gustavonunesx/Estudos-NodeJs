import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"

const myCart = [];
const MyWishList = [];
console.log("Welcom eto your Shopee Cart!")

const item1 = await createItem("Sauvage", 799.90, 1);
const item2 = await createItem("Invictus", 599.90, 4);

await cartService.addItem(myCart, item1);
await cartService.addItem(MyWishList, item2);

console.log("Shopee Cart Total is: ");
await cartService.calculateTotal(myCart);