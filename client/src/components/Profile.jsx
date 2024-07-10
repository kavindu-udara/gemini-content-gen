import React from "react";
import profileImg from "../assets/profile.jpg";

const Profile = () => {
  return (
    <div className=" overflow-y-auto h-full py-10 scroll-smooth">
      <div className="flex content-center justify-center items-center h-full">
        <div className="w-2/6 bg-white dark:bg-gray-800 rounded-lg p-10">
          <div className="text-3xl font-bold text-center mb-10">Profile</div>
          <div className="flex justify-center my-5">
            <img
              src={profileImg}
              alt="profile image"
              className="rounded-full h-32 cursor-pointer"
            />
          </div>
          <div className="grid grid-cols-1 gap-5">
            <div>
              <div className="text-xl font-bold">Username</div>
              <input
                type="text"
                className="rounded-lg dark:bg-gray-600 dark:text-white w-full"
              />
            </div>
            <div>
              <div className="text-xl font-bold">Email</div>
              <input
                type="text"
                className="rounded-lg dark:bg-gray-600 dark:text-white w-full"
              />
            </div>
            <div>
              <div className="text-xl font-bold">Password</div>
              <input
                type="text"
                className="rounded-lg dark:bg-gray-600 dark:text-white w-full"
              />
            </div>
          </div>
          <div className="mt-5 content-center items-center text-center">
            <button className="p-3 bg-pink-700 text-white rounded-lg text-center">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
