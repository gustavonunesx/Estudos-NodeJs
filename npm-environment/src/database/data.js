async function connectToDatabase(user, password) {
    if(user === process.env.DATABASE_USER && password === process.env.DATABASE_PASSWORD) {
        console.log("conexão com o banco de dados realizada com sucesso");
    }else {
        console.log("falha na conexão com o banco de dados");
    }
}

export default {
    connectToDatabase
};

