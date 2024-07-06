import React from 'react'
import { MdNavigateNext } from "react-icons/md";
const HomeTile = ({icon, title, description}) => {
  return (
    <div className='p-6 rounded-lg bg-white dark:bg-gray-800 hover:bg-pink-50 dark:hover:bg-gray-600 cursor-pointer'>
        <button className="text-3xl p-3 rounded-lg bg-pink-700 text-white mb-3">{icon}</button>
        <div className='font-bold text-2xl dark:text-white break-words'>{title}</div>
        <div className='text-gray-400 text-base my-3'>{description}</div>
        <div className='text-pink-700 text-sm'>
        <a href="#" className='flex flex-row items-center'>Learn more <MdNavigateNext className='text-sm ' /></a>
        </div>
    </div>
  )
}

export default HomeTile