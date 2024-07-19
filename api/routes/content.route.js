import express from "express";
import { getContent } from "../controllers/content.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

// router.post('/signup', signup);
router.get('/:id', verifyToken, getContent);

export default router;