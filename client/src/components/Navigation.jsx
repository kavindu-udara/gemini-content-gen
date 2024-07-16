import React from "react";
import NavButton from "./NavButton";
import { IoHomeOutline } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";
import { IoIosSettings, IoIosHome, IoIosFiling } from "react-icons/io";
import Header from "./Header";
import ContentTile from "./ContentTile";

import { Progress } from "flowbite-react";
import GenerateContent from "./GenerateContent";
import { Outlet, Route, Routes } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Navigation = ({DarkThemeToggle}) => {
  return (
    <div className="flex fixed top-0 left-0 w-full h-full dark:bg-gray-800 dark:text-white">
      <div className="w-24 md:block hidden flex flex-col justify-between text-center  dark:border-none px-5 bg-gray-50  dark:bg-gray-700 dark:text-white ">
        <div>
          <div className="grid grid-cols-1 gap-5 mt-3 content-center items-center">
            <NavButton
              icon={<IoIosHome />}
              path={"/dashboard/content"}
            />
            <NavButton
              icon={<FaUser />}
              path={"/dashboard/profile"}
            />
            {/* <NavButton icon={<IoIosFiling />} text="Billing" />
            <NavButton icon={<FaHistory />} text="History" /> */}
          </div>
        </div>
      </div>

      <div className="flex-1">
        <Header DarkThemeToggle={DarkThemeToggle} />
        <Outlet />
      </div>
    </div>
  );
};

export default Navigation;
