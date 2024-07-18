import React, { useEffect, useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { toast } from "react-toastify";
import apiClient from "../axios/axios";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { NavLink, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

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

    if (email && password) {
      const isValidEmail = /\S+@\S+\.\S+/.test(email);
      if (!isValidEmail) {
        dispatch(signInFailure("Invalid email address"));
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
                console.log(res.data.user);
                dispatch(signInSuccess(res.data));
                navigate("/dashboard/content");
                return;
              }
              // console.log(res);
              dispatch(signInFailure(res.data.message));
            })
            .catch((err) => {
              dispatch(signInFailure(err.message));
            });
        };
        login();
      }
    }
  };

  return (
    <div className="h-screen flex items-center justify-center flex-col">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex max-w-md flex-col gap-4 p-3 border rounded-xl w-[500px]"
        >
          <div className="bg-blue-100 rounded-xl p-5">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email2" value="Your email" />
              </div>
              <TextInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email2"
                type="email"
                placeholder=""
                required
                shadow
                name="email"
              />
            </div>
            <div>
              <div className="my-2 block">
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
            <div className="mt-3 flex items-center gap-2">
              <Checkbox id="agree" />
              <Label htmlFor="agree" className="flex">
                Remember me&nbsp;
              </Label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-black rounded-full text-white p-3 disabled:bg-gray-900 disabled:text-gray-300 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Loading..." : "Sign in"}
          </button>
          <div className="text-center">or signin with</div>
          <OAuth />
        </form>
        <div className="text-center mt-5">Don't have an account? <NavLink to={"/signup"} className={"text-blue-500"}>Sign up</NavLink></div>
    </div>
  );
};

export default SignIn;
