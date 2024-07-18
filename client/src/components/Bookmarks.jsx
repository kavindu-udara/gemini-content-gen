import React, { useEffect, useState } from "react";
import apiClient from "../axios/axios";
import { toast } from "react-toastify";
import ContentBox from "./ContentBox";
import ContentTile from "./ContentTile";

const Bookmarks = ({savedContent}) => {

  return (
    <div className="bg-gray-50 dark:bg-gray-700 overflow-y-auto h-full scroll-smooth">
      <div className=" bg-white dark:bg-gray-800  py-10  rounded-xl mb-10">
        <ContentBox ContentList={savedContent} geating={"Saved"} saved={true} />
      </div>
    </div>
  );
};

export default Bookmarks;
