import express from 'express';
import { createMessage } from '../controller/Message.controller.js';
import {getfind} from '../controller/Message.controller.js'
import multer from 'multer';

const router = express.Router();

const storage = multer.memoryStorage(); // Store the file in memory
const upload = multer({ storage });

router.post('/', upload.single('photo'), createMessage);

router.get('/',getfind);

export default router;