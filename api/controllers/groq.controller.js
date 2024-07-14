import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

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


    const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: generatePromt,
          },
        ],
        model: "llama3-8b-8192",
      });


    // const chatCompletion = await getGroqChatCompletion();
    // Print the completion returned by the LLM.
    const response = chatCompletion.choices[0]?.message?.content || "";
    // res.send(response);
    res.status(200).json({ success: true, response: response, message: "success" });
}

// export async function getGroqChatCompletion() {
//   return groq.chat.completions.create({
//     messages: [
//       {
//         role: "user",
//         content: "create snake game using python",
//       },
//     ],
//     model: "llama3-8b-8192",
//   });
// }

export const speechToText = async (req, res) => {
    const transcription = await groq.audio.transcriptions.create({
        file: fs.createReadStream("sample_audio.m4a"),
        model: "whisper-large-v3",
        prompt: "Specify context or spelling", // Optional
        response_format: "json", // Optional
        language: "en", // Optional
        temperature: 0.0, // Optional
      });
      console.log(transcription.text);
}