import Sd from "../models/Sd.model.js ";

// export const createVeg = async (req,res) => {
//     try {
        
//     } catch (error) {
        
//     }
// } 

export const getSd = async (req,res) => {
    try {
        const list = await Sd.find()
        res.status(200).json(list)
    } catch (error) {
        console.log("error:",error);
        res.status(500).json(error)
    }
}