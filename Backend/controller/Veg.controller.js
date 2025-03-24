import Veg from "../models/Veg.model.js ";

export const createVeg = async (req,res) => {
    try {
        const photoBase64 = req.file ? req.file.buffer.toString('base64') :null
        const { title, price } = req.body;
        const message = new Veg({ title, price,photo : photoBase64 });
        await message.save();
        res.status(201).json({ sent: "Message created successfully", created : message });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
} 

export const getVeg = async (req,res) => {
    try {
        const list = await Veg.find()
        res.status(200).json(list)
    } catch (error) {
        console.log("error:",error);
        res.status(500).json(error)
    }
}