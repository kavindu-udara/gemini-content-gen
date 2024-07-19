import express from "express";
import { generate, speechToText } from "../controllers/groq.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post('/generate/:id',verifyToken, generate);

// need to make
router.post('/speechtotext',verifyToken, speechToText);

export default router;