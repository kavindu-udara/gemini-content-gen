import express from "express";
import { generate, speechToText } from "../controllers/groq.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post('/generate/:id',verifyToken, generate);

export default router;