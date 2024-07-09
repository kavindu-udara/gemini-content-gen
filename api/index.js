import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import geminiRouter from "./routes/gemini.route.js";
import contentRouter from "./routes/content.route.js";
import mongoose from "mongoose";

dotenv.config();

// connect to mongo db
mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
});

const app = express();

// Set up CORS options
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(cookieParser());

app.listen(3000, () => {
    console.log("Listening on port 3000");
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/gemini', geminiRouter);
app.use('/api/content', contentRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});