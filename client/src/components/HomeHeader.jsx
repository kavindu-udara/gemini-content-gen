import React from "react";
import { Navbar } from "flowbite-react";
const HomeHeader = ({DarkThemeToggle}) => {
  return (
    <div>
      <Navbar>
        <Navbar.Brand >
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            ContentGen
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <div className="md:ml-5">{DarkThemeToggle}</div>
        </div>
      </Navbar>
    </div>
  );
};

export default HomeHeader;
