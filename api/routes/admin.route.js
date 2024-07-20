import express from "express";
import {signin, createContent, updateContent} from "../controllers/admin.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
import { verifyAdmin } from "../utils/verifyAdmin.js";

const router = express.Router();

router.post('/signin', signin);
router.post('/content/create', verifyToken, verifyAdmin, createContent);
router.put('/content/update/:id', verifyToken, updateContent);

export default router;