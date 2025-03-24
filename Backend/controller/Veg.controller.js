import Veg from "../models/Veg.model.js ";

// export const createVeg = async (req,res) => {
//     try {
        
//     } catch (error) {
        
//     }
// } 

export const getVeg = async (req,res) => {
    try {
        const list = await Veg.find()
        res.status(200).json(list)
    } catch (error) {
        console.log("error:",error);
        res.status(500).json(error)
    }
}