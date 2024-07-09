import React, { useEffect, useState } from "react";
import { FcStart } from "react-icons/fc";
import { Button, Spinner, Clipboard, Breadcrumb } from "flowbite-react";
import apiClient from "../axios/axios";
import Markdown from "react-markdown";
import { createRoot } from "react-dom/client";
import { HiHome } from "react-icons/hi";

const GenerateContent = ({title, description, inputText, type}) => {
  const [promt, setPromt] = useState("");
  const [response, setResponse] = useState("hello");
  const [loading, setLoading] = useState(false);

  const Generate = () => {
    if (promt === "") {
      alert("Enter blog information");
    } else {
      setLoading(true);
      setResponse("Please wait...");
      apiClient
        .post(`/gemini/generate/${type}`, {
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
    setResponse("Response will be displayed here...");
  }, []);

  useEffect(() => {
    const markdown = response;
    createRoot(document.getElementById("markdown")).render(
      <Markdown>{markdown}</Markdown>
    );
  }, [response]);

  const codeStyles = {};

  return (
    <>
      <div className="overflow-y-auto h-full py-10 scroll-smooth mb-10">
        <Breadcrumb aria-label="Default breadcrumb example" className="mx-5">
          <Breadcrumb.Item href="#" icon={HiHome}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">{title}</Breadcrumb.Item>
        </Breadcrumb>
        <div className="flex flex-col gap-10  mx-5 my-5">
          <div className="basis-1/3 rounded-xl shadow-lg border  p-5">
            <div className="text-3xl text-fuchsia-600 mb-5">{title}</div>
            <div className="text-gray-400 mb-5 text-lg">
              {description}
            </div>
            <div className="mb-3 font-semibold text-lg">
            {inputText}
            </div>
            <input
              type="text"
              className="rounded-lg border border-gray-500 w-full text-lg"
              onChange={(e) => setPromt(e.target.value)}
              value={promt}
            />
            <button
              onClick={() => Generate()}
              disabled={loading}
              className="rounded-lg bg-fuchsia-600 disabled:bg-fuchsia-400 text-white py-3 mt-5 w-full text-lg"
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
          <div className="basis-2/3 rounded-xl shadow-lg p-5 border text-lg">
            <div className=" flex flex-row justify-between mx-5 my-3 items-center">
              <div className="font-semibold text-lg">Result</div>
              <div>
                <Clipboard valueToCopy={response} label="Copy" />
              </div>
            </div>
            <div style={codeStyles}>
              <div id="markdown"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GenerateContent;
