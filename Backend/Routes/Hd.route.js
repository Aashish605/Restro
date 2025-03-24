import { getHd } from "../controller/Hd.controller.js";

import express from "express";

const router = express.Router();

router.get('/',getHd);

export default router;