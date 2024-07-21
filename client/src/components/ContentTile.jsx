import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa6";

const ContentTile = ({ title, description, path, tools, saveContent, unsaveContent, id, isSaved }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(path);
  }
  return (
      <div className="rounded-xl border dark:border-none p-2 dark:text-black dark:bg-gray-700">
        <div className="rounded-xl bg-blue-100 dark:bg-blue-100 p-3">
          <div className="flex flex-row justify-between">
            <div className="bg-white p-3 rounded-full">
              <BsStars />
            </div>
            <div className="flex bg-white p-3 rounded-full items-center cursor-pointer">
              {isSaved ? <FaBookmark onClick={() => unsaveContent(id)} /> : <FaRegBookmark onClick={() => saveContent(id)} /> }
            </div>
          </div>
          <div className="flex flex-row mt-5">
              <div className="text-3xl">{title}</div>
          </div>
          <div className="mt-5 flex gap-3 flex-wrap">
            {tools.map((tool, index) => (
              <button key={index} className="border rounded-full p-2 border-black">
                {tool}
              </button>
            ))}
          </div>
        </div>
        <div className="flex my-5 justify-between mx-5 gap-10">
          <div className="">
            <div className="text-xl dark:text-white">{description}</div>
          </div>
          <div className="">
            <button onClick={handleNavigate} className="bg-black rounded-full p-3 text-white text-lg">
              Generate
            </button>
          </div>
        </div>
      </div>
  );
};

export default ContentTile;
