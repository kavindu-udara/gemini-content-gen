import React from "react";
import { NavLink } from "react-router-dom";

const NavButton = ({ icon, text, path }) => {

  const active = "text-3xl bg-blue-400 text-white p-3 rounded-full cursor-pointer  gap-5 dark:text-black";

  const inactive = "text-3xl bg-blue-200 p-3 rounded-full cursor-pointer  gap-5 dark:text-black";

  return (
    <NavLink
      className={({isActive}) => isActive ? active : inactive}
      to={path}
    >
      {icon}
      {text}
    </NavLink>
  );
};

export default NavButton;
