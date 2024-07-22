import React from "react";
import NavButton from "./NavButton";
import { IoIosHome } from "react-icons/io";
import Header from "./Header";

import { Outlet } from "react-router-dom";
import { FaUser, FaPlus,FaThList, FaUsers  } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Navigation = ({ DarkThemeToggle, search, setSearch }) => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="sm:flex md:fixed top-0 left-0 w-full h-full dark:bg-gray-800 dark:text-white">
      <div className="sm:w-24 w-full md:block flex flex-row sm:flex-col justify-between text-center dark:border-none px-5 bg-gray-50  dark:bg-gray-700 dark:text-white ">
        <div>
          <div className="grid sm:grid-cols-1 grid-cols-5 gap-5 mt-3 content-center items-center">
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
                <NavButton
                  icon={<FaUsers />}
                  path={"/dashboard/users-list"}
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
