import React, { useEffect } from "react";
import { FcStart } from "react-icons/fc";
import { Button, Spinner, Clipboard } from "flowbite-react";
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; 

const GenerateContent = () => {

  
  // const quill = new Quill('#editor', {
  //   theme: 'snow'
  // });
  // const quill = new Quill('#editor');
  // const container = document.getElementById('editor');
  // const quill = new Quill(container);

  useEffect(() => {
    const options = {
      debug: 'info',
      modules: {
        toolbar: true,
      },
      placeholder: 'Compose an epic...',
      theme: 'snow'
    };
    const quill = new Quill('#editor', options);
  }, [])

  return (
    <>
    <div className="mt-3 ml-5">
    <button className="bg-fuchsia-700 rounded-lg text-white p-3">back</button>
    </div>
    <div className="flex flex-row gap-10  mx-5 my-5">
      <div className="basis-1/3 rounded-xl shadow-lg border  p-5">
        <FcStart className="text-3xl mb-5" />
        <div className="text-2xl text-fuchsia-600 mb-5">Blog Title</div>
        <div className="text-gray-400 mb-5">
          An AI tool that generate blog title depends on your blog information
        </div>
        <div className="mb-3 font-semibold">Enter your blog niche</div>
        <input
          type="text"
          className="rounded-lg border border-gray-500 w-full"
        />
        <div className="mb-3 mt-5 font-semibold">
          Enter your blog information
        </div>
        <textarea
          rows="10"
          name=""
          id=""
          className="rounded-lg border border-gray-500 w-full"
        ></textarea>
        <button className="rounded-lg bg-fuchsia-700 disabled:bg-fuchsia-400 text-white py-3 mt-5 w-full" disabled>
          <Spinner aria-label="Spinner button example" size="sm" />
          <span className="pl-3">Generating...</span>
        </button>
      </div>
      <div className="basis-2/3 rounded-xl shadow-lg p-5 border">
      <div className=" flex flex-row justify-between mx-5 my-3 items-center">
      <div className="font-semibold text-lg">Result</div>
      <div>
        {/* <button className="bg-fuchsia-700 rounded-lg text-white p-3">copy</button> */}
        <Clipboard valueToCopy="npm install flowbite-react" label="Copy" />
      </div>
      </div>
        <div id="editor" style={{ height: '400px' }}></div>
      </div>
    </div>
    </>
  );
};

export default GenerateContent;
