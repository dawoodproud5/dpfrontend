// import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Router } from "next/router";
// import component 👇
import Drawer from "react-modern-drawer";
import { Spin as Hamburger } from 'hamburger-react';// hamburger 
import { RxCross2 } from "react-icons/rx";
// import { Sling as Hamburger } from 'hamburger-react'
//import styles 👇
import "react-modern-drawer/dist/index.css";
// assets
import { IoMdArrowDropdown } from "react-icons/io";
import { BsArrowRightShort } from "react-icons/bs";
import dynamic from 'next/dynamic';

import React, { useState } from "react";


const navItems = [
  {
    id: 1,
    Name: "Home",
    Route: "/",
  },
  {
    id: 2,
    Name: "All Services",
    Route: "/services",
    hasDropdown: true,
    selected: true,

    dropdownItems: [
      {
        name: "YouTube Consultation",
        path: "/services/youtube-consultation"
      },
      {
        name: "YouTube SEO",
        path: "/services/youtube-seo"
      },
      {
        name: "YouTube Content Creation",
        path: "/services/youtube-video-production"
      },
      {
        name: "YouTube Keyword Research",
        path: "/services/youtube-keyword-research"
      },
      {
        name: "YouTube Niche",
        path: "/services/youtube-niche-with-low-competition"
      },
      {
        name: "YouTube Automation",
        path: "/services/youtube-automation"
      },
      {
        name: "YouTube Channel Optimization",
        path: "/services/youtube-channel-optimization"
      },
      // {
      //   name: "YouTube Promotion",
      //   path: "/services/youtube-promotion"
      // },
      // {
      //   name: "YouTube Advertising",
      //   path: "/services/youtube-promotion"
      // },
      // {
      //   name: "YouTube Monetization",
      //   path: "/services/youtube-monetization"
      // },

      // {
      //   name: "YouTube Channel Managment",
      //   path: "/services/youtube-channel-managment"
      // },


    ]
  },
  {
    id: 3,
    Name: "Portfolio",
    Route: "/portfolio",
  },
  {
    id: 4,
    Name: "Our Channels",
    Route: "/our-channels",
  },
  {
    id: 5,
    Name: "Team",
    Route: "/team",
  },

  {
    id: 6,
    Name: "Blog",
    Route: "/blog",


  },
  {
    id: 7,
    Name: "Contact Us",
    Route: "/contact-us",

  },
];


function Navbar({ bg_color, position }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={`w-full min-h-[3rem]  font-Inter font-semibold  fixed top-0 z-50 ${bg_color} bg-white`}>
      <div className="mx-w-[1200px] mx-auto min-h-full flex items-center text-[balck] justify-between lg:justify-around  ">
        {/* Logo here... */}
        <div className="relative w-12 h-14 ">
          <Link href={'/'} alt='home'> <Image src={"/Images/logo.png"} alt="" fill className="object-contain" /></Link>
        </div>

        {/* nav items here......... */}
        <div className="lg:flex  hidden justify-center items-center text-[16px] gap-6 relative z-50 mt-2 ">
          {navItems.map((item, index) => (
            <Link href={item.Route} key={index}>
              <div className="relative  main list-none flex justify-center items-center">
                <div key={index} className="cursor-pointer">{item.Name}</div>
                {(index === 1) && <IoMdArrowDropdown size={20} className="block" />}
                {item.hasDropdown && (

                  <div className="hidden absolute top-[24px] left-[0px] w-[233px] shadow-2xl rounded-md border-1 border-white/10 border-solid span_dropdown bg-gray-gradient item py-3">
                    {item.dropdownItems.map((service, index) => (
                      <Link href={`${service.path}`} className="list-none px-4  py-1 text-[14px] leading-5 inline-block text-white/90 font-normal glow_text  " key={index}>{service.name}</Link>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
          <Link href={"/consultation"} className="text-xs">
            <button className='flex flex-col justify-center items-center px-4 py-2 ml-2 rounded-xl text-sm font-bold text-white bg-[#0077cc] hover:bg-[#3b82f6] '>
              <div className="flex justify-center items-center">
                <p>Get Free Consultation</p>
              </div>

            </button>
          </Link>
        </div>


        {/* Hamburgur */}
        <div className="lg:hidden ">
          <div className="flex justify-center items-center">
            <div>
              <Link href={"/consultation"}  >
                <button className='text-sm font-medium  px-[12px] py-[10px]  rounded-xl text-white bg-[rgb(19,157,255)]'>
                  <p className="flex justify-center items-center gap-4">
                    Get Free Consultation
                  </p>
                </button>
              </Link>
            </div>
            <Hamburger
              toggled={isOpen} toggle={setIsOpen} color='#001b47' size={28}>
            </Hamburger>
          </div>


          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="left"
            className="drawer"
          >
            <div className="w-full flex flex-col text-white font-Inter gap-6 justify-center items-start bg-[#001b47]">
              {/* =========>top bar */}
              <div className="w-full flex justify-between items-center px-2 h-[100px] bg-gradient-to-b from-[#121521] to-[#121521]/0 ">
                <Link href={'/'} alt='home'>
                  <div className="relative w-10 h-10 ">
                    <Image src={"/Images/logo.png"} alt="" fill className="object-contain" />
                  </div>
                </Link>
                <RxCross2 onClick={toggleDrawer} size={30} />
              </div>
              {/* button for the order now in mobile view */}

              <div className="mx-auto">
                <Link href={"/consultation"}  >
                  <button className='text-base font-medium  px-8 py-3  mt-4 rounded-xl text-white bg-[rgb(19,157,255)]'>
                    <p className="flex justify-center items-center gap-4">
                      Get Free Consultation
                    </p>
                  </button>
                </Link>
              </div>

              {navItems.map((item, index) => (
                <Link href={item.Route} key={index} >
                  <div className="w-full flex flex-col justify-center items-center px-4 py-1 ">
                    <div className="w-full  flex justify-start items-start ">
                      <div key={index} className="cursor-pointer w-full flex justify-between items-center ">
                        <p>{item.Name}</p>
                        {(index === 1) && <IoMdArrowDropdown size={30} className="ml-6"/>}
                      </div>
                    </div>
                    {/* =====> sub items */}
                    <div className="w-full py-0">
                      {item.hasDropdown &&
                        <div className="w-full flex gap-1 flex-col justify-start items-start pl-8 mt-6 text-base font-normal ">
                          {item.dropdownItems.map((item, index) => {
                            return <Link key={index} href={`${item.path}`}>{item.name}</Link>
                          })}
                        </div>
                      }
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Drawer>
        </div>
      </div >

    </div >


  );

}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });

