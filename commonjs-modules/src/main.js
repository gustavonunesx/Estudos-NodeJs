import { getFullName } from '../services/products.js';

async function main() {
    console.log("oi");
    console.log(getFullName("123", "Mouse"));
}

main();