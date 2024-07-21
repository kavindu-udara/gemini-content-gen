import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import geminiRouter from "./routes/gemini.route.js";
import groqRouter from "./routes/groq.route.js";
import contentRouter from "./routes/content.route.js";
import adminRouter from "./routes/admin.route.js";
import mongoose from "mongoose";
import path from "path";

dotenv.config();

// connect to mongo db
mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
});

const __dirname = path.resolve();

const app = express();

const corsOptions = {
    origin: 'https://gemini-content-gen.onrender.com/',
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
app.use('/api/groq', groqRouter);
app.use('/api/content', contentRouter);

app.use('/api/admin',adminRouter);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});