import React, { useEffect, useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import apiClient from "../axios/axios";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const SignIn = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState((state) => state.user);
  const { loading, error } = useSelector((state) => state.user);

  

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  

  const handleSubmit = (e) => {
    e.preventDefault();

    // toast.error("Please enter email and password");
    if (email && password) {
      const isValidEmail = /\S+@\S+\.\S+/.test(email);
      if (!isValidEmail) {
        dispatch(signInFailure("Invalid email address"));
        // toast.error("Invalid email address");
      } else {
        const login = async () => {
          dispatch(signInStart());
          apiClient
            .post("/auth/signin", {
              email,
              password,
            })
            .then((res) => {
              if (res.data.success) {
                dispatch(signInSuccess(res.data));
                navigate("/dashboard/content");
                // toast.success(res.data.message);
                return;
              }
              dispatch(signInFailure(res.data.message));
              // toast.error(res.data.message);
              // console.log(res);
            })
            .catch((err) => {
              dispatch(signInFailure(err.message));
              // console.log(err);
            });
        };
        login();
      }

      // toast.success("Login successful");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      {
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex max-w-md flex-col gap-4 shadow-lg p-5 border rounded-lg w-[500px]"
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your email" />
            </div>
            <TextInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email2"
              type="email"
              placeholder="name@flowbite.com"
              required
              shadow
              name="email"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your password" />
            </div>
            <TextInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password2"
              type="password"
              required
              shadow
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree" className="flex">
              Remember me&nbsp;
            </Label>
          </div>
          <button
            type="submit"
            className="bg-fuchsia-700 hover:bg-fuchsia-800 text-white rounded-lg p-3 disabled:bg-fuchsia-500"
            disabled={loading}
          >
            {loading ? "Loading..." : "Sign in"}
          </button>
          <div className="text-center">or</div>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex items-center gap-5 justify-center rounded-lg p-3 text-center border cursor-pointer hover:bg-fuchsia-50">
              <FaGoogle className="text-lg text-red-700" />
              Google
            </div>
            <div className="rounded-lg p-3 text-center border cursor-pointer hover:bg-fuchsia-50">
              Google
            </div>
          </div>
        </form>
      }
    </div>
  );
};

export default SignIn;
