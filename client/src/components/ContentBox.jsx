import React, { useEffect, useState } from "react";
import ContentTile from "./ContentTile";
import { FaRegBookmark, FaAmazon } from "react-icons/fa";
import { ImPinterest2 } from "react-icons/im";

const ContentBox = ({ ContentList, geating, saved, saveContent }) => {

  return (
    <div>
      <div className="text-4xl text-gray-600 ml-5 my-5 dark:text-white">
        {geating}
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1  gap-5 mx-4 mb-10">
        {ContentList.map((content, index) => {
          return (
            <ContentTile
            saveContent={saveContent}
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
              saved={saved}
              id={content._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ContentBox;
