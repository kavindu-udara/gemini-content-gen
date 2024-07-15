import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavButton = ({ icon, text, path }) => {

  const active = "text-3xl bg-gray-400 text-white p-3 rounded-full cursor-pointer  gap-5";

  const inactive = "text-3xl bg-gray-200 p-3 rounded-full cursor-pointer  gap-5";

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
