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
import { useNavigate } from "react-router-dom";
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
          <OAuth/>
        </form>
      }
    </div>
  );
};

export default SignIn;
