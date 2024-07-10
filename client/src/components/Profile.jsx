import React, { useState } from "react";
import profileImg from "../assets/profile.jpg";
import { useSelector } from "react-redux";
import apiClient from "../axios/axios";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});

  // console.log(currentUser);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updateProfile = async () => {
      apiClient
        .post(`/user/update/${currentUser.user._id}`, formData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    updateProfile();
  };

  return (
    <div className=" overflow-y-auto h-full py-10 scroll-smooth">
      <div className="flex content-center justify-center items-center h-full">
        <div className="w-2/6 bg-white dark:bg-gray-800 rounded-lg p-10">
          <form onSubmit={handleSubmit}>
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
                  id="username"
                  onChange={handleChange}
                  defaultValue={currentUser.user.username}
                  type="text"
                  className="rounded-lg dark:bg-gray-600 dark:text-white w-full"
                />
              </div>
              <div>
                <div className="text-xl font-bold">Email</div>
                <input
                  id="email"
                  onChange={handleChange}
                  defaultValue={currentUser.user.email}
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
              <button type="submit" className="p-3 bg-pink-700 text-white rounded-lg text-center">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
