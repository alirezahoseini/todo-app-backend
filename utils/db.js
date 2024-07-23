import mongoose from 'mongoose';

const connectToDB = async () => {
    try {
        const isConnetcted = await mongoose.connections[0].readyState;
        if (isConnetcted) {
            console.log('DB IS OK ---> DBCONECTION');
            return false
        } else {
            mongoose.connect('mongodb+srv://mehdimj0161:NargesHasani@cluster0.qbuo1hj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
            console.log('Db Connected :))');
        }
    } catch (error) {
        console.log('DB connection error =>', error);
    }
}

export default connectToDB