import {
    GoogleGenerativeAI
} from "@google/generative-ai";
import dotenv from "dotenv";
import Content from "../models/content.model.js";

dotenv.config();
export const generate = async (req, res) => {
    const { reqPrompt } = req.body;
    try {
        const content = await Content.findById(req.params.id);
        if (!content) {
            return res.status(404).json({ success: false, message: "Content not found" });
        } else {
            const generatePromt = content.promt + ' ' + reqPrompt;
            const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
            const genAI = new GoogleGenerativeAI(apiKey);

            const model = genAI.getGenerativeModel({
                model: "gemini-1.5-flash",
            });
            const result = await model.generateContent(generatePromt);
            res.status(200).json({ success: true, response: result.response.text(), message: "success" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }

}
