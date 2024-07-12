import React from 'react';
import { FaGoogle } from "react-icons/fa";
const OAuth = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="flex items-center gap-5 justify-center rounded-lg p-3 text-center border cursor-pointer hover:bg-fuchsia-50">
        <FaGoogle className="text-lg text-red-700" />
        Google
      </div>
      <div className="rounded-lg p-3 text-center border cursor-pointer hover:bg-fuchsia-50">
        Google
      </div>
    </div>
  )
}

export default OAuth