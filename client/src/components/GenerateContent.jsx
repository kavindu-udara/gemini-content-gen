import React, { useEffect, useState } from "react";
import { Button, Spinner, Clipboard, Breadcrumb } from "flowbite-react";
import apiClient from "../axios/axios";
import Markdown from "react-markdown";
import { createRoot } from "react-dom/client";
import { HiHome } from "react-icons/hi";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

const GenerateContent = ({ title, description, inputText, type, tools }) => {
  const [promt, setPromt] = useState("");
  const [response, setResponse] = useState("hello");
  const [loading, setLoading] = useState(false);

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
        .post(`/groq/generate/${type}`, {
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
    <>
      <div className="overflow-y-auto h-full py-10 scroll-smooth mb-10">
        <NavLink to={"/dashboard/content"}>
          <Breadcrumb aria-label="Default breadcrumb example" className="mx-5">
            <Breadcrumb.Item href="#" icon={HiHome}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">{title}</Breadcrumb.Item>
          </Breadcrumb>
        </NavLink>
        <div className="flex flex-col gap-10  mx-5 my-5">
          <div className="basis-1/3 rounded-xl shadow-lg border  p-5">
            <div className="text-3xl text-fuchsia-600 mb-5">{title}</div>
            <div className="text-gray-400 mb-5 text-lg">{description}</div>
            <div className="mb-3 font-semibold text-lg">{inputText}</div>
            <input
              type="text"
              className="rounded-lg border border-gray-500 w-full text-lg dark:bg-gray-800"
              onChange={(e) => setPromt(e.target.value)}
              value={promt}
            />
            <button
              onClick={() => Generate()}
              disabled={loading}
              className="rounded-lg bg-fuchsia-600 disabled:bg-fuchsia-400 text-white py-3 px-5 mt-5 text-lg text-left"
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
            <div className="text-lg mt-5">AI Model</div>
            <div className="flex">
            {tools.map((tool) => (
              <button className="border rounded-lg p-3 mx-3 bg-slate-600 text-white">{tool}</button>
            ))}
            </div>
          </div>
          <div className="basis-2/3 rounded-xl shadow-lg p-5 border text-lg">
            <div className=" flex flex-row justify-between mx-5 my-3 items-center">
              <div className="font-semibold text-2xl">Result</div>
              <div>
                <Clipboard valueToCopy={response} label="Copy" />
              </div>
            </div>
            <hr />
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
