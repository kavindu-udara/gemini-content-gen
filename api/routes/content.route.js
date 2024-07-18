import express from "express";
import { getContent, getSavedContent } from "../controllers/content.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

// router.post('/signup', signup);
router.get('/', verifyToken, getContent);
router.get('/saved', verifyToken, getSavedContent);

export default router;