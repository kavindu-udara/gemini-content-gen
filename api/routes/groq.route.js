import express from "express";
import { generate, speechToText } from "../controllers/groq.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post('/generate/:type',verifyToken, generate);

// need to make
router.post('/speechtotext',verifyToken, speechToText);

export default router;