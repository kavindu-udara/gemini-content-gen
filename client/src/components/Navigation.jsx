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

const Navigation = () => {
  const ContentList = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvNlV9q8tRA_5agW4ZtOY-EcrBP3ftuhcYoA&s",
      title: "Meaningful alt",
      description: "alt text for an image that is not purely decorative",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkBpgSGwIv6HLq46xw3YNe-ylvsSxTCkeviA&s",
      title: "Blog Title",
      description: "An AI tool that generate blog title depend on your input",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt6dERq1DrjKHNxKURrBlowGO0PO44WQ8YHA&s",
      title: "AI Content Generator",
      description: "Powered by Google Gemini",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLsEcsraB8Yh5vD5Us3MSDIpS2XE5hs8XNKA&s",
      title: "AI Content Generator",
      description: "Powered by Google Gemini",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvNlV9q8tRA_5agW4ZtOY-EcrBP3ftuhcYoA&s",
      title: "Meaningful alt",
      description: "alt text for an image that is not purely decorative",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkBpgSGwIv6HLq46xw3YNe-ylvsSxTCkeviA&s",
      title: "Blog Title",
      description: "An AI tool that generate blog title depend on your input",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt6dERq1DrjKHNxKURrBlowGO0PO44WQ8YHA&s",
      title: "AI Content Generator",
      description: "Powered by Google Gemini",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLsEcsraB8Yh5vD5Us3MSDIpS2XE5hs8XNKA&s",
      title: "AI Content Generator",
      description: "Powered by Google Gemini",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvNlV9q8tRA_5agW4ZtOY-EcrBP3ftuhcYoA&s",
      title: "Meaningful alt",
      description: "alt text for an image that is not purely decorative",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkBpgSGwIv6HLq46xw3YNe-ylvsSxTCkeviA&s",
      title: "Blog Title",
      description: "An AI tool that generate blog title depend on your input",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt6dERq1DrjKHNxKURrBlowGO0PO44WQ8YHA&s",
      title: "AI Content Generator",
      description: "Powered by Google Gemini",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLsEcsraB8Yh5vD5Us3MSDIpS2XE5hs8XNKA&s",
      title: "AI Content Generator",
      description: "Powered by Google Gemini",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkBpgSGwIv6HLq46xw3YNe-ylvsSxTCkeviA&s",
      title: "Blog Title",
      description: "An AI tool that generate blog title depend on your input",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt6dERq1DrjKHNxKURrBlowGO0PO44WQ8YHA&s",
      title: "AI Content Generator",
      description: "Powered by Google Gemini",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLsEcsraB8Yh5vD5Us3MSDIpS2XE5hs8XNKA&s",
      title: "AI Content Generator",
      description: "Powered by Google Gemini",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvNlV9q8tRA_5agW4ZtOY-EcrBP3ftuhcYoA&s",
      title: "Meaningful alt",
      description: "alt text for an image that is not purely decorative",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkBpgSGwIv6HLq46xw3YNe-ylvsSxTCkeviA&s",
      title: "Blog Title",
      description: "An AI tool that generate blog title depend on your input",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt6dERq1DrjKHNxKURrBlowGO0PO44WQ8YHA&s",
      title: "AI Content Generator",
      description: "Powered by Google Gemini",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLsEcsraB8Yh5vD5Us3MSDIpS2XE5hs8XNKA&s",
      title: "AI Content Generator",
      description: "Powered by Google Gemini",
    },
  ];

  return (
    <div className="flex flex-row fixed top-0 left-0 w-full h-full dark:bg-gray-800 dark:text-white ">
      <div className="basis-1/6 flex flex-col justify-between text-center border-r bg-white dark:border-none px-5  dark:bg-gray-700 dark:text-white ">
      <div>
        <div className="text-3xl mt-5 mb-3 font-semibold border-b">ContentGen</div>
        <div className="grid grid-cols-1 gap-5 mt-3">
          <NavButton icon={<IoIosHome />} text="Home" />
          <NavButton icon={<IoIosFiling />} text="Billing" />
          <NavButton icon={<FaHistory />} text="History" />
        </div>
        </div>
        <div className="flex flex-col mb-5">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg h-[150px] mt-10 text-white text-lg text-left p-5">
            <div className="mb-3">Credits</div>
            <Progress progress={50} color="blue" />
            <div className="mt-3">0/10000 Used</div>
          </div>
          <div className="bg-slate-50 rounded-lg mt-10 text-lg text-center py-3 font-semibold items-center hover:bg-slate-100 cursor-pointer">
            <div className="mb-3">Upgrade</div>
          </div>
          <div className="text-xs text-gray-400 mt-10">v1.0.0</div>
        </div>
      </div>

      <div className="basis-5/6 ">
        <Header />
        <div className=" overflow-y-auto h-full py-10 scroll-smooth">
          <div className="grid grid-cols-4 gap-5 mx-4 mb-10">
            {ContentList.map((content, index) => {
              return (
                <ContentTile
                  key={index}
                  image={content.image}
                  title={content.title}
                  description={content.description}
                />
              );
            })}
          </div>
        </div>
        {/* <GenerateContent/> */}
      </div>
    </div>
  );
};

export default Navigation;
