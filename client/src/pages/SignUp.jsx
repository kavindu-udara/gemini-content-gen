import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
// import axios from "axios";
import apiClient  from "../axios/axios";
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

    // toast("🦄 Wow so easy!", {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    // });
    // toast.error("🦄 Wow so easy!", {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    // });
  };

  return (
    <div className="h-screen flex items-center justify-center">
      {/* Same as */}
      {/* <ToastContainer /> */}
      {
        <form
          onSubmit={handleSubmit}
          className="flex max-w-md flex-col gap-4 shadow-lg p-5 border rounded-lg w-[500px]"
        >
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
            <div className="mb-2 block">
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
          <div>
            <div className="mb-2 block">
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
          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree" className="flex">
              I agree with the&nbsp;
              <a
                href="#"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                terms and conditions
              </a>
            </Label>
          </div>
          <button className="bg-fuchsia-700 hover:bg-fuchsia-800 text-white rounded-lg p-2">
            Register
          </button>
          <div className="text-center">or register with</div>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex items-center gap-5 justify-center rounded-lg p-2 text-center border cursor-pointer hover:bg-fuchsia-50">
              <FaGoogle className="text-lg text-red-700" />
              Google
            </div>
            <div className="rounded-lg p-2 text-center border cursor-pointer hover:bg-fuchsia-50">
              Google
            </div>
          </div>
        </form>
      }
    </div>
  );
};

export default SignUp;
