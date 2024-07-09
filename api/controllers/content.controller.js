export const getContent = (req, res) => {
    const ContentList = [
        {
          title: "Blog Content",
          description: "A tool that generate blog content",
          inputText: "Describe the content you want to generate",
          type: "blog",
        },
        {
          title: "Code Content",
          description: "A tool that generate code content",
          inputText: "Describe the content you want to generate",
          type: "code",
        },
        {
          title: "Story Content",
          description: "A tool that generate story content",
          inputText: "Describe the content you want to generate",
          type: "story",
        },
        {
          title: "YouTube Description",
          description: "A tool that generate youtube description",
          inputText: "Describe the content you want to generate",
          type: "youtube-description",
        },
        {
          title: "Podcast Content",
          description: "A tool that generate podcast content",
          inputText: "Describe the podcast title you want to generate",
          type: "podcast",
        },
      ];
    res.json({ success:true, content: ContentList ,message: "Success" });
}