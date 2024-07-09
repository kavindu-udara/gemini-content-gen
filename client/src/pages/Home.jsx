import React from "react";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import HomeHeader from "../components/HomeHeader";
import { BsArrowRightShort } from "react-icons/bs";
import HomeTile from "../components/HomeTile";
import { MdDevices } from "react-icons/md";
import { LuSettings2 } from "react-icons/lu";
import { FaUsers } from "react-icons/fa6";
import { FaRegComments } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const Home = ({DarkThemeToggle}) => {
  return (
    <div className="bg-white h-screen dark:bg-gray-800">
      <HomeHeader DarkThemeToggle={DarkThemeToggle} />
      <div className="flex flex-col text-center min-h-[50vh] py-10 dark:bg-gray-800 dark:text-white items-center justify-center">
        <div className="text-5xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">AI Content Generator</span>
        </div>
        <div className="text-xl mt-5 text-gray-400">
          Powered by Google Gemini
        </div>
        <Button
          size="xl"
          gradientDuoTone="pinkToOrange"
          className="content-center text-xl mt-5 font-semibold"
        >
          <NavLink to='/dashboard/content'>Get started</NavLink>
           <BsArrowRightShort className="text-2xl" />
        </Button>
      </div>
      <div className="grid sm:grid-cols-4 gap-5 mx-5 bg-white dark:bg-gray-800 grid-cols-2 pb-5">
        <HomeTile icon={<MdDevices />} title={"25+ templates"} description={"Responsive, and mobile-first project on the web"} />
        <HomeTile icon={<LuSettings2 />} title={"Customizable"} description={"Customizable, and mobile-first project on the web"} />
        <HomeTile icon={<FaUsers />} title={"Collaborative"} description={"Collaborative, and mobile-first project on the web"} />
        <HomeTile icon={<FaRegComments />} title={"Open Source"} description={"Open Source, and mobile-first project on the web"} />
      </div>
    </div>
  );
};

export default Home;
