import Content from "../models/content.model.js";
import Saved from "../models/saved.model.js";

export const getContent = async (req, res) => {
  const { id } = req.params;
  try {
    const ContentList = await Content.find();
    if (!ContentList) {
      return res.status(404).json({ success: false, message: "Content not found" });
    } else {
      const saved = await Saved.find({ userId: id });
      const contents = ContentList.map((content) => {
        const isSaved = saved.some((savedContent) => savedContent.contentId.toString() === content._id.toString());
        return { ...content._doc, isSaved };
      })
      res.status(200).json({ success: true, content: contents, message: "Success" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}
