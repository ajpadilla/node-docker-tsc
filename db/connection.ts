const mongosee = require('mongoose');

const dbConnection = async() => {

    try {
        //mongosee.connect(process.env.MONGODB_CNN);

        // Se debe crear primero manual la base de datos en mongodb
        mongosee.connect('mongodb://mongo_tsc/myapptsc');

        console.log("Base de datos online");
    }catch (error) {
        console.log(error)
        throw new Error('Error a la hora de iniciar la base de datos');
    }
};

export default dbConnection;
