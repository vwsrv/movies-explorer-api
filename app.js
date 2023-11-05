import express, {json} from "express";
import mongoose from "mongoose";

const {
    PORT = 3000,
    MONGO_URL = 'mongodb://127.0.0.1:27017/bitfilmsdb'
} = process.env;
const app = express();

async function initServer() {
    await mongoose.connect(MONGO_URL);
    console.log('Successfully connected to DataBase');
    await app.listen(PORT);
    console.log(`Server started at PORT: ${PORT}`);
}
initServer();