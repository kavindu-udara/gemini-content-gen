import React from "react";

const NavButton = ({ icon, text }) => {
  return (
    <div className="flex items-center hover:text-white  hover:bg-fuchsia-600 p-3 text-xl  rounded-lg cursor-pointer mx-10">
      {icon}
      {text}
    </div>
  );
};

export default NavButton;
