import { getSd } from "../controller/Sd.controller.js";

import express from "express";

const router = express.Router();

router.get('/',getSd);

export default router;