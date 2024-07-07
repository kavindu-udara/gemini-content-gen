import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { FaGoogle } from "react-icons/fa";

const SignIn = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      {
        <form className="flex max-w-md flex-col gap-4 shadow-lg p-5 border rounded-lg w-[500px]">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your email" />
            </div>
            <TextInput
              id="email2"
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
            <TextInput id="password2" type="password" required shadow />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree" className="flex">
              Remember me&nbsp;
            </Label>
          </div>
          <button className="bg-fuchsia-700 hover:bg-fuchsia-800 text-white rounded-lg p-3">
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
