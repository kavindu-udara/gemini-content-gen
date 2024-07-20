import React, { useState } from "react";
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
import { FaUser, FaPlus } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { FaThList } from "react-icons/fa";

const Navigation = ({ DarkThemeToggle, search, setSearch }) => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="flex md:fixed top-0 left-0 w-full h-full dark:bg-gray-800 dark:text-white">
      <div className="w-24 md:block hidden flex flex-col justify-between text-center  dark:border-none px-5 bg-gray-50  dark:bg-gray-700 dark:text-white ">
        <div>
          <div className="grid grid-cols-1 gap-5 mt-3 content-center items-center">
            <NavButton icon={<IoIosHome />} path={"/dashboard/content"} />
            <NavButton icon={<FaBookmark />} path={"/dashboard/saved"} />
            <NavButton icon={<FaUser />} path={"/dashboard/profile"} />
            {currentUser?.role === "admin" && (
              <>
                <NavButton icon={<FaPlus />} path={"/dashboard/add-content"} />
                <NavButton
                  icon={<FaThList />}
                  path={"/dashboard/contents-list"}
                />
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex-1">
        <Header
          DarkThemeToggle={DarkThemeToggle}
          search={search}
          setSearch={setSearch}
        />
        <Outlet />
      </div>
    </div>
  );
};

export default Navigation;
