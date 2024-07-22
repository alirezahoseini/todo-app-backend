import mongoose from 'mongoose';

const connectToDB = async () => {
    try {
        const isConnetcted = await mongoose.connections[0].readyState;
        if (isConnetcted) {
            console.log('DB IS OK ---> DBCONECTION');
            return false
        } else {
            mongoose.connect('mongodb://localhost:27017/test');
            console.log('Db Connected :))');
        }
    } catch (error) {
        console.log('DB connection error =>', error);
    }
}

export default connectToDB