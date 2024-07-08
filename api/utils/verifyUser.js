import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";
import dotenv from "dotenv";

dotenv.config();

export const verifyToken = (req, res, next) => {
    console.log(req);
    const token = req.cookies.access_token;
    console.log(token);
    if (!token) {
        return next(errorHandler(401, "Not Authorized"));
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return next(errorHandler(403, "Invalid Token"));
        }
        req.user = user;
        next();
    });
}