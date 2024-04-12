import mongoose from "mongoose";

const url: string  = process.env.MONGODB_URI || `Provide URI`;

async function connectDB() {
    if (mongoose.connection.readyState === 1) {
        console.log('Already connected to DB 🌟');
        return;
    }

    try {
        await mongoose.connect(url);
        console.log('Connected to DB 🚀🚀🚀🚀🌎');
    } catch (error) {
        console.error('Error connecting to DB', error);
    }
}

export default connectDB;
