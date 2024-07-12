import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!/\S+@\S+\.\S+/.test(email)) {
        return res.status(400).json({
            success: false,
            message: "email must be a valid email address",
        });
    } else {
        const hashedPassword = bcryptjs.hashSync(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });
        try {
            await newUser.save();
            // remove password
            const { password, ...others } = newUser._doc;
            res.status(201).json({
                success: true,
                user: others,
                message: 'user created successfully',
            });
        } catch (err) {
            res.status(500).json({
                success: false,
                message: err.message,
            });
        }
    }
}

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try{
        const validUser = await User.findOne({email});
        if(!validUser){
            return res.status(200).json({
                success: false,
                message: "user not found",
            });
        }else{
            const validPassword = bcryptjs.compareSync(password, validUser.password);
            if(!validPassword){
                return res.status(200).json({
                    success: false,
                    message: "invalid password",
                });
            }else{
                const token = jwt.sign({
                    id: validUser._id,
                }, process.env.JWT_SECRET);
                const { password, ...others } = validUser._doc;
                res.cookie('access_token', token, { httpOnly: true, sameSite: 'None', secure: true }).status(200).json({
                    success: true,
                    user: others,
                    message: 'user logged in successfully',
                });
            }
        }
    }catch(err){
        console.log(err);
    }
}

export const signinGoogle = async (req, res, next) => {
    // 
    
}