import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    title: String,
    price: Number,
    photo: String // Add image field to store the filename
});

const Sd = mongoose.model("Sd", messageSchema);

export default Sd;