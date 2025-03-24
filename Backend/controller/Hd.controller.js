import Hd from "../models/Hd.model.js ";

// export const createVeg = async (req,res) => {
//     try {
        
//     } catch (error) {
        
//     }
// } 

export const getHd = async (req,res) => {
    try {
        const list = await Hd.find()
        res.status(200).json(list)
    } catch (error) {
        console.log("error:",error);
        res.status(500).json(error)
    }
}