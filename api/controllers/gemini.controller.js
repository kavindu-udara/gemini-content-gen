import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

export const test = async (req, res) => {
    // Access your API key as an environment variable (see "Set up your API key" above)
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
    
    // ...
    
    // The Gemini 1.5 models are versatile and work with most use cases
        // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
      
        const prompt = "Write a story about a magic backpack.";
      
        const result = await model.generateContent(prompt);
        const response = result.response;
        res.json({ message: response });
        // const text = response.text();
        // console.log(text);
}
