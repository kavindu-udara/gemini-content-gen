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
        {
          title: "letter",
          description: "A tool that create letters for you",
          inputText: "describe your schenario",
          type: "letter",
        },
        {
          title: "image alt text generator",
          description: "A tool that generates image alt text for you",
          inputText: "describe your schenario",
          type: "image-alt",
        },
        {
          title: "meta description",
          description: "A tool that generates meta description",
          inputText: "describe your schenario",
          type: "meta-desc",
        },
        {
          title: "video description",
          description: "A tool that generates video description",
          inputText: "describe your schenario",
          type: "video-desc",
        },
      ];
    res.json({ success:true, content: ContentList ,message: "Success" });
}