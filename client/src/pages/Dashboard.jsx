import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { Route, Routes, useNavigate } from "react-router-dom";
import Profile from "../components/Profile";
import GenerateContent from "../components/GenerateContent";
import apiClient from "../axios/axios";
import { toast } from "react-toastify";
import Bookmarks from "../components/Bookmarks";
import Contents from "../components/Contents";
import { useSelector } from "react-redux";
import AdminRoute from "../components/AdminRoute";
import AddNewContent from "../components/admin/AddNewContent";
import ContentLists from "../components/admin/ContentLists";

const Dashboard = ({ DarkThemeToggle }) => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [contentList, setContentList] = useState([]);
  const [search, setSearch] = useState(null);
  const [searchContent, setSearchContent] = useState(contentList);
  const [loading, setLoading] = useState(false);
  const [savedContent, setSavedContent] = useState([]);

  const getContentList = async () => {
    apiClient
      .get(`/content/${currentUser._id}`)
      .then((res) => {
        if (res.data.success) {
          setContentList(res.data.content);
          setSearchContent(res.data.content);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        navigate("/signin");
      });
  };

  const getSavedContent = async () => {
    apiClient
      .get(`/user/save/${currentUser._id}`)
      .then((res) => {
        if (res.data.success) {
          setSavedContent(res.data.contents);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const saveContent = async (contentId) => {
    apiClient
      .post(`/user/save`, {
        id: currentUser._id,
        contentId: contentId,
      })
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message);
          getContentList();
          getSavedContent();
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const unsaveContent = async (contentId) => {
    apiClient
      .post(`/user/unsave`, {
        id: currentUser._id,
        contentId: contentId,
      })
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message);
          getContentList();
          getSavedContent();
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  useEffect(() => {
    getContentList();
    getSavedContent();
  }, []);

  useEffect(() => {
    if (search) {
      setSearchContent([]);
      contentList.filter((content) => {
        if (content.title.toLowerCase().includes(search.toLowerCase())) {
          setSearchContent((prev) => [...prev, content]);
        }
      });
    } else {
      setSearchContent(contentList);
    }
  }, [search]);

  return (
    <>
      <Routes>
        <Route
          element={
            <Navigation
              DarkThemeToggle={DarkThemeToggle}
              search={search}
              setSearch={setSearch}
            />
          }
        >
          <Route
            path="/content"
            element={
              <Contents
                saveContent={saveContent}
                unsaveContent={unsaveContent}
                ContentList={searchContent}
              />
            }
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
                    id={content._id}
                  />
                }
              />
            );
          })}
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/saved"
            element={
              <Bookmarks
                saveContent={saveContent}
                unsaveContent={unsaveContent}
                savedContent={savedContent}
              />
            }
          />
          {/* admin routes */}
          <Route element={<AdminRoute />}>
            <Route path="/add-content" element={<AddNewContent />} />
            <Route path="/contents-list" element={<ContentLists/>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default Dashboard;
