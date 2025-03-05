import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();




const app = express()
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
    res.send('Hello World!')
})    


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})