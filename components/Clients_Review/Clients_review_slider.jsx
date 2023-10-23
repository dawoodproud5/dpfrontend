import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SliderItem from "./Clients_review_item";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Autoplay, Pagination } from "swiper";

const clients = [
  {
    img: "/Images/ReviewSliderImg/Tim Schofield Client.jpg",
    name: "Tim Schofield",
    role: "Youtube Creater",
    subs: "857K",
    views: "239M",
    review: (
      <p>
        {" "}
        &quot;If you&#39;re looking for fresh and exciting YouTube content
        ideas, I highly recommend checking out this service.As a YouTuber with 3
        millions+ subscribers, I know how challenging it can be to come up with
        new and engaging content that keeps your audience interested.But this
        service has been a lifesaver for me, providing me with tailored content
        ideas that resonate with my niche and target audience. I&#39;ve seen a
        significant growth in my channel&#39;s engagement and viewership since I
        started using their service, and I&#39;m excited to see where it takes
        me in the future. So if you&#39;re ready to take your YouTube game to
        the next level, definitely give this service a try!&quot;{" "}
      </p>
    ),
  },
  {
    img: "/Images/ReviewSliderImg/Client Andrew Huberman.jpg",
    name: "Andrew Huberman",
    role: "Youtube Creater",
    subs: "4.04M",
    views: "175M",
    review: (
      <p>
        {" "}
        Growing a YouTube channel can be a real challenge, and sometimes you
        just need a little help to get you on the right track. That&#39;s where
        Dawood comes in. He provided me with a comprehensive YouTube content
        strategy that really helped me to grow my channel and reach a wider
        audience. His insights and recommendations were incredibly valuable, and
        I can honestly say that I wouldn&#39;t be where I am today without their
        help. Dawood is an absolute pro when it comes to YouTube content
        strategy, and I can guarantee that you won&#39;t be disappointed with
        the results. Thanks again Dawood, you&#39;re the best!
      </p>
    ),
  },
  {
    img: "/Images/ReviewSliderImg/Client James Charles.jpg",
    name: "James Charles",
    role: "Youtube Creater",
    subs: "23.9M",
    views: "4.10B",
    review: (
      <p>
        {" "}
        I&#39;ve been working with Dawood Proud Agency for a few months now, and
        I can honestly say that they have helped me grow my channel in ways I
        never thought possible. Their team really knows their stuff when it
        comes to optimizing videos for search results, and they were able to get
        my videos ranking higher than ever before. Not only that, but they also
        provided me with invaluable advice and strategies for creating content
        that resonates with my audience. Overall, I can&#39;t recommend Dawood
        Proud Agency enough for anyone looking to take their YouTube channel to
        the next level. Thanks to their expertise and guidance, I&#39;ve been
        able to reach new viewers and build a community of dedicated fans. If
        you&#39;re serious about growing your channel, definitely check them
        out!
      </p>
    ),
  },
  {
    img: "/Images/ReviewSliderImg/Chiropractor Client - Dr. Brent Binder.jpg",
    name: "Dr. Brent Binder",
    role: "Youtube Creater",
    subs: " 663K",
    views: "221M",
    review: (
      <p>
        {" "}
        As a YouTuber, finding the right niche can be a daunting task, but
        Dawood and his team made it incredibly easy for me. Their YouTube Niche
        Selection Services helped me find a low competition and high volume
        niche that was perfect for my channel. Not only did they help me with
        niche selection, but they also assisted me in creating my channel. They
        provided me with valuable insights and guidance that allowed me to make
        informed decisions about my channel&#39;s content and branding. Thanks
        to Dawood and his team, my channel has seen tremendous growth, and I
        couldn&#39;t be happier with the results.
      </p>
    ),
  },
  {
    img: "/Images/ReviewSliderImg/Client Rashida Food YouTube.jpg",
    name: "Rashida Hussain",
    role: "Youtube Creater",
    subs: "1.53M",
    views: "838M",
    review: (
      <p>
        {" "}
        Hey guys, it&#39;s your favorite foodie YouTuber and today I wanted to
        share feedback with you all how Dawood Proud Agency has helped me take
        my channel to the next level! Not only did they guide me on how to
        create delicious Pakistani and Indian cuisine videos, but they also
        encouraged me to branch out and showcase the flavors of Arabic, Turkish
        and English cooking. Their expert advice on sharing the best tricks and
        hacks of cooking has not only made my videos more engaging but has also
        helped me grow my channel exponentially. Thanks to Dawood Proud Agency,
        I was able to quit my 9 to 5 job and pursue my passion full-time. If
        you&#39;re a foodie looking to take your YouTube channel to new heights,
        then I highly recommend working with the amazing team at Dawood Proud
        Agency!
      </p>
    ),
  },
  {
    img: "/Images/ReviewSliderImg/Gaming Niche Client - Shroud.jpg",
    name: "Shroud",
    role: "Youtube Creater",
    subs: "6.79M",
    views: "1.06B",
    review: (
      <p>
        {" "}
        As a gaming enthusiast, I was really interested in creating Minecraft
        related content and tutorials, but I had no idea where to start.
        That&#39;s when I stumbled upon DP Agency, and they provided me with
        invaluable guidance and support every step of the way. Their expertise
        in the gaming industry and understanding of YouTube&#39;s algorithm
        really helped me grow my channel and reach a wider audience. Thanks to
        DP Agency, I&#39;m well on my way to becoming a successful YouTuber and
        I couldn&#39;t be happier with the results. If you&#39;re thinking about
        starting a YouTube channel or just need some guidance on how to grow
        your existing one, I highly recommend DP Agency. Thanks again for
        everything, guys!
      </p>
    ),
  },
];

export default function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center max-w-[1920px] w-full mx-auto">
        <h2 className="py-16 max-w-[800px] font-bold text-[36px] md:text-[40px] text-center">
          Endorsed by some of YouTube&apos;s Most Esteemed Content Creators
        </h2>

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
          // loopPreventsSliding={true}
          // loopedSlides={true}
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            680: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {clients.map((item, index) => (
            <SwiperSlide key={index}>
              {" "}
              <SliderItem
                name={item.name}
                img={item.img}
                role={item.role}
                review={item.review}
                subs={item.subs}
                views={item.views}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
