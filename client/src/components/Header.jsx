import React, { useState } from "react";
import { Button, Navbar } from "flowbite-react";
import { BsArrowRightShort } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";
import { IoSearchOutline, IoNotificationsOutline } from "react-icons/io5";

const Header = ({ DarkThemeToggle, search, setSearch }) => {
  return (
    <div>
      <Navbar className="bg-gray-50 py-5 items-center dark:bg-gray-700">
        <Navbar.Brand>
          <div className="flex rounded-lg bg-white dark:bg-gray-800 items-center border-lg text-black focus:none px-5 py-2">
            <IoSearchOutline className="text-gray-500" />
            <input
              type="text"
              className="border-none bg-white focus:ring-0 dark:bg-gray-800 dark:text-white"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </Navbar.Brand>

        <div className="flex md:order-2">
          <div className="text-3xl p-3 rounded-full bg-white dark:text-black cursor-pointer">
            <IoNotificationsOutline />
          </div>
          <div className="md:ml-5">{DarkThemeToggle}</div>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
