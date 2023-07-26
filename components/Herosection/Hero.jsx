import React from "react";
import Navbar from "../common/Navbar";
import Image from "next/image";
import { height } from "@mui/system";
import { AiFillStar } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc"
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import SignUp from "./SignUp"
import { SessionProvider, useSession } from "next-auth/react";
function Hero() {
    
return (

        <div className="w-full min-h-screen flex flex-col items-center justify-center font-Inter mx-auto bg-[#001b47]">
            <div className="w-full bg-white ">
                <Navbar bg_color={"bg-white"} position={"absolute"} />
            </div>
            {/* bg-gradient-to-b from-[#121521] to-[#121521]/0        */}

            {/* hero section text and images div */}
            <div className="grid grid-cols-1  xl:grid-cols-12  justify-center items-center mx-auto max-w-[1220px]  w-full pt-20 md:pt-16  xl:mt-6">
                <div className="h-full w-full  text-white text-center flex flex-col  items-center justify-center  xl:col-start-1 xl:col-span-5">
                    {/* hero section text */}
                    <div className=" flex flex-col justify-center items-center xl:justify-start xl:items-start mx-auto  p-0 sm:p-4 md:p-6 gap-4">
                        <div className="flex flex-col justify-center xl:justify-start items-center xl:items-start  xl:-space-y-3 ">
                            <h1 className=" font-extrabold text-[32px] sm:text-[36px] md:text-[50px] lg:text-[60px] ">Dawood Proud</h1>
                            <h1 className=" font-extrabold text-[28px] sm:text-[28px] md:text-[32px] lg:text-[40px] text-[#01b88d]"> Stand Out from Crowd</h1>
                        </div>
                        <div className="text-center xl:text-left font-medium md:font-semibold px-4 sm:px-0 lg:font-medium sm:text-[16px] md:text-[16px] lg:text-[20px] text-[white]/80 ">
                            <p> Ultimate Destination for all <strong> YouTube Growth Services</strong> to take your channel to new heights.</p>
                            {/* <p>All the successful YouTubers have one thing in common  <strong> {"\"They have Winnig Content Strategy.\""}</strong>  </p> */}
                        </div>
                        <div>
                            <Link href={"/consultation"} className="text-sm ">
                                <button className='flex justify-center items-center px-4 py-2  rounded-2xl  font-bold text-white button mt-3 '>
                                    Let&#39;s Start
                                    <BsArrowRightShort size={25} />
                                </button>
                            </Link>
                        </div>
                    </div>

                   
                </div>

                {/* hero sign up starts here */}
                <div className=" xl:col-start-8 xl:col-span-7 mx-auto w-full flex flex-col items-center">
                   
                        <SignUp />
                    
                </div>
            </div>

            {/* last section of the herosection */}
            <div className="grid grid-cols-1 xl:grid-cols-12 justify-center items-center bg-blue/5 w-full h-full mb-8 xl:mb-12 max-w-[1200px]">
                <div className="relative h-[280px] w-[90%] md:w-[100%] lg:w-[100%] xl:w-[110%] mx-auto xl:col-start-1 xl:col-span-5">
                    <Image src="/Images/herosection/Landing Page Image 01.png" fill alt="heroImage" className="object-contain" />
                </div>
                <div className="grid grid-cols-1 justify-center items-center gap-4 md:gap-2 py-8 xl:col-start-8 xl:col-span-7">
                    <div className="flex flex-col justify-start items-center">
                        <p className="text-white font-bold font-Inter tracking-widest text-[18px] sm:text-[20px]">
                            PUSH YOUR CHANNEL TO THE
                        </p>
                        <div className="relative h-[100px] w-[250px] xl:-ml-24">
                            <Image src="/Images/herosection/heroImage2.svg" fill alt="heroImage2" className="object-contain" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center max-w-sm mx-auto">
                        <p className="text-left font-Inter  xl:text-[18px] text-white">
                            Discover how to <span className="hero_bg ">grow your YouTube <br /> channel</span>  with our professional coaches.
                        </p>
                    </div>
                    <div className="flex flex-col xs:flex-row justify-center items-center gap-4 xs:gap-8">
                        <div>
                            <Link href={"/consultation"} className="text-xs xl:text-xm">
                                <button className='border border-solid border-[#f0f0f0] px-4 py-2 ml-2 rounded-2xl  font-bold text-white  bg-blue/40  hover:bg-white hover:text-blue'>
                                    Get Free Consultation
                                </button>
                            </Link>
                        </div>
                        <div>
                            <Link href={"/services"} className="text-xs xl:text-xm ">
                                <button className=' px-4 py-2 ml-2 rounded-2xl  font-bold text-white  bg-blue/40  hover:bg-white hover:text-blue'>
                                    <div className="flex justify-center items-center gap-2">
                                        <p>See all Services</p>
                                        <svg fill="none" viewBox="0 0 20 21" width="20" className="css-orecyf"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.166 10.5h11.667M10 4.667l5.833 5.833L10 16.334"></path></svg>
                                    </div>

                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;

