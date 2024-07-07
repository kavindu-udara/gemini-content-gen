import express from "express";
import userRouter from "./routes/user.route.js";

const app = express();

app.listen(3000, () => {
    console.log("Listening on port 3000");
});

app.use('/api/user', userRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})