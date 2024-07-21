import express from "express";
import {signin, createContent, updateContent, deleteContent, getUsers, editUser, deleteUser} from "../controllers/admin.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
import { verifyAdmin } from "../utils/verifyAdmin.js";

const router = express.Router();

router.post('/signin', signin);
router.post('/content/create', verifyToken, verifyAdmin, createContent);
router.put('/content/update/:id', verifyToken,verifyAdmin, updateContent);
router.post('/content/delete/:id', verifyToken, verifyAdmin, deleteContent);
router.post('/users', verifyToken, verifyAdmin, getUsers);
router.post('/user/edit/:userid', verifyToken, verifyAdmin, editUser);
router.post('/user/delete/:userid', verifyToken, verifyAdmin, deleteUser);

export default router;