import React from "react";
import Navigation from "../components/Navigation";
import { Route, Routes } from "react-router-dom";
import ContentBox from "../components/ContentBox";
import Profile from "../components/Profile";
import GenerateContent from "../components/GenerateContent";

const Dashboard = () => {
  const ContentList = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvNlV9q8tRA_5agW4ZtOY-EcrBP3ftuhcYoA&s",
      title: "Meaningful alt",
      description: "alt text for an image that is not purely decorative",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkBpgSGwIv6HLq46xw3YNe-ylvsSxTCkeviA&s",
      title: "Blog Title",
      description: "An AI tool that generate blog title depend on your input",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt6dERq1DrjKHNxKURrBlowGO0PO44WQ8YHA&s",
      title: "AI Content Generator",
      description: "Powered by Google Gemini",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLsEcsraB8Yh5vD5Us3MSDIpS2XE5hs8XNKA&s",
      title: "AI Content Generator",
      description: "Powered by Google Gemini",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvNlV9q8tRA_5agW4ZtOY-EcrBP3ftuhcYoA&s",
      title: "Meaningful alt",
      description: "alt text for an image that is not purely decorative",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkBpgSGwIv6HLq46xw3YNe-ylvsSxTCkeviA&s",
      title: "Blog Title",
      description: "An AI tool that generate blog title depend on your input",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt6dERq1DrjKHNxKURrBlowGO0PO44WQ8YHA&s",
      title: "AI Content Generator",
      description: "Powered by Google Gemini",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLsEcsraB8Yh5vD5Us3MSDIpS2XE5hs8XNKA&s",
      title: "AI Content Generator",
      description: "Powered by Google Gemini",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvNlV9q8tRA_5agW4ZtOY-EcrBP3ftuhcYoA&s",
      title: "Meaningful alt",
      description: "alt text for an image that is not purely decorative",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkBpgSGwIv6HLq46xw3YNe-ylvsSxTCkeviA&s",
      title: "Blog Title",
      description: "An AI tool that generate blog title depend on your input",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt6dERq1DrjKHNxKURrBlowGO0PO44WQ8YHA&s",
      title: "AI Content Generator",
      description: "Powered by Google Gemini",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLsEcsraB8Yh5vD5Us3MSDIpS2XE5hs8XNKA&s",
      title: "AI Content Generator",
      description: "Powered by Google Gemini",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkBpgSGwIv6HLq46xw3YNe-ylvsSxTCkeviA&s",
      title: "Blog Title",
      description: "An AI tool that generate blog title depend on your input",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt6dERq1DrjKHNxKURrBlowGO0PO44WQ8YHA&s",
      title: "AI Content Generator",
      description: "Powered by Google Gemini",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLsEcsraB8Yh5vD5Us3MSDIpS2XE5hs8XNKA&s",
      title: "AI Content Generator",
      description: "Powered by Google Gemini",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvNlV9q8tRA_5agW4ZtOY-EcrBP3ftuhcYoA&s",
      title: "Meaningful alt",
      description: "alt text for an image that is not purely decorative",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkBpgSGwIv6HLq46xw3YNe-ylvsSxTCkeviA&s",
      title: "Blog Title",
      description: "An AI tool that generate blog title depend on your input",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt6dERq1DrjKHNxKURrBlowGO0PO44WQ8YHA&s",
      title: "AI Content Generator",
      description: "Powered by Google Gemini",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLsEcsraB8Yh5vD5Us3MSDIpS2XE5hs8XNKA&s",
      title: "AI Content Generator",
      description: "Powered by Google Gemini",
    },
  ];
  return (
    <>
      <Routes>
        <Route element={<Navigation />}>
          <Route
            path="/content"
            element={<ContentBox ContentList={ContentList} />}
          />
          <Route path="/blog" element={<GenerateContent  title={'Title'} description={'Description'} inputText={'Enter Text'} type={'test'} />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
};

export default Dashboard;
