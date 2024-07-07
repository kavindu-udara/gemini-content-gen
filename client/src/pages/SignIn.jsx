import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import apiClient from "../axios/axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // toast.error("Please enter email and password");
    if (email && password) {
      const isValidEmail = /\S+@\S+\.\S+/.test(email);
      if (!isValidEmail) {
        toast.error("Invalid email address");
      } else {
        const login = async () => {
          apiClient
            .post("/auth/signin", {
              email,
              password,
            })
            .then((res) => {
              res.data.success
                ? toast.success(res.data.message)
                : toast.error(res.data.message);
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
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
          onSubmit={handleSubmit}
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
            className="bg-fuchsia-700 hover:bg-fuchsia-800 text-white rounded-lg p-3"
          >
            Sign in
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
