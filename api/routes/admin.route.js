import express from "express";
import {signin, createContent, updateContent} from "../controllers/admin.controller.js";

const router = express.Router();

router.post('/signin', signin);
router.post('/content/create', createContent);
router.put('/content/update/:id', updateContent);

export default router;