async function connectToDatabase(dataName) {

    console.log("conectado ao banco" + dataName)
}

async function desconnectDatabase() {
    console.log("deconectando do bd...")
}


const databaseType = {
    userType : "admin",
    typeData : "dataLocal"
}


// export default connectToDatabase;

export  {
    connectToDatabase,
    desconnectDatabase,
    databaseType,
}