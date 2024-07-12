import React from "react";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase/firebase";
import apiClient from "../axios/axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  signInSuccess
} from "../redux/user/userSlice";

const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    // popup signin
    const result = await signInWithPopup(auth, provider);
    // console.log(result);
    apiClient.post("/auth/google", {
      name: result.user.displayName,
      email: result.user.email,
      avatar: result.user.photoURL
    }).then((res) => {
      if(res.data.success){
        dispatch(signInSuccess(res.data));
        navigate("/dashboard/content");
      }
    }).catch((err) => {
      console.log(err);
    })
  };

  return (
    <div className="grid grid-cols-2 gap-5">
      <button
        onClick={handleGoogleClick}
        className="flex items-center gap-5 justify-center rounded-lg p-3 text-center border cursor-pointer hover:bg-fuchsia-50"
      >
        <FaGoogle className="text-lg text-red-700" />
        Google
      </button>
      <button className="rounded-lg p-3 text-center border cursor-pointer hover:bg-fuchsia-50">
        Google
      </button>
    </div>
  );
};

export default OAuth;
