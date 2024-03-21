import mongoose from "mongoose";

const connection: {isConnected?:number} = {};

export const connectToDb = async () => {
    if(!process.env.MONGO_URL) return;
    try {
        if(connection.isConnected){console.log("Using existing connection"); return;}
        const db = await mongoose.connect(process.env.MONGO_URL);
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.log(error);
    }
}