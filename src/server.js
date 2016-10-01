import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import rcnsRouter from './routes/rcns';

const app = express();
const port = 5001;
const mongoConnectString = 'mongodb://localhost:27017/hana';

mongoose.connect(mongoConnectString);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/rcnuts', rcnsRouter);

app.listen(port);

console.log('Server running !!');
