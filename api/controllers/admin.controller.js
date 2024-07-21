
import User from "../models/user.model.js";
import Content from "../models/content.model.js";
import bcryptjs from "bcryptjs";

export const signin = async (req, res, next) => {

    const { email, password } = req.body;
    try {
        const validAdmin = await User.findOne({ email });
        if (!validAdmin) {
            return res.status(200).json({
                success: false,
                message: "user not found",
            });
        } else {
            if (validAdmin.role == "admin") {
                const validPassword = bcryptjs.compareSync(password, validAdmin.password);
                if (!validPassword) {
                    return res.status(200).json({
                        success: false,
                        message: "invalid password",
                    });
                } else {
                    const token = jwt.sign({
                        id: validAdmin._id,
                    }, process.env.JWT_SECRET);
                    const { password, ...others } = validAdmin._doc;
                    res.cookie('access_token', token, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 10000 }).status(200).json({
                        success: true,
                        user: others,
                        message: 'admin logged in successfully',
                    });
                }
            } else {
                return res.status(200).json({
                    success: false,
                    message: "you are not an admin",
                });
            }
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
}

export const createContent = async (req, res, next) => {
    const { title, description, inputText, type, tools, promt } = req.body;
    const newContent = new Content({
        title,
        description,
        inputText,
        type,
        promt,
        aiTool: tools
    });
    try {
        await newContent.save();
        res.status(200).json({
            success: true,
            message: 'content created successfully',
        });
    } catch (error) {
        next(error);
    }
}

export const updateContent = async (req, res, next) => {
    const id = req.params.id;
    try {
        const updateContent = await Content.findByIdAndUpdate(id, req.body, { new: true });
        if (!updateContent) {
            return res.status(404).json({ success: false, message: "Content not found" });
        }

        res.status(200).json({ success: true, content: updateContent, message: "Content updated successfully" });
    } catch (error) {
        next(error);
    }
}

export const deleteContent = async (req, res, next) => {
    const id = req.params.id;
    try {
        const deleteContent = await Content.findByIdAndDelete(id);
        if (!deleteContent) {
            return res.status(404).json({ success: false, message: "Content not found" });
        }

        res.status(200).json({ success: true, message: "Content deleted successfully" });
    } catch (error) {
        next(error);
    }
}

export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        // const { password, ...others } = users._doc;
        res.status(200).json({ success: true, users: users, message: 'Success' });
    } catch (error) {
        next(error);
    }
}

export const editUser = async (req, res, next) => {
    const userId = req.params.userid;
    const { username, email, role } = req.body;
    try {
        const updateUser = await User.findByIdAndUpdate(userId, {
            $set: {
                username,
                email,
                role
            }
        }, { new: true });
        if (!updateUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        } else {
            res.status(200).json({ success: true, user: updateUser, message: 'User updated successfully' });
        }
    } catch (error) {
        next(error);
    }
}

export const deleteUser = async (req, res, next) => {
    const id = req.params.userid;
    try {
        const deleteUser = await User.findByIdAndDelete(id);
        if (!deleteUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        } else {
            res.status(200).json({ success: true, message: 'User deleted successfully' });
        }
    } catch (error) {
        next(error);
    }
}