import { getVeg } from "../controller/Veg.controller.js";

import express from "express";

const router = express.Router();

router.get('/',getVeg);

export default router;