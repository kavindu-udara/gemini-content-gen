import React from "react";
import ContentBox from "./ContentBox";

const Bookmarks = ({savedContent,saveContent, unsaveContent}) => {

  return (
    <div className="bg-gray-50 dark:bg-gray-700 overflow-y-auto h-full scroll-smooth">
      <div className=" bg-white dark:bg-gray-800  py-10  rounded-xl mb-10">
        <ContentBox ContentList={savedContent} saveContent={saveContent} unsaveContent={unsaveContent} geating={"Saved"} saved={true} />
        {savedContent.length === 0 ? <div className="text-center text-gray-400">No saved content</div> : null}
      </div>
    </div>
  );
};

export default Bookmarks;
