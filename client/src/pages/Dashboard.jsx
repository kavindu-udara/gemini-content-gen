import React from "react";
import Navigation from "../components/Navigation";
import { Route, Routes } from "react-router-dom";
import ContentBox from "../components/ContentBox";
import Profile from "../components/Profile";
import GenerateContent from "../components/GenerateContent";

const Dashboard = () => {
  const ContentList = [
    {
      title: "Generate Blog Content",
      description: "A tool that generate blog content",
      inputText: "Describe the content you want to generate",
      type: "blog",
    },
    {
      title: "Generate Code Content",
      description: "A tool that generate code content",
      inputText: "Describe the content you want to generate",
      type: "code",
    },
    {
      title: "Generate Story Content",
      description: "A tool that generate story content",
      inputText: "Describe the content you want to generate",
      type: "story",
    },
    {
      title: "Generate YouTube Description",
      description: "A tool that generate youtube description",
      inputText: "Describe the content you want to generate",
      type: "youtube-description",
    },
    {
      title: "Generate Podcast Content",
      description: "A tool that generate podcast content",
      inputText: "Describe the podcast title you want to generate",
      type: "podcast",
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

          <Route
            path="/blog"
            element={
              <GenerateContent
                title={"Generate Blog Content"}
                description={"A tool that generate blog content"}
                inputText={"Describe the content you want to generate"}
                type={"blog"}
              />
            }
          />

          <Route
            path="/code"
            element={
              <GenerateContent
                title={"Generate Code Content"}
                description={"A tool that generate code content"}
                inputText={"Describe the content you want to generate"}
                type={"code"}
              />
            }
          />

          <Route
            path="/story"
            element={
              <GenerateContent
                title={"Generate Story Content"}
                description={"A tool that generate story content"}
                inputText={"Describe the content you want to generate"}
                type={"story"}
              />
            }
          />

          <Route
            path="/youtube-description"
            element={
              <GenerateContent
                title={"Generate YouTube Description"}
                description={"A tool that generate youtube description"}
                inputText={"Describe the content you want to generate"}
                type={"youtube-description"}
              />
            }
          />

          <Route
            path="/podcast"
            element={
              <GenerateContent
                title={"Generate Podcast Content"}
                description={"A tool that generate podcast content"}
                inputText={"Describe the podcast title you want to generate"}
                type={"podcast"}
              />
            }
          />

          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
};

export default Dashboard;
