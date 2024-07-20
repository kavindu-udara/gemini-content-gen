import React, { useState } from "react";
import { toast } from "react-toastify";
import apiClient from "../../axios/axios";
import { useSelector } from "react-redux";

const AddNewContent = () => {
  const [tools, setTools] = useState(["Gemini", "Groq"]);
  const [selectedTools, setSelectedTools] = useState([]);
  const {currentUser} = useSelector(state => state.user);

  // inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [inputText, setInputText] = useState("");
  const [type, setType] = useState("");
  const [promt, setPromt] = useState("");
  
  const createContent = () => {
    if(selectedTools.length === 0){
        toast.error("Please select at least one tool")
    }else{
      apiClient.post('admin/content/create', {
        id: currentUser._id,
        title,
        description,
        inputText,
        type,
        promt,
        tools: selectedTools
      }).then((res) => {
        res.data.sucess ? toast.success(res.data.message) : toast.error(res.data.message);
        console.log(res);
      }).catch((err) => {
        toast.error(err.message);
        console.log(err);
      });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createContent();
  }

  return (
    <div className="bg-gray-50 dark:text-white dark:bg-gray-700 h-full overflow-y-auto scroll-smooth mb-10">
      <div className=" bg-white dark:bg-gray-800 rounded-xl py-10 mb-10">
        <form onSubmit={handleSubmit} className="flex flex-col gap-10  mx-5 mt-5 mb-10">
          <div className="basis-1/3 rounded-xl border  p-2">
            <div className="rounded-xl bg-blue-100 dark:bg-gray-700 p-5">
              <button disabled type="button" className="bg-white dark:text-black rounded-full mb-5 p-3 text-xl">
                Add new Content
              </button>
              <div className="mb-3">
                <div className="text-lg">Title</div>
                <input
                value={title}
                onChange={e => setTitle(e.target.value)}
                  type="text"
                  className="focus:ring-0 rounded-lg dark:bg-gray-600 border-none w-full text-lg"
                  required
                />
              </div>
              <div className="mb-3">
                <div className="text-lg">Description</div>
                <input
                value={description}
                onChange={e => setDescription(e.target.value)}
                  type="text"
                  className="focus:ring-0 rounded-lg dark:bg-gray-600 border-none w-full text-lg"
                  required
                />
              </div>
              <div className="mb-3">
                <div className="text-lg">Input text</div>
                <input
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                  type="text"
                  className="focus:ring-0 rounded-lg dark:bg-gray-600 border-none w-full text-lg"
                  required
                />
              </div>
              <div className="mb-3">
                <div className="text-lg">Type</div>
                <input
                value={type}
                onChange={e => setType(e.target.value)}
                  type="text"
                  className="focus:ring-0 rounded-lg dark:bg-gray-600 border-none w-full text-lg"
                  required
                />
              </div>
              <div className="mb-3">
                <div className="text-lg">Promt</div>
                <input
                value={promt}
                onChange={e => setPromt(e.target.value)}
                  type="text"
                  className="focus:ring-0 rounded-lg dark:bg-gray-600 border-none w-full text-lg"
                  required
                />
              </div>
              <div className="mb-3">
                <div className="text-lg mb-2">Select AI tool</div>
                {tools.map((tool) => (
                  <button
                  type="button"
                    key={tool}
                    onClick={
                      selectedTools.includes(tool)
                        ? () =>
                            setSelectedTools(
                              selectedTools.filter(
                                (selectedTool) => selectedTool !== tool
                              )
                            )
                        : () => setSelectedTools([...selectedTools, tool])
                    }
                    className={
                      selectedTools.some(
                        (selectedTool) => selectedTool === tool
                      )
                        ? "bg-black text-white p-3 rounded-full mr-3  border border-black"
                        : " p-3 rounded-full dark:border-white border border-black mr-3"
                    }
                  >
                    {tool}
                  </button>
                ))}
              </div>
            </div>
            <button type="submit" className="rounded-full dark:bg-gray-700 dark:disabled:bg-gray-600 bg-blue-100 disabled:bg-blue-50  p-3  my-5 ml-3 text-lg text-left hover:bg-blue-200">
              <span>Create content</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewContent;
