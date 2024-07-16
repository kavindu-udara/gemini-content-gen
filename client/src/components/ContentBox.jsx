import React from "react";
import ContentTile from "./ContentTile";
import { FaRegBookmark, FaAmazon } from "react-icons/fa";
import { ImPinterest2 } from "react-icons/im";

const ContentBox = ({ ContentList }) => {
  const today = new Date();
  const currentDateAndTime = today.toLocaleString();

  return (
    <div className="bg-gray-50 dark:bg-gray-700  overflow-y-auto h-full scroll-smooth">
      <div className=" bg-white dark:bg-gray-800  py-10  rounded-xl">
        <div className="text-4xl text-gray-600 ml-5 my-5 dark:text-white">Good Morning</div>
        {ContentList ? (

          <div className="grid md:grid-cols-4 grid-cols-1  gap-5 mx-4 mb-10">

            {/* <div className="rounded-xl border p-2 dark:bg-gray-400">
              <div className="rounded-xl bg-blue-100 p-3">
                <div className="flex flex-row justify-between">
                  <div className="bg-white p-3 rounded-full">20 May, 2022</div>
                  <div className="flex bg-white p-3 rounded-full items-center">
                    <FaRegBookmark />
                  </div>
                </div>
                <div className="flex flex-row mt-5">
                  <div className="basis-2/3">
                    <div>Amazon</div>
                    <div className="text-3xl">Senior UI/UX Designer</div>
                  </div>
                  <div className="basis-1/3 flex content-center items-center justify-center">
                    <button className="bg-black rounded-full p-5 text-white text-xl">
                      <FaAmazon />
                    </button>
                  </div>
                </div>
                <div className="mt-5 flex gap-3 flex-wrap">
                  <button className="border rounded-full p-2 border-black">
                    Part time
                  </button>
                  <button className="border rounded-full p-2 border-black">
                    Senior Level
                  </button>
                  <button className="border rounded-full p-2 border-black">
                    Remote
                  </button>
                  <button className="border rounded-full p-2 border-black">
                    Remote
                  </button>
                </div>
              </div>
              <div className="flex my-5 justify-between mx-5">
                <div className="">
                  <div className="text-2xl font-bold">$250/hr</div>
                  <div className="text-gray-500">San Francisco, CA</div>
                </div>
                <div className="">
                  <button className="bg-black rounded-full p-3 text-white text-lg">
                    Apply
                  </button>
                </div>
              </div>
            </div>


            <div className="rounded-xl border p-2 dark:bg-gray-400">
              <div className="rounded-xl bg-pink-100 p-3">
                <div className="flex flex-row justify-between">
                  <div className="bg-white p-3 rounded-full">20 May, 2022</div>
                  <div className="flex bg-white p-3 rounded-full items-center">
                    <FaRegBookmark />
                  </div>
                </div>
                <div className="flex flex-row mt-5">
                  <div className="basis-2/3">
                    <div>Amazon</div>
                    <div className="text-3xl">Senior UI/UX Designer</div>
                  </div>
                  <div className="basis-1/3 flex content-center items-center justify-center">
                    <button className="bg-pink-700 rounded-full p-5 text-white text-xl">
                    <ImPinterest2 />
                    </button>
                  </div>
                </div>
                <div className="mt-5 flex gap-3 flex-wrap">
                  <button className="border rounded-full p-2 border-black">
                    Part time
                  </button>
                  <button className="border rounded-full p-2 border-black">
                    Senior Level
                  </button>
                  <button className="border rounded-full p-2 border-black">
                    Remote
                  </button>
                  <button className="border rounded-full p-2 border-black">
                    Remote
                  </button>
                </div>
              </div>
              <div className="flex my-5 justify-between mx-5">
                <div className="">
                  <div className="text-2xl font-bold">$250/hr</div>
                  <div className="text-gray-500">San Francisco, CA</div>
                </div>
                <div className="">
                  <button className="bg-black rounded-full p-3 text-white text-lg">
                    Apply
                  </button>
                </div>
              </div>
            </div> */}

            {ContentList.map((content, index) => {
              return (
                <ContentTile
                  key={index}
                  image={content.image}
                  title={ content.title.length < 30 ? content.title : content.title.substring(0, 30)+"..." }
                  description={ content.description.length < 40 ? content.description : content.description.substring(0, 40) + "..."}
                  path={`/dashboard/${content.type}`}
                  tools={content.aiTool}
                />
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-5 mx-4 mb-10">
            <div class="w-[350px] h-[160px] bg-slate-100 rounded-lg mt-3 animate-pulse"></div>
            <div class="w-[350px] h-[160px] bg-slate-100 rounded-lg mt-3 animate-pulse"></div>
            <div class="w-[350px] h-[160px] bg-slate-100 rounded-lg mt-3 animate-pulse"></div>
            <div class="w-[350px] h-[160px] bg-slate-100 rounded-lg mt-3 animate-pulse"></div>
            <div class="w-[350px] h-[160px] bg-slate-100 rounded-lg mt-3 animate-pulse"></div>
            <div class="w-[350px] h-[160px] bg-slate-100 rounded-lg mt-3 animate-pulse"></div>
            <div class="w-[350px] h-[160px] bg-slate-100 rounded-lg mt-3 animate-pulse"></div>
            <div class="w-[350px] h-[160px] bg-slate-100 rounded-lg mt-3 animate-pulse"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentBox;
