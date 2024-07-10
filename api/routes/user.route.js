import express from "express";
import {getUser, updateUser} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post('/update/:id', verifyToken, updateUser);

export default router;