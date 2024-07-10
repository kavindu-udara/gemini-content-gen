import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { Route, Routes } from "react-router-dom";
import ContentBox from "../components/ContentBox";
import Profile from "../components/Profile";
import GenerateContent from "../components/GenerateContent";
import apiClient from "../axios/axios";

const Dashboard = ({DarkThemeToggle}) => {
  const [contentList, setContentList] = useState([]);

  const getContentList = async() => {
    apiClient.get("/content").then((res) => {
      // setContentList(null);
      setContentList(res.data.content);
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    getContentList();
  }, [])

  return (
    <>
      <Routes>
        <Route element={<Navigation DarkThemeToggle={DarkThemeToggle} />}>

          <Route
            path="/content"
            element={<ContentBox ContentList={contentList} />}
          />

          {contentList.map((content, index) => {
            return (
              <Route
                key={index}
                path={`/${content.type}`}
                element={
                  <GenerateContent
                    title={content.title}
                    description={content.description}
                    inputText={content.inputText}
                    type={content.type}
                  />
                }
              />
            );
          })}

          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
};

export default Dashboard;
