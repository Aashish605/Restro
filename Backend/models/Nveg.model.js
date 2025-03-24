import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    title: String,
    price: Number,
    photo: String // Add image field to store the filename
});

const NVeg = mongoose.model("NVeg", messageSchema);

export default NVeg;