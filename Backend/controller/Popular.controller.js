import Popular from "../models/Popular.model.js";

export const getpopular = async (req,res) => {
    try {
        const list  = await Popular.find();
        console.log(list);
        
        res.status(200).json(list)
    } catch (error) {
        console.log("error:",error);
        res.status(500).json(error)
    }
}