import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
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
                    email: req.body.email
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
            return next(errorHandler(400, "Invalid old password"));
        }
        const hashedPassword = bcryptjs.hashSync(req.body.newPassword, 10);
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            password: hashedPassword
        }, { new: true });
        res.status(200).json({ success: true, user: updatedUser, message: 'password updated successfully' });
    } catch (err) {
        next(err);
    }
}