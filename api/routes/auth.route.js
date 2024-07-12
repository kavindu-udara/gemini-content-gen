import express from "express";
import { signup, signin, signinGoogle } from "../controllers/auth.controller.js";

const router = express.Router();

// router.post('/signup', signup);
router.post('/signup', signup);
router.post('/signin', signin);
router.post('/signin/google', signinGoogle);

export default router;