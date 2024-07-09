import React from "react";
import { Card } from "flowbite-react";
import { FcStart } from "react-icons/fc";
import { NavLink } from "react-router-dom";

const ContentTile = ({ title, description, path }) => {
  return (
    <NavLink to={path}>
      <Card className="max-w-sm mt-3  hover:shadow-lg cursor-pointer bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50
      hover:bg-gradient-to-r hover:from-indigo-500/75 hover:via-purple-500/75 hover:to-pink-500/75
      ">
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
    </NavLink>
  );
};

export default ContentTile;
