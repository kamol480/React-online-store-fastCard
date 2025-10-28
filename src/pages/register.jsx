import React from "react";
import { Input } from "@/components/ui/input";
import logo from "../assets/Icon-Google.svg";
import { Link, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { register as registerThunk } from "../reducers/reducer";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const target = event.target;
    const regObj = {
      userName: target["inpName"].value,
      phoneNumber: "target['inpPhone'].value",
      email: target["inpEmail"].value,
      password: target["inpPassword"].value,
      confirmPassword: target["inpPassword"].value,
    };

    dispatch(registerThunk(regObj)).then(() => navigate("/login"));
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-full max-w-sm">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-900">
            Create an account
          </h1>
          <p className="mt-1 text-sm text-gray-600">Enter your details below</p>
        </div>

        <form onSubmit={(e)=>handleSubmit(e)}>
          <div className="flex flex-col gap-3">
            <Input name="inpName" placeholder="Name" className="w-full" />
            <Input
              name="inpEmail"
              type="email"
              placeholder="Email"
              className="w-full"
            />
            <Input
              name="inpPhone"
              type="phone"
              placeholder="Phone number"
              className="w-full"
            />
            <Input
              name="inpPassword"
              placeholder="Password"
              type="password"
              className="w-full"
            />

            <button
              type="submit"
              className="mt-2 h-12 w-full bg-[#DB4444] text-white rounded-md text-sm font-medium cursor-pointer  transition-colors"
            >
              Create Account
            </button>
            <div className="flex  items-center ">
              <img className="ml-[70px] absolute mt-[10px]" src={logo} alt="" />
              <button className="mt-2 h-12 w-full border text-black items-center rounded-md text-sm font-medium">
                Sign up with Google
              </button>
            </div>
          </div>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Already have account?{" "}
          <Link to="/login" className="text-black underline hover:no-underline">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
