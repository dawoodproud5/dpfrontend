import Link from "next/link";
import React, { useEffect, useState } from "react";
import FcGoogle from "react-icons/fc";
import { useSession, signIn, signOut } from "next-auth/react";
import { SessionProvider } from "next-auth/react";
import axios from "axios";
import { toast } from "react-toastify";
import url from "../Assets/Api";
import { useRouter } from "next/router";
import Loader from "../Loader/Loader";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPaswordfield, setShowPasswordfield] = useState(false);
  const [open, setOpen] = useState(false);
  const [message] = useState("Please Wait ...");

  const router = useRouter();
  const session = useSession();

  const token =
    typeof localStorage !== "undefined" ? localStorage.getItem("token") : null;

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPaswordfield = () => {
    setShowPasswordfield(true);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSignUpWithEmail = async (e) => {
    e.preventDefault();
    setOpen(true);

    const obj = {
      email: email,
      password: password,
    };

    await axios
      .post(`${url}/api/register/with/email`, obj)
      .then((res) => {
        setOpen(false);
        localStorage.setItem("token", res.data.token);
        toast.success("Sign Up Successful");
        blankInput();
        router.push("/");
      })
      .catch((err) => {
        setOpen(false);
        toast.error("Something went wrong, try again ...");
      });
  };

  const handleSignOut = async () => {
    setOpen(true);
    localStorage.removeItem("token");
    await signOut();
    toast.info("SignOut Successful");
    setOpen(false);
    router.push("/");
  };

  const blankInput = () => {
    setEmail("");
    setPassword("");
  };

  if (session?.data?.authenticated || token) {
    return (
      <>
        <Loader open={open} message={message} />
        <div className="flex flex-col items-center max-w-[100%] xl:max-w-[100%] space-y-1 sm:space-y-2 mt-8 xl:mt-20 font-Factor_A">
          {/* signup button  */}
          <button className="px-12 rounded-full border-2 border-[#3b82f6]/90 bg-blue/10 hover:bg-white hover:text-blue text-white font-normal cursor-pointer mb-4 w-full h-[50px]">
            <div className="flex justify-center items-center gap-3 h-[50px]">
              <div className="w-6 h-6">
                <svg viewBox="0 0 18 18" class="css-0">
                  <g fill="#000" fill-rule="evenodd">
                    <path
                      d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z"
                      fill="#EA4335"
                    ></path>
                    <path
                      d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"
                      fill="#4285F4"
                    ></path>
                    <path
                      d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z"
                      fill="#FBBC05"
                    ></path>
                    <path
                      d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z"
                      fill="#34A853"
                    ></path>
                    <path fill="none" d="M0 0h18v18H0z"></path>
                  </g>
                </svg>
              </div>
              <p className=" text-[12px] sm:text-base font-medium font-Inter">
                Sign Up with Your Google account
              </p>
            </div>
          </button>

          <p className="text-white font-medium text-lg">OR</p>

          {/* email input field  */}
          <label className="flex flex-col items-start !mb-4 w-[100%]">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              onClick={handleShowPaswordfield}
              placeholder="Enter Your Email"
              className="p-1 !rounded-full !border-2 !border-[#3b82f6]/90 bg-blue/30  !text-white font-normal cursor-pointer  w-full h-[50px] text-center"
            />
          </label>
          {showPaswordfield && (
            <label className="flex flex-col items-start  w-[100%] text-center !mb-4">
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter Your Password"
                className="p-1 !rounded-full !border-2 !border-[#3b82f6]/90 bg-blue/30 text-white font-normal cursor-pointer  w-full h-[50px] text-center"
              />
            </label>
          )}

          {/* sign up button  */}
          <button
            type="submit"
            onClick={handleSignOut}
            className="p-2 !rounded-full border-2   text-white font-bold cursor-pointer w-full h-[50px]"
          >
            Sign Out
          </button>
          <div className="text-white font-Inter text-[14px] text-center">
            <p>By signing up, I agree to DawoodProud&apos;s</p>
            <p>
              <span className="underline">
                {" "}
                <Link href={"/legal-info"}>Terms of Service</Link>
              </span>{" "}
              and{" "}
              <span className="underline">
                <Link href={"/legal-info"}>Privacy Policy</Link>
              </span>
            </p>
          </div>
        </div>
      </>
    );
  } else
    return (
      <>
        <Loader open={open} message={message} />
        <div className="flex flex-col items-center max-w-[100%] xl:max-w-[100%] space-y-1 sm:space-y-2 mt-8 xl:mt-20 font-Factor_A">
          <button
            onClick={() => signIn()}
            className="px-12 rounded-full border-2 border-[#3b82f6]/90 bg-blue/10 hover:bg-white hover:text-blue text-white font-normal cursor-pointer mb-4 w-full h-[50px]"
          >
            <div className="flex justify-center items-center gap-3 h-[50px]">
              <div className="w-6 h-6">
                <svg viewBox="0 0 18 18" class="css-0">
                  <g fill="#000" fill-rule="evenodd">
                    <path
                      d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z"
                      fill="#EA4335"
                    ></path>
                    <path
                      d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"
                      fill="#4285F4"
                    ></path>
                    <path
                      d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z"
                      fill="#FBBC05"
                    ></path>
                    <path
                      d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z"
                      fill="#34A853"
                    ></path>
                    <path fill="none" d="M0 0h18v18H0z"></path>
                  </g>
                </svg>
              </div>
              <p className=" text-[12px] sm:text-base font-medium font-Inter">
                Sign Up with Your Google account
              </p>
            </div>
          </button>

          <p className="text-white font-medium text-lg">OR</p>

          {/* email input field  */}
          <label className="flex flex-col items-start !mb-4 w-[100%]">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              onClick={handleShowPaswordfield}
              placeholder="Enter Your Email"
              className="p-1 !rounded-full !border-2 !border-[#3b82f6]/90 bg-blue/30  !text-white font-normal cursor-pointer  w-full h-[50px] text-center"
            />
          </label>
          {showPaswordfield && (
            <label className="flex flex-col items-start  w-[100%] text-center !mb-4">
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter Your Password"
                className="p-1 !rounded-full !border-2 !border-[#3b82f6]/90 bg-blue/30 text-white font-normal cursor-pointer  w-full h-[50px] text-center"
              />
            </label>
          )}

          {/* sign up button  */}
          <button
            //   type="submit"
            onClick={handleSignUpWithEmail}
            className="p-2 !rounded-full border-2   text-white font-bold cursor-pointer w-full h-[50px]"
          >
            Sign Up
          </button>
          <div className="text-white font-Inter text-[14px] text-center">
            <p>By signing up, I agree to DawoodProud&apos;s</p>
            <p>
              <span className="underline">
                {" "}
                <Link href={"/legal-info"}>Terms of Service</Link>
              </span>{" "}
              and{" "}
              <span className="underline">
                <Link href={"/legal-info"}>Privacy Policy</Link>
              </span>
            </p>
          </div>
        </div>
      </>
    );
};

export default SignupForm;
