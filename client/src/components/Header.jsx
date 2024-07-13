import React from 'react';
import { Button, Navbar } from "flowbite-react";
import { BsArrowRightShort } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";

const Header = ({DarkThemeToggle}) => {
  return (
    <div className='border-b'>
      <Navbar>
        <Navbar.Brand >
            <input type="text"  className='rounded-lg text-black' placeholder='Search...'/>
        </Navbar.Brand>

        <div className="flex md:order-2">
        <div className="md:ml-5">{DarkThemeToggle}</div>
          <div className="md:ml-5"></div>
        </div>
      </Navbar>
    </div>
  )
}

export default Header