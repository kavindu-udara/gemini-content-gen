import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
// import axios from "axios";
import apiClient  from "../axios/axios";
import OAuth from "../components/OAuth";
import { NavLink, useNavigate } from "react-router-dom";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRetype, setPasswordRetype] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const register = async () => {
      apiClient.post('/auth/signup', {
        username,
        email,
        password
      }).then((res) => {
        res.data.success ? toast.success(res.data.message) : toast.error(res.data.message);
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
    }

    password === passwordRetype ? register() : toast.error("Password does not match");
  };

  return (
    <div className="h-screen flex items-center flex-col justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex max-w-md flex-col gap-4 p-3 border rounded-xl w-[500px]"
        >
          <div className="bg-blue-100 p-5 rounded-xl">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username" value="Your username" />
            </div>
            <TextInput
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              type="username"
              placeholder="username"
              required
              shadow
            />
          </div>
          <div>
            <div className="my-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              placeholder="name@flowbite.com"
              required
              shadow
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
          <div>
            <div className="my-2 block">
              <Label htmlFor="repeat-password" value="Repeat password" />
            </div>
            <TextInput
              value={passwordRetype}
              onChange={(e) => setPasswordRetype(e.target.value)}
              id="repeat-password"
              type="password"
              required
              shadow
            />
          </div>
          </div>
          <button className="bg-black  text-white rounded-full p-2">
            Register
          </button>
          <div className="text-center">or register with</div>
          <OAuth/>
        </form>
        <div className="text-center mt-5">Already have an account? <NavLink to={"/signin"} className={"text-blue-500"}>Sign in</NavLink></div>
    </div>
  );
};

export default SignUp;
