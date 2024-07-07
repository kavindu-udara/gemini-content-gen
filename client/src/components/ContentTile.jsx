import React from "react";
import { Card } from "flowbite-react";
import { FaYoutube } from "react-icons/fa6";
import { FcStart } from "react-icons/fc";

const ContentTile = ({ image, title, description }) => {
  return (
    <Card className="max-w-sm mt-3  hover:shadow-lg cursor-pointer">
      <div>
      <FcStart className="text-3xl " />
      </div>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </Card>
  );
};

export default ContentTile;
