import { useState } from "react";
import UserInput from "../../../components/ConsultationForm/UserInput";
import Navbar from "../../../components/common/Navbar";
import Image from "next/image";
import Head from "next/head";
function cutomerpage() {
  return (
    <>
     <Head>
        <title>YouTube Consultation</title>
        <meta
          name="description"
          content="Contact us today to explore our services, request a free consultation, and get your YouTube Channel on the road to success. "
        />
     
      </Head>
      <div className="grid grid-cols-1 w-full min-h-screen font-Inter text-white bg-white h-full">
        <div className="w-full bg-white text-[black]">
          <Navbar bg_color={"white"} />
        </div>

        <div className="grid grid-cols-2  md:grid-cols-12  justify-center items-center mx-auto max-w-full  w-full min-h-[400px]  bg-[#001b47]">
          <div className=" text-white md:col-start-3 md:col-span-5 mx-auto">
            <h1 className="text-[28px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-bold xl:leading-[60px] font-Factor_A max-w-2xl ">
              <span className="text-[#007aff]"> We Think big, </span>
              <br />
              start small,
              <br />
              and move fast
            </h1>
          </div>
          <div className="w-[100%] h-[110px] md:h-[200px] lg:h-[250px] relative md:col-start-8 md:col-span-2 ">
            <Image
              src="/Images/ServicesheroSVGs/YouTube Consultation New.png"
              fill
              alt="YouTube Consultation"
              className="object-contain"
            ></Image>
          </div>
        </div>
        <div className="text-[black] min-h-screen mx-auto mt-16 max-w-[1172px] w-full">
          <UserInput />
        </div>
      </div>
    </>
  );
}

export default cutomerpage;
