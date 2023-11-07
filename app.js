import express, {json} from "express";
import mongoose from "mongoose";
import usersRouter from "./routes/users";
import moviesRouter from "./routes/movies";

const {
    PORT = 3000,
    MONGO_URL = 'mongodb://127.0.0.1:27017/bitfilmsdb'
} = process.env;
const app = express();

app.use(usersRouter);
app.use(moviesRouter);

async function initServer() {
    await mongoose.connect(MONGO_URL);
    console.log('Successfully connected to DataBase');
    await app.listen(PORT);
    console.log(`Server started at PORT: ${PORT}`);
}
initServer();