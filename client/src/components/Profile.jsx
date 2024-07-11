import React, { useEffect, useState } from "react";
import profileImg from "../assets/profile.jpg";
import { useSelector, useDispatch } from "react-redux";
import apiClient from "../axios/axios";
import { toast } from "react-toastify";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} from "../redux/user/userSlice";
import { Button, Modal } from "flowbite-react";

const Profile = () => {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  // console.log(currentUser);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updateProfile = async () => {
      dispatch(updateUserStart());
      apiClient
        .post(`/user/update/${currentUser._id}`, formData)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            dispatch(updateUserSuccess(res.data));
            toast.success(res.data.message);
          } else {
            dispatch(updateUserFailure(res.data.message));
            // toast.error(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
          dispatch(updateUserFailure(err));
        });
    };

    updateProfile();
  };

  const handleChangePasswordSubmit = (e) => {
    e.preventDefault();

    const changePassword = async() => {
      apiClient
        .post(`/user/update/password/${currentUser._id}`, {
          oldPassword: currentPassword,
          newPassword: newPassword
        })
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            toast.success(res.data.message);
            setOpenModal(false);
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
          } else {
            toast.error(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

    currentPassword !== "" && newPassword !== "" && confirmPassword !== ""
      ? newPassword === confirmPassword
        ? currentPassword !== newPassword
          ? changePassword()
          : toast.error("New password cannot be the same as old password")
        : toast.error("Password does not match")
      : toast.error("Please fill all the fields");
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

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
                  defaultValue={currentUser.username}
                  type="text"
                  className="rounded-lg dark:bg-gray-600 dark:text-white w-full"
                />
              </div>
              <div>
                <div className="text-xl font-bold">Email</div>
                <input
                  id="email"
                  onChange={handleChange}
                  defaultValue={currentUser.email}
                  type="text"
                  className="rounded-lg dark:bg-gray-600 dark:text-white w-full"
                />
              </div>
              <div>
                <div className="text-xl font-bold">Password</div>
                <button
                  type="button"
                  onClick={() => setOpenModal(true)}
                  className="rounded-lg dark:bg-gray-600 dark:text-white w-full py-2 text-left px-2 border border-black items-center"
                >
                  ******
                </button>
              </div>
            </div>
            <div className="mt-5 content-center items-center text-center">
              <button
                disabled={loading}
                type="submit"
                className="p-3 bg-pink-700 text-white rounded-lg text-center disabled:bg-pink-500 disabled:cursor-not-allowed"
              >
                {loading ? "Updating..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <form onSubmit={handleChangePasswordSubmit}>
          <Modal.Header>Change password</Modal.Header>
          <Modal.Body>
            <div className="space-y-6 flex justify-center">
              <div>
                <div className="dark:text-white mb-3">
                  <label htmlFor="">Current Password</label>
                  <input
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    type="password"
                    className="w-full rounded-lg dark:bg-gray-600 dark:text-white"
                  />
                </div>
                <div className="dark:text-white mb-3">
                  <label htmlFor="">New Password</label>
                  <input
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    type="password"
                    className="w-full rounded-lg dark:bg-gray-600 dark:text-white"
                  />
                </div>
                <div className="dark:text-white mb-3">
                  <label htmlFor="">Confirm Password</label>
                  <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    className="w-full rounded-lg dark:bg-gray-600 dark:text-white"
                  />
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="flex justify-center">
            <button
              type="submit"
              className="p-3 bg-pink-700 text-white rounded-lg hover:bg-slate-600"
            >
              Change Password
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default Profile;
