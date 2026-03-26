import database from './database/data.js';

async function main() {

    await database.connectToDatabase(process.env.DATABASE_USER, process.env.DATABASE_PASSWORD);
}

main();