import React from "react";
import ContentTile from "./ContentTile";
import { FaRegBookmark, FaAmazon } from "react-icons/fa";
import { ImPinterest2 } from "react-icons/im";

const ContentBox = ({ ContentList }) => {
  const today = new Date();
  const currentDateAndTime = today.toLocaleString();

  return (
    <div className="bg-gray-50 dark:bg-gray-700  overflow-y-auto h-full scroll-smooth">
      <div className=" bg-white dark:bg-gray-800  py-10  rounded-xl">
        <div className="text-4xl text-gray-600 ml-5 my-5 dark:text-white">
          Good Morning
        </div>
        {ContentList ? (
          <div className="grid md:grid-cols-4 grid-cols-1  gap-5 mx-4 mb-10">
            {ContentList.map((content, index) => {
              return (
                <ContentTile
                  key={index}
                  image={content.image}
                  title={
                    content.title.length < 30
                      ? content.title
                      : content.title.substring(0, 30) + "..."
                  }
                  description={
                    content.description.length < 40
                      ? content.description
                      : content.description.substring(0, 40) + "..."
                  }
                  path={`/dashboard/${content.type}`}
                  tools={content.aiTool}
                />
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-5 mx-4 mb-10">
            <div class="w-[350px] h-[160px] bg-slate-100 rounded-lg mt-3 animate-pulse"></div>
            <div class="w-[350px] h-[160px] bg-slate-100 rounded-lg mt-3 animate-pulse"></div>
            <div class="w-[350px] h-[160px] bg-slate-100 rounded-lg mt-3 animate-pulse"></div>
            <div class="w-[350px] h-[160px] bg-slate-100 rounded-lg mt-3 animate-pulse"></div>
            <div class="w-[350px] h-[160px] bg-slate-100 rounded-lg mt-3 animate-pulse"></div>
            <div class="w-[350px] h-[160px] bg-slate-100 rounded-lg mt-3 animate-pulse"></div>
            <div class="w-[350px] h-[160px] bg-slate-100 rounded-lg mt-3 animate-pulse"></div>
            <div class="w-[350px] h-[160px] bg-slate-100 rounded-lg mt-3 animate-pulse"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentBox;
