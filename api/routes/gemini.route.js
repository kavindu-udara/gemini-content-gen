import express from "express";
import { generate } from "../controllers/gemini.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

// router.post('/generate/test', verifyToken, test);
router.post('/generate/:type',verifyToken, generate);

export default router;