import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI

const dbConnection = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('MongoDB Connect Successfully!');
        
    } catch (error) {
        console.log('db not connected!', error);
        
    }
}

export default dbConnection;