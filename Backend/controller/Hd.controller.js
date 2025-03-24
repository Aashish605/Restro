import Hd from "../models/Hd.model.js ";

export const createHd = async (req,res) => {
    try {
        const photoBase64 = req.file ? req.file.buffer.toString('base64') :null
        const { title, price } = req.body;
        const message = new Hd({ title, price,photo : photoBase64 });
        await message.save();
        res.status(201).json({ sent: "Message created successfully", created : message });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
} 

export const getHd = async (req,res) => {
    try {
        const list = await Hd.find()
        res.status(200).json(list)
    } catch (error) {
        console.log("error:",error);
        res.status(500).json(error)
    }
}