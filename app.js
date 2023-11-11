import helmet from 'helmet';
import express, { json } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import { errors } from 'celebrate';
import cors from 'cors';
import router from './routes/index.js';
import errorHandler from './middleware/errorsHandler.js';
import { errorLogger, requestLogger } from './middleware/logger.js';

dotenv.config();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/bitfilmsdb';
const app = express();
app.use(json());
app.use(cookieParser());
app.use(helmet());
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001',
    'https://vawssrv.nomoredomainsmonster.ru', 'https://api.vawssrv.nomoredomainsmonster.ru'],
  credentials: true,
  maxAge: 3600,
}));
app.use(requestLogger);
app.use(router);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

async function initServer() {
  await mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB', error);
    });
  await app.listen(PORT);
  console.log(`Server started at PORT: ${PORT}`);
}
initServer();
