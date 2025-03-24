import mongoose from "mongoose";

const popularSchema = mongoose.Schema({
    title : String,
    price : Number
})

const Popular = mongoose.model("Popular",popularSchema)

export default Popular;