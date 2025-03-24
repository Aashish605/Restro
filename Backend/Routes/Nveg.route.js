import { getNveg } from "../controller/Nveg.controller.js";
import { createNveg } from "../controller/Nveg.controller.js";
import express from "express";
import multer from "multer";

const router = express.Router();

const storage = multer.memoryStorage(); // Store the file in memory
const upload = multer({ storage });

router.post('/', upload.single('photo'), createNveg);

router.get('/',getNveg);

export default router;