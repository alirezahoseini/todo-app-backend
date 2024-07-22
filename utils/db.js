const mongoose = require('mongoose');

const connectToDB = async () => {
    try {
        if(mongoose.connections[0].readyState){
            console.log('DB IS OK ---> DB-CONNECTION');
            return false
        }else{
            const connectionResult = await mongoose.connect('mongodb://localhost:27017/');
            console.log("DB CONNECTED!");
        }
    } catch (error) {
        console.log('Can not connect to DB .! error ==> ', error);
        return false
    }
}

export default connectToDB