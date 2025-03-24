import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import multer from "multer";
import { GridFsStorage } from 'multer-gridfs-storage'
import dotenv from "dotenv";
dotenv.config();

import popularroute from './Routes/Popular.route.js';
import messageroute from './Routes/Message.route.js';
import vegroute from './Routes/Veg.route.js'
import nvegroute from './Routes/Nveg.route.js'
import sdroute from './Routes/Sd.route.js'
import hdroute from './Routes/Hd.route.js'

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 4000;
const Mongo = process.env.Mongo;

mongoose.connect(Mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("MongoDB connection error:", error);
});



app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.use('/find',messageroute)
app.use('/popular', popularroute);
app.use('/veg',vegroute)
app.use('/nveg',nvegroute)
app.use('/sd',sdroute)
app.use('/hd',hdroute)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});