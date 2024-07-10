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
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        if (!updatedUser) {
            return next(errorHandler(404, "User not found"));
        }
        const { password, ...others } = updatedUser._doc;
        res.status(200).json(others);
    } catch (error) {
        next(error);
    }
}