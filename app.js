import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const PORT = 5001;
const MONGO_CONNECT_STRING = 'mongodb://localhost:27017/hana';

//connect mongodb
mongoose.connect(MONGO_CONNECT_STRING);

//config app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

console.log('EOAPP');
