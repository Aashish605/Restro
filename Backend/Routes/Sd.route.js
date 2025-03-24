import { createSd, getSd } from "../controller/Sd.controller.js";
import multer from "multer";
import express from "express";

const router = express.Router();

const storage = multer.memoryStorage(); // Store the file in memory
const upload = multer({ storage });

router.post('/', upload.single('photo'), createSd);

router.get('/',getSd);

export default router;