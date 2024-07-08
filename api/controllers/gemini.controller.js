import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();
export const test = async (req, res) => {

    const { reqPrompt } = req.body;

    // const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
    // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `generate blog  topic ideas for this schenario ' ${reqPrompt} '`;
    // const prompt = "Write a story about a magic backpack.";


    const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
    });

    // const generationConfig = {
    //     temperature: 1,
    //     topP: 0.95,
    //     topK: 64,
    //     maxOutputTokens: 8192,
    //     responseMimeType: "text/plain",
    // };

    // const chatSession = model.startChat({
    //     generationConfig,
    //     history: [
    //     ],
    // });

    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // const result = await chatSession.sendMessage(reqPrompt);
    // console.log(result.response.text());

    const result = await model.generateContent(prompt);
    const response = result.response;
    console.log(response);
    // res.status(200).json({ success: true, response: result.candidates[0].content.parts, message: "success" });


    res.status(200).json({ success: true, response: result.response.text(), message: "success" });

}
