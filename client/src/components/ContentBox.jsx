import React from "react";
import ContentTile from "./ContentTile";

const ContentBox = ({ ContentList }) => {
  return (
    <div className=" overflow-y-auto h-full py-10 scroll-smooth">
        {ContentList ? (
      <div className="grid md:grid-cols-4 grid-cols-2 gap-5 mx-4 mb-10">
          {ContentList.map((content, index) => {
            return (
              <ContentTile
                key={index}
                image={content.image}
                title={content.title}
                description={content.description}
                path={`/dashboard/${content.type}`}
              />
            );
          }
          )}
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
  );
};

export default ContentBox;
