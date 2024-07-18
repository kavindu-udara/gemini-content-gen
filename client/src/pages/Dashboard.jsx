import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { Route, Routes, useNavigate } from "react-router-dom";
import ContentBox from "../components/ContentBox";
import Profile from "../components/Profile";
import GenerateContent from "../components/GenerateContent";
import apiClient from "../axios/axios";
import { toast } from "react-toastify";

const Dashboard = ({DarkThemeToggle}) => {
  const navigate = useNavigate();
  const [contentList, setContentList] = useState([]);
  const [search, setSearch] = useState(null);
  const [searchContent, setSearchContent] = useState(contentList);

  const getContentList = async() => {
    apiClient.get("/content").then((res) => {
      // setContentList(null);
      if(res.data.success){
        setContentList(res.data.content);
        setSearchContent(res.data.content);
      }else{
        toast.error(res.data.message);
      }
    }).catch((err) => {
      toast.error(err.response.data.message);
      navigate("/signin");
    })
  }

  useEffect(() => {
    getContentList();
  }, [])

  useEffect(() => {
    if (search) {
      setSearchContent([]);
      contentList.filter((content) => {
        if (content.title.toLowerCase().includes(search.toLowerCase())) {
          setSearchContent((prev) => [...prev, content]);
        }
      })
    }else{
      setSearchContent(contentList);
    }
  }, [search]);

  return (
    <>
      <Routes>
        <Route element={<Navigation DarkThemeToggle={DarkThemeToggle} search={search} setSearch={setSearch} />}>

          <Route
            path="/content"
            element={<ContentBox ContentList={searchContent} />}
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
                    tools={content.aiTool}
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
