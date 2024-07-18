import React, { useEffect, useState } from "react";
import ContentBox from "./ContentBox";

const Contents = ({ ContentList,saved }) => {
  const [geating, setGeating] = useState("");

  const today = new Date();
  const currentHours = today.getHours();

  useEffect(() => {
    if (currentHours >= 6 && currentHours < 12) {
      setGeating("Good morning!");
    } else if (currentHours >= 12 && currentHours < 18) {
      setGeating("Good evening!");
    } else if (currentHours >= 18 || currentHours < 6) {
      setGeating("Good night!");
    }
  }, []);
  return (
    <div className="bg-gray-50 dark:bg-gray-700 overflow-y-auto h-full scroll-smooth">
      <div className=" bg-white dark:bg-gray-800  py-10  rounded-xl mb-10">
        <ContentBox ContentList={ContentList} geating={geating} saved={saved} />
      </div>
    </div>
  );
};

export default Contents;
