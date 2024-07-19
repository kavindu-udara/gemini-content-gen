import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import Content from "../models/content.model.js";
import Saved from "../models/saved.model.js";

export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return next(errorHandler(404, "User not found"));
        }
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (error) {
        next(error);
    }
}

export const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    username: req.body.username,
                    email: req.body.email,
                    avatar: req.body.avatar
                }
            },
            { new: true }
        );
        if (!updatedUser) {
            res.status(200).json(
                {
                    success: false,
                    message: 'user update failed'
                }
            );
        }
        const { password, ...others } = updatedUser._doc;
        res.status(200).json(
            {
                success: true,
                user: others,
                message: 'user updated successfully'
            }
        );
    } catch (error) {
        next(error);
    }
}

export const updateUserPassword = async (req, res, next) => {
    try {
        const currentUser = await User.findById(req.params.id);
        if (!currentUser) {
            return next(errorHandler(404, "User not found"));
        }
        if (!bcryptjs.compareSync(req.body.oldPassword, currentUser.password)) {
            return next(errorHandler(200, "Invalid current password"));
        }
        const hashedPassword = bcryptjs.hashSync(req.body.newPassword, 10);
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            password: hashedPassword
        }, { new: true });
        const { password, ...others } = updatedUser._doc;
        res.status(200).json({ success: true, user: others, message: 'password updated successfully' });
    } catch (err) {
        next(err);
    }
}

export const saveContent = async (req, res, next) => {
    const { id, contentId } = req.body;
    try {
        const currentUser = await User.findById(id);
        if (!currentUser) {
            return next(errorHandler(404, "User not found"));
        } else {
            const content = await Content.findById(contentId);
            if (!content) {
                return next(errorHandler(404, "Content not found"));
            } else {
                const saved = new Saved({
                    userId: currentUser._id,
                    contentId: content._id
                });
                await saved.save();
                res.status(200).json({ success: true, message: 'Saved successfully' });
            }
        }
    } catch (error) {
        next(error);
    }
}

export const getSavedContents = async (req, res, next) => {
    const id = req.params.id;
    try {
        const savedContents = await Saved.find({ userId: id });
        if (!savedContents) {
            return next(errorHandler(404, "Saved contents not found"));
        } else {
            const contentIds = savedContents.map((content) => content.contentId);
            const contents = await Content.find({ _id: { $in: contentIds } });
            res.status(200).json({ success: true, contents });
        }
    } catch (error) {
        next(error);
    }
}

export const unSaveContent = async (req, res, next) => {
    const { id, contentId } = req.body;
    try {
        const currentUser = await User.findById(id);
        if (!currentUser) {
            return res.status(404).json({ success: false, message: 'User not found' });
        } else {
            const content = await Content.findById(contentId);
            if (!content) {
                return res.status(404).json({ success: false, message: 'Content not found' });
            } else {
                const saved = await Saved.findOneAndDelete({ userId: currentUser._id, contentId: content._id });
                if (!saved) {
                    return res.status(404).json({ success: false, message: 'Content not saved' });
                } else {
                    return res.status(200).json({ success: true, message: 'Unsaved successfully' });
                }
            }
        }
    } catch (error) {
        next(error);
    }
}