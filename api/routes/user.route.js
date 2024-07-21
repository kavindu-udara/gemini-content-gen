import express from "express";
import {updateUser, updateUserPassword, saveContent, getSavedContents, unSaveContent} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post('/update/:id', verifyToken, updateUser);
router.post('/update/password/:id', verifyToken, updateUserPassword);
router.post('/save', verifyToken, saveContent);
router.post('/unsave', verifyToken, unSaveContent);
router.get('/save/:id', verifyToken, getSavedContents);

export default router;