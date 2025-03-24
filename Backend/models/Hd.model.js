import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    title: String,
    price: Number,
    photo: String // Add image field to store the filename
});

const Hd = mongoose.model("Hd", messageSchema);

export default Hd;