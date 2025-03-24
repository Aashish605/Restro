import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    title: String,
    price: Number,
    photo: String // Add image field to store the filename
});

const Message = mongoose.model("Message", messageSchema);

export default Message;
