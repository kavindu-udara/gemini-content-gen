import React from "react";
import NavButton from "./NavButton";
import { IoHomeOutline } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";
import { IoIosSettings, IoIosHome, IoIosFiling } from "react-icons/io";
import Header from "./Header";

const Navigation = () => {
  return (
    <div className="flex flex-row h-screen dark:bg-gray-800 dark:text-white">
      <div className="basis-1/6 text-center border-r dark:border-none px-5  dark:bg-gray-700 dark:text-white">
        <h1 className="text-3xl font-bold my-3 border-b pb-3">ContentGen</h1>
        <div className="grid grid-cols-1 gap-5">
          <NavButton
            icon={<IoIosHome className="text-xl mr-3" />}
            text={"Home"}
          />
          <NavButton
            icon={<FaHistory className="text-xl mr-3" />}
            text={"History"}
          />
          <NavButton
            icon={<IoIosFiling className="text-xl mr-3" />}
            text={"Billing"}
          />
          <NavButton
            icon={<IoIosSettings className="text-xl mr-3" />}
            text={"Setting"}
          />
        </div>
      </div>
      <div className="basis-5/6">
        <Header />
      </div>
    </div>
  );
};

export default Navigation;
