import React from "react";
import Navbar from "../common/Navbar";
import Image from "next/image";

import heroImg from "../../public//Images/herosection/Landing_page_Image.png"
import heroImage2 from "../../public//Images/herosection/heroImage2.svg"
import { height } from "@mui/system";
import { AiFillStar } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import SignUp from "./SignUp";
import { SessionProvider, useSession } from "next-auth/react";
function Hero() {
  return (
    <div className="w-full flex flex-col justify-center items-center font-Inter mx-auto bg-[#001b47]">
      <div className="w-full bg-white ">
        <Navbar bg_color={"bg-white"} position={"absolute"} />
      </div>

      {/* hero section text and images div */}
      <div className="w-full max-w-[1200px] flex flex-col justify-center items-center py-6  ">
        <div className="grid grid-cols-1  xl:grid-cols-12  justify-center items-center mx-auto max-w-[1200px]  w-full mt-20 xl:mt-12 md:py-16 xl:py-8 ">
          <div className="  w-full  text-white text-center flex flex-col  items-center justify-center  xl:col-start-1 xl:col-span-5">
            {/* hero section text */}
            <div className=" flex flex-col justify-start items-start mx-auto px-5">
              <div className="flex flex-col justify-start items-start  xl:-space-y-3 ">
                <h1 className=" font-extrabold text-[36px] sm:text-[36px] md:text-[50px] lg:text-[62px] ">
                  Dawood Proud
                </h1>
                <h1 className=" font-extrabold text-[28px] sm:text-[28px] md:text-[32px] lg:text-[40px] text-[#007aff]">
                  {" "}
                  Stand Out from Crowd
                </h1>
              </div>
              <div className=" text-left font-medium md:font-semibold  sm:px-0 lg:font-medium sm:text-[16px] md:text-[16px] lg:text-[20px] text-[white]/80 ">
                <p>
                  {" "}
                  Ultimate Destination for all YouTube Growth Services to take
                  your channel to new heights.
                </p>
              </div>
              {/* <div>
                <Link href={"/consultation"} className="text-sm ">
                  <button className="flex justify-center items-center px-4 py-2  rounded-2xl  font-bold text-white button mt-3 ">
                    Let&#39;s Start
                    <BsArrowRightShort size={25} />
                  </button>
                </Link>
              </div> */}
            </div>
          </div>
          {/* hero sign up starts here */}
          <div className=" xl:col-start-8 xl:col-span-7 mx-auto w-full flex flex-col items-center">
            <SignUp />
          </div>
        </div>

        {/* last section of the herosection */}
        <div className="grid grid-cols-1 xl:grid-cols-12 justify-center items-center bg-blue/5 w-full   mb-8 xl:mb-12 max-w-[1200px]">
          <div className="relative h-[300px]   sm:h-[280px] w-[90%] md:w-[100%] lg:w-[100%] xl:w-[110%] mx-auto xl:col-start-1 xl:col-span-5 mb-10">
            <Image
              src={heroImg}
              fill
              alt="heroImage"
              className="object-contain"
            />
          </div>
          <div className="grid grid-cols-1 justify-center items-center space-y-2 mt-16 xl:col-start-8 xl:col-span-7">
            <div className="flex flex-col justify-start items-center ">
              <p className="text-white font-bold font-Inter tracking-widest text-[18px] sm:text-[20px]">
                PUSH YOUR CHANNEL TO THE
              </p>
              <div className="relative h-[100px] w-[250px] xl:-ml-24">
                <Image
                  src={heroImage2}
                  fill
                  alt="heroImage2"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex justify-center items-center max-w-sm mx-auto">
              <p className="text-center xl:text-left font-Inter text-[16px] xl:text-[18px] text-white px-6">
                Get Free{" "}
                <span className="hero_bg">
                  {" "}
                  Content Strategy & Winning YouTube Services
                </span>{" "}
                with our YouTube Experts.
              </p>
            </div>
            <div className="flex flex-col xs:flex-row xs:justify-center xs:items-center py-4 xs:py-8 space-x-2 mx-auto">
              <div className="mb-6 xs:mb-0">
                <Link href={"/consultation"} className="text-xs xl:text-xm">
                  <button className="border border-solid border-[#f0f0f0] px-[12px] py-[10px]  rounded-2xl  font-bold text-white  bg-blue/40  hover:bg-white hover:text-blue">
                    Get Free Consultation
                  </button>
                </Link>
              </div>
              <div>
                <Link href={"/services"} className="text-xs xl:text-xm ">
                  <button className="border border-solid border-[#f0f0f0] px-4 py-2  rounded-2xl  font-bold text-white  bg-blue/40  hover:bg-white hover:text-blue">
                    <div className="flex justify-center items-center gap-1">
                      <p>See all Services</p>
                      <svg
                        fill="none"
                        viewBox="0 0 20 21"
                        width="20"
                        class="css-orecyf"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4.166 10.5h11.667M10 4.667l5.833 5.833L10 16.334"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
