import React, { useEffect, useRef, useState } from "react";
import profileImg from "../assets/profile.jpg";
import { useSelector, useDispatch } from "react-redux";
import apiClient from "../axios/axios";
import { toast } from "react-toastify";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} from "../redux/user/userSlice";
import { Button, Modal, Progress } from "flowbite-react";
import {
  getStorage,
  uploadBytesResumable,
  ref,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../firebase/firebase";

const Profile = () => {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImage, setProfileImage] = useState(undefined);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [avatar, setAvatar] = useState(currentUser.avatar);

  const selectProfileImageRef = useRef(null);

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

    const changePassword = async () => {
      apiClient
        .post(`/user/update/password/${currentUser._id}`, {
          oldPassword: currentPassword,
          newPassword: newPassword,
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
    };

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

  useEffect(() => {
    if (profileImage) {
      handleImageUpload(profileImage);
    }
  }, [profileImage]);

  const handleImageUpload = (image) => {
    setUploading(true);
    // import storage
    const storage = getStorage(app);
    // create unique file name
    const fileName = new Date().getTime() + image.name;
    // storage reference
    const storageRef = ref(storage, `avatars/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("upload is " + progress + "% done");
        setProgress(Math.round(progress));
        // setUploading(true);
      },
      (error) => {
        toast.error("Image Upload Failed");
        setUploading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, avatar: downloadURL });
          // console.log(downloadURL);
          setAvatar(downloadURL);
          setUploading(false);
        });
      }
    );
  };

  // console.log(currentUser.avatar);

  return (
    <div className=" overflow-y-auto bg-gray-50 h-full scroll-smooth">
      <div className="flex rounded-xl  py-10  bg-white dark:bg-gray-800 content-center md:justify-center md:items-center h-full">
        <div className="md:w-2/6 w-full bg-white dark:bg-gray-800 rounded-xl p-3 border">
          <form onSubmit={handleSubmit}>
            <div className="bg-blue-100 rounded-xl p-5">
              <div className="text-3xl font-bold text-center mb-10">
                Profile
              </div>
              <div className="flex justify-center my-5">
                <img
                  onClick={() => selectProfileImageRef.current.click()}
                  src={avatar || profileImg}
                  alt="profile image"
                  className="rounded-full h-32 cursor-pointer"
                />
                <input
                  onChange={(e) => setProfileImage(e.target.files[0])}
                  type="file"
                  className="hidden"
                  accept="image/*"
                  ref={selectProfileImageRef}
                />
              </div>
              {uploading ? (
                <div className="flex justify-center mb-5">
                  <Progress
                    progress={progress}
                    color="green"
                    className="w-32"
                  />
                </div>
              ) : null}

              <div className="grid grid-cols-1 gap-5">
                <div>
                  <div className="text-xl font-bold">Username</div>
                  <input
                    disabled={loading}
                    id="username"
                    onChange={handleChange}
                    defaultValue={currentUser.username}
                    type="text"
                    className="rounded-lg dark:bg-gray-600 dark:text-white w-full border-none"
                  />
                </div>
                <div>
                  <div className="text-xl font-bold">Email</div>
                  <input
                    disabled={loading}
                    id="email"
                    onChange={handleChange}
                    defaultValue={currentUser.email}
                    type="text"
                    className="rounded-lg dark:bg-gray-600 dark:text-white w-full border-none"
                  />
                </div>
                <div>
                  <div className="text-xl font-bold">Password</div>
                  <button
                    disabled={loading}
                    type="button"
                    onClick={() => setOpenModal(true)}
                    className="rounded-lg dark:bg-gray-600 bg-white dark:text-white w-full py-2 text-left px-2 border border-black items-center border-none"
                  >
                    ******
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-5 content-center items-center text-center">
              <button
                disabled={loading}
                type="submit"
                className="p-3 bg-black text-white rounded-full text-center disabled:bg-white disabled:border disabled:border-black disabled:text-black disabled:cursor-not-allowed"
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
              <div className="border p-3 rounded-xl">
                <div className="bg-blue-100 rounded-xl p-3">
                  <div className="dark:text-white mb-3">
                    <label htmlFor="">Current Password</label>
                    <input
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      type="password"
                      className="w-full border-none rounded-lg dark:bg-gray-600 dark:text-white"
                    />
                  </div>
                  <div className="dark:text-white mb-3">
                    <label htmlFor="">New Password</label>
                    <input
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      type="password"
                      className="w-full rounded-lg border-none dark:bg-gray-600 dark:text-white"
                    />
                  </div>
                  <div className="dark:text-white mb-3">
                    <label htmlFor="">Confirm Password</label>
                    <input
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      type="password"
                      className="w-full rounded-lg border-none dark:bg-gray-600 dark:text-white"
                    />
                  </div>
                </div>
                <div className="my-3 text-center">
                  <button type="submit" className="bg-black rounded-full p-3 text-white">Change Password</button>
                </div>
              </div>
            </div>
          </Modal.Body>
        </form>
      </Modal>
    </div>
  );
};

export default Profile;
