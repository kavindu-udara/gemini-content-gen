import Groq from "groq-sdk";
import dotenv from "dotenv";
import Content from "../models/content.model.js";

dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const generate = async (req, res) => {

    const { reqPrompt } = req.body;

    try {
        const content = await Content.findById(req.params.id);
        if (!content) {
            return res.status(404).json({ success: false, message: "Content not found" });
        } else {
            const generatePromt = content.promt + ' ' + reqPrompt;
            const chatCompletion = await groq.chat.completions.create({
                messages: [
                    {
                        role: "user",
                        content: generatePromt,
                    },
                ],
                model: "llama3-8b-8192",
            });

            const response = chatCompletion.choices[0]?.message?.content || "";
            res.status(200).json({ success: true, response: response, message: "success" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }

}

export const speechToText = async (req, res) => {
    const transcription = await groq.audio.transcriptions.create({
        file: fs.createReadStream("sample_audio.m4a"),
        model: "whisper-large-v3",
        prompt: "Specify context or spelling", 
        response_format: "json", 
        language: "en", 
        temperature: 0.0, 
    });
    console.log(transcription.text);
}