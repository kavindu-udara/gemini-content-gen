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
    <div className="flex items-center justify-center">
      <button
        type="button"
        onClick={handleGoogleClick}
        className="flex items-center gap-5 w-full justify-center rounded-full p-3 text-center border cursor-pointer hover:bg-blue-50 bg-blue-100"
      >
        <FaGoogle className="text-lg text-red-700" />
        Google
      </button>
    </div>
  );
};

export default OAuth;
