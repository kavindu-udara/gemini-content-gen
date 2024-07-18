
import User from "../models/user.model.js";
import Content from "../models/content.model.js";
import bcryptjs from "bcryptjs";

export const signin = async (req, res, next) => {

    const { email, password } = req.body;
    try {
        const validAdmin = await User.findOne({ email });
        if(!validAdmin) {
            return res.status(200).json({
                success: false,
                message: "user not found",
            });
        }else{
            if(validAdmin.role == "admin") {
                const validPassword = bcryptjs.compareSync(password, validAdmin.password);
                if(!validPassword) {
                    return res.status(200).json({
                        success: false,
                        message: "invalid password",
                    });
                }else{
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
            }else{
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
    const {title, description, inputText, type, aiTool} = req.body;
    const newContent = new Content({
        title,
        description,
        inputText,
        type,
        aiTool
    });
    try {
        await newContent.save();
        res.status(200).json({
            success: true,
            message: 'content created successfully',
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}