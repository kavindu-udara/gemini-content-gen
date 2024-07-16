import {
    GoogleGenerativeAI
} from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();
export const generate = async (req, res) => {

    const type = req.params.type;

    const { reqPrompt } = req.body;

    let generatePromt = '';
    if (type == "blog") {
        generatePromt = `generate blog content for this schenario ' ${reqPrompt} '`;
    } else if (type == "code") {
        generatePromt = `generate programming code for this schenario ' ${reqPrompt} '`;
    } else if (type == "story") {
        generatePromt = `make a story for this schenario ' ${reqPrompt} '`;
    } else if (type == "youtube-description") {
        generatePromt = `generate youtube description for this schenario ' ${reqPrompt} '`;
    } else if (type == 'podcast') {
        generatePromt = `generate podcast for this schenario ' ${reqPrompt} '`;
    }else if(type == 'letter'){
        generatePromt = `generate me a letter for this schenario ' ${reqPrompt} '`;
    }else if(type == 'image-alt'){
        generatePromt = `generate me a alt text for this image description ' ${reqPrompt} '`;
    }else if(type == 'meta-desc'){
        generatePromt = `generate me a seo friendly meta description for this schenario ' ${reqPrompt} '`;
    }else if(type == 'video-desc'){
        generatePromt = `generate me a video description for this video schenario ' ${reqPrompt} '`;
    }

    const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
    });


    const result = await model.generateContent(generatePromt);
    // console.log(result);
    const response = result.response;
    // console.log(response.usageMetadata.totalTokenCount);

    res.status(200).json({ success: true, response: result.response.text(), message: "success" });

}
