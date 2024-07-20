import User from "../models/user.model.js";

export const verifyAdmin = async (req, res, next) => {
    const {id} = req.body;
    try {
        const validUser = await User.findOne({ _id: id });
        if(!validUser) {
            return res.status(200).json({
                success: false,
                message: "user not found",
            });
        }else{
            if(validUser.role == "admin") {
                next();
            }else{
                return res.status(200).json({
                    success: false,
                    message: "user not authorized",
                });
            }
        }
    } catch (error) {
        next(error);
    }
}