import express from "express";
import { test } from "../controllers/gemini.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post('/generate/test', verifyToken, test);

export default router;