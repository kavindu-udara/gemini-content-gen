import express from "express";
import {getUser, updateUser, updateUserPassword} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post('/update/:id', verifyToken, updateUser);
router.post('/update/password/:id', verifyToken, updateUserPassword);

export default router;