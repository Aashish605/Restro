import { getpopular } from "../controller/Popular.controller.js";

import express from "express";

const router = express.Router();

router.get('/',getpopular);

export default router;