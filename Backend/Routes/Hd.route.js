import { getHd } from "../controller/Hd.controller.js";
import { createHd } from "../controller/Hd.controller.js";
import multer from "multer";
import express from "express";

const router = express.Router();

const storage = multer.memoryStorage(); // Store the file in memory
const upload = multer({ storage });

router.post('/', upload.single('photo'), createHd);

router.get('/',getHd);

export default router;