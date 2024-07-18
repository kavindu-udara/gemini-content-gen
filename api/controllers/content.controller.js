import Content from "../models/content.model.js";

export const getContent = async (req, res) => {
  try {
    const ContentList = await Content.find();
    res.status(200).json({ success:true, content: ContentList ,message: "Success"});
  } catch (error) {
    res.status(500).json({ success:false, message: error.message });
  }
    // const ContentList = [
    //     {
    //       title: "Blog Content",
    //       description: "A tool that generate blog content",
    //       inputText: "Describe the content you want to generate",
    //       type: "blog",
    //       aiTool: ['gemini', 'groq']
    //     },
    //     {
    //       title: "Code Content",
    //       description: "A tool that generate code content",
    //       inputText: "Describe the content you want to generate",
    //       type: "code",
    //       aiTool: ['gemini', 'groq']
    //     },
    //     {
    //       title: "Story Content",
    //       description: "A tool that generate story content",
    //       inputText: "Describe the content you want to generate",
    //       type: "story",
    //       aiTool: ['gemini', 'groq']
    //     },
    //     {
    //       title: "YouTube Description",
    //       description: "A tool that generate youtube description",
    //       inputText: "Describe the content you want to generate",
    //       type: "youtube-description",
    //       aiTool: ['gemini', 'groq']
    //     },
    //     {
    //       title: "Podcast Content",
    //       description: "A tool that generate podcast content",
    //       inputText: "Describe the podcast title you want to generate",
    //       type: "podcast",
    //       aiTool: ['gemini', 'groq']
    //     },
    
    //     {
    //       title: "letter",
    //       description: "A tool that create letters for you",
    //       inputText: "describe your schenario",
    //       type: "letter",
    //       aiTool: ['gemini', 'groq']
    //     },
    //     {
    //       title: "image alt text generator",
    //       description: "A tool that generates image alt text for you",
    //       inputText: "describe your schenario",
    //       type: "image-alt",
    //       aiTool: ['gemini', 'groq']
    //     },
    //     {
    //       title: "meta description",
    //       description: "A tool that generates meta description",
    //       inputText: "describe your schenario",
    //       type: "meta-desc",
    //       aiTool: ['gemini', 'groq']
    //     },
    //     {
    //       title: "video description",
    //       description: "A tool that generates video description",
    //       inputText: "describe your schenario",
    //       type: "video-desc",
    //       aiTool: ['gemini', 'groq']
    //     },
    //   ];
    // res.json({ success:true, content: ContentList ,message: "Success" });
}

export const getSavedContent = (req, res) => {
  const savedContentList = [
      {
        title: "Blog Content",
        description: "A tool that generate blog content",
        inputText: "Describe the content you want to generate",
        type: "blog",
        aiTool: ['gemini', 'groq']
      },
      {
        title: "Code Content",
        description: "A tool that generate code content",
        inputText: "Describe the content you want to generate",
        type: "code",
        aiTool: ['gemini', 'groq']
      },
      {
        title: "Story Content",
        description: "A tool that generate story content",
        inputText: "Describe the content you want to generate",
        type: "story",
        aiTool: ['gemini', 'groq']
      },
      {
        title: "YouTube Description",
        description: "A tool that generate youtube description",
        inputText: "Describe the content you want to generate",
        type: "youtube-description",
        aiTool: ['gemini', 'groq']
      },
      {
        title: "Podcast Content",
        description: "A tool that generate podcast content",
        inputText: "Describe the podcast title you want to generate",
        type: "podcast",
        aiTool: ['gemini', 'groq']
      },
    ];
    
    res.json({ success:true, content: savedContentList ,message: "Success" });
}