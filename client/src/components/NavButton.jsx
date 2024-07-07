import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavButton = ({ icon, text, path }) => {

  const active = "flex items-center text-white  hover:bg-fuchsia-600 bg-fuchsia-600 p-3 text-xl  rounded-lg cursor-pointer mx-5 gap-5";

  const inactive = "flex items-center  hover:bg-fuchsia-600 p-3 text-xl  rounded-lg cursor-pointer mx-5 gap-5";

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
