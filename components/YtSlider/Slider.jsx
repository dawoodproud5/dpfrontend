import React from 'react'
import SliderItem from './SliderItem';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper";

const YtSlider = () => {


  const channels = [


    {
      "name": "WatchMojo",
      "subs": " 25M",
      "views": "16.201B",
      "para": (
        <p>
          {"\"DP\’s YouTube Services have been a game-changer for Watch Mojo! Thanks to your  "}
          <span className=" text-[#4baeff]">algorithm expertise,</span>
          {" because of which our channel has seen explosive growth.\""}
        </p>
      ),
      "url": "/Images/YouTubers/WatchMojo.jpg",
      "link": "Ashkan Karbasfrooshan",
      "navtoportfolio": "/portfolio##Ashkan_Karbasfrooshan"
    },
    {
      "name": "TechAlta",
      "subs": "657K",
      "views": "69M",
      "para": (
        <p>
          {"\"Your services have been a Godsend for TechAltar! With your help, my channel now has a "}
          <span className=" text-[#4baeff]">clear direction </span>
          and purpose, resulting in <span className=" text-[#4baeff]">increased engagement</span>   {"and growth.\""}
        </p>
      ),
      "url": "/Images/YouTubers/techAltar.jpg",
      "link": "Marton Barcza",
      "navtoportfolio": "/portfolio"
    },

    {
      "name": "Alux.com",
      "subs": "4.32M",
      "views": "549M",
      "para": (
        <p>
          {"\"Dawood provided a tailored "}
          <span className=" text-[#4baeff]">content strategy</span>
          {"  that helped me grow my brand. I highly recommend your services to anyone looking to improve their YouTube presence.\""}
        </p>
      ),
      "url": "/Images/YouTubers/alux.svg",
      "link": "Emil C. Anton",
      "navtoportfolio": "/portfolio#Emil_Anton"
    },

    {
      "name": "Auto Trader",
      "subs": "877K",
      "views": "243M",
      "para": (
        <p>
          {"\"Their strategic "}
          <span className=" text-[#4baeff]">Video Marketing Plan  </span>
          {"led to increased sales and brand recognition, by engaging car buyers and sellers across the UK.\""}
        </p>
      ),
      "url": "/Images/YouTubers/autotrader.jpg",
      "link": "Ian Plummer",
      "navtoportfolio": "/portfolio#Ian_Plummer"
    },
    {
      "name": "EmmyMade",
      "subs": "2.91M",
      "views": "567M",
      "para": (
        <p>
          {"\"Thanks to my amazing "}
          <span className=" text-[#4baeff]">YouTube Keywords Researcher, </span>
          I have discovered the  <span className=" text-[#4baeff]">perfect keywords  </span> to help my <span className=" text-[#4baeff]">food</span> {"content thrive in the USA.\""}
        </p>
      ),
      "url": "/Images/YouTubers/Emmymade.jpg",
      "link": "Emmeline Mayline",
      "navtoportfolio": "/portfolio#Emmeline_Mayline"
    },
    {
      "name": "ZHC Crafts",
      "subs": "5.49M ",
      "views": "933M",
      "para": (
        <p>
          {"\"Thanks to my incredible  "}
          <span className=" text-[#4baeff]">Content Ideas Guru </span>
          {" my art channel is now bursting with fresh and exciting video ideas that my subscribers love!. \""}
        </p>
      ),
      "url": "/Images/YouTubers/zhcnight.jpg",
      "link": "Zach Hsieh",
      "navtoportfolio": "/portfolio#Zach_Hsieh"
    },
    {
      "name": "Linus Tech Tips",
      "subs": "15.4M",
      "views": "6.877B",
      "para": (
        <p>
          {"\"Most of my videos are now dominating Google &  "}
          <span className=" text-[#4baeff]">YouTube Search Results  </span> only because of thanks to my beloved  <span className=" text-[#4baeff]">YouTube SEO  </span>
          {" YouTube SEO\""}
        </p>
      ),
      "url": "/Images/YouTubers/LinusTechTipsFace.webp",
      "link": "Linus Sebastian",
      "navtoportfolio": "/portfolio#Linus_Sebastian"
    }
  ]

  return (
    <div className="w-full pb-36 pt-16">
      <div className=" flex flex-col items-center justify-center gap-4 bg_slider relative w-full ">
        <h2 className='text-[#001b47] font-Inter text-shadow-light text-[18px] tracking-[.18em] font-bold mt-3 md:pt-6 px-10 text-center'>TRUSTED BY LEADING CREATORS</h2>
        <div className='w-full h-full flex justify-center items-center  max-w-[1800px]'>
          <Swiper
            speed={2000}
            autoplay={{
              delay: 1500,
              disableOnInteraction: true,
            }}
            disabled={true}
            autoPlay={true}
            // loop={true}
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={25}

            breakpoints={{
              480: {

                slidesPerView: 1,
                spaceBetween: 20,

              },
              680: {

                slidesPerView: 2,
                spaceBetween: 25,

              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1200: {
                slidesPerView: 3.5,
                spaceBetween: 25,
              },

            }}




            className="mySwiper"
          >
            {channels.map((item, index) => (
              <SwiperSlide key={index}><SliderItem url={item.url} name={item.name} para={item.para} subs={item.subs} views={item.views} link={item.link} navtoportfolio={item.navtoportfolio} /></SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div >
    </div>
  )
}

export default YtSlider;