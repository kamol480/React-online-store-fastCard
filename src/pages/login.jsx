import { Input } from "@/components/ui/input";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function Login(user) {
    try {
      const { data } = await axios.post(
        "https://store-api.softclub.tj/Account/login",
        user
      );
      localStorage.setItem("token", data.data);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    Login({ userName, password });
  };

  return (
    <>
      <div className="flex min-h-screen items-center  justify-center bg-white">
        <div className="w-full max-w-sm ">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-semibold text-gray-900">
              Log in to Exclusive
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Enter your details below
            </p>
          </div>

          <form onSubmit={(e)=>handleSubmitLogin(e)} action="">
            <div className="flex flex-col gap-3">
              <Input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Username"
                className="w-full"
              />
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                className="w-full"
              />

              <button className="mt-2 h-12 w-full  text-[#DB4444] rounded-md text-sm font-medium cursor-pointer  transition-colors">
                Forget Password?
              </button>
              <button
                type="submit"
                className="mt-2 h-12 w-full bg-[#DB4444] text-white rounded-md text-sm font-medium cursor-pointer  transition-colors"
              >
                Log in
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Already have account?{" "}
            <Link
              to="/login"
              className="text-black underline hover:no-underline"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
