import express from "express";
import {signin, createContent} from "../controllers/admin.controller.js";

const router = express.Router();

router.post('/signin', signin);
router.post('/content/create', createContent);

export default router;