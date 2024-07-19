import React, { useEffect, useState } from "react";
import { Button, Spinner, Clipboard, Breadcrumb } from "flowbite-react";
import apiClient from "../axios/axios";
import Markdown from "react-markdown";
import { createRoot } from "react-dom/client";
import { HiHome } from "react-icons/hi";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

const GenerateContent = ({ title, description, inputText, type, tools, id }) => {
  const [promt, setPromt] = useState("");
  const [response, setResponse] = useState("hello");
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState(tools[0]);

  const [error, setError] = useState("");

  useEffect(() => {
    if (error) {
      toast.error(error);
      setError("");
    }
  }, [error]);

  const Generate = () => {
    if (promt === "") {
      setError("Enter information");
    } else {
      setLoading(true);
      setResponse("Please wait...");
      apiClient
        .post(`/${model}/generate/${id}`, {
          withCredentials: true,
          reqPrompt: promt,
        })
        .then((res) => {
          setResponse(res.data.response);
          console.log(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    setResponse("Result will be displayed here...");
  }, []);

  useEffect(() => {
    const markdown = response;
    createRoot(document.getElementById("markdown")).render(
      <Markdown>{markdown}</Markdown>
    );
  }, [response]);

  const codeStyles = {};

  return (
    <div className="bg-gray-50 dark:text-white dark:bg-gray-700 h-full overflow-y-auto scroll-smooth mb-10">
      <div className=" bg-white dark:bg-gray-800 rounded-xl py-10 ">
        <NavLink to={"/dashboard/content"}>
          <Breadcrumb aria-label="Default breadcrumb example" className="mx-5">
            <Breadcrumb.Item href="#" icon={HiHome}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">{title}</Breadcrumb.Item>
          </Breadcrumb>
        </NavLink>
        <div className="flex flex-col gap-10  mx-5 my-5">
          <div className="basis-1/3 rounded-xl border  p-2">
            <div className="rounded-xl bg-blue-100 dark:bg-gray-700 p-5">
              <button className="bg-white dark:text-black rounded-full mb-5 p-3 text-lg">
                {title}
              </button>
              <div className="text-gray-400 mb-5 text-lg">{description}</div>
              <div className="mb-3 text-2xl">{inputText}</div>
              <input
                type="text"
                className="rounded-lg dark:bg-gray-600 border-none w-full text-lg "
                onChange={(e) => setPromt(e.target.value)}
                value={promt}
              />
              <div className="text-xl mt-5 mb-3">Select AI Model</div>
              <div className="flex">
                {tools.map((tool) => (
                  <button
                    className={
                      tool === model
                        ? "bg-black text-white p-3 rounded-full mr-3"
                        : " p-3 rounded-full dark:border-white border border-black mr-3"
                    }
                    onClick={() => setModel(tool)}
                  >
                    {tool}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => Generate()}
              disabled={loading}
              className="rounded-full dark:bg-gray-700 dark:disabled:bg-gray-600 bg-blue-100 disabled:bg-blue-50  p-3  my-5 ml-3 text-lg text-left hover:bg-blue-200"
            >
              <span className="pl-3">
                {loading ? (
                  <span>
                    <Spinner aria-label="Spinner button example" size="sm" />{" "}
                    Generating...
                  </span>
                ) : (
                  "Generate"
                )}
              </span>
            </button>
          </div>

          <div className="basis-2/3 rounded-xl p-3 border text-lg">
            <div className=" flex flex-row justify-between mx-5 my-3 items-center">
              <div className="font-semibold text-xl">Result</div>
              <div>
                <Clipboard className="bg-black rounded-full" valueToCopy={response} label="Copy" />
              </div>
            </div>

            <div className="bg-blue-100 dark:bg-gray-700 rounded-xl p-5 mb-10">
              <div style={codeStyles}>
                <div id="markdown"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateContent;
