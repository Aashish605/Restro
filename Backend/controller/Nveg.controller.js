import Nveg from "../models/Nveg.model.js ";

export const createNveg = async (req,res) => {
    try {
        const photoBase64 = req.file ? req.file.buffer.toString('base64') :null
        const { title, price } = req.body;
        const message = new Nveg({ title, price,photo : photoBase64 });
        await message.save();
        res.status(201).json({ sent: "Message created successfully", created : message });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
} 

export const getNveg = async (req,res) => {
    try {
        const list = await Nveg.find()
        res.status(200).json(list)
    } catch (error) {
        console.log("error:",error);
        res.status(500).json(error)
    }
}

export const updateNveg = async (req,res) => {
    try {
        
    } catch (error) {
        
    }
}