import React from "react";
import Footer from "../../../components/common/Footer";
import Navbar from "../../../components/common/Navbar";
import Tab from "../../../components/Careers/CareersTab";
import ApplicationForm from "../../../components/JobsTab/ApplicationForm";
import Image from "next/image";

const tabs2 = [
  {
    label: "Job details",

    link: "/job-details",
  },
  {
    label: "Apply",
    link: "/apply",
  },
];

function Application() {
  return (
    <div className="w-full min-h-screen font-Inter text-white bg-white h-full">
      <div className="w-full bg-white">
        <Navbar bg_color={"white"} />
      </div>

      <div className="grid grid-cols-1  md:grid-cols-12  justify-center items-center mx-auto max-w-full  w-full min-h-[400px]  bg-[#001b47]">
        <div className=" text-white md:col-start-2 md:col-span-5 flex flex-col items-center justify-center text-center md:text-left mt-8 xl:mt-1">
          <h1 className="text-[24px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-bold xl:leading-[60px] font-Factor_A max-w-xl ">
            <span className="text-[#01b88d]"> We Think big, </span>
            <br />
            start small,
            <br />
            and move fast
          </h1>
        </div>
        <div className="w-[100%] h-[150px] md:h-[200px] lg:h-[250px] relative md:col-start-9 md:col-span-2 mb-4">
          <Image
            src="/Images/ServicesheroSVGs/youtube-niche-with-low-competition.svg"
            fill
            alt="youtube-niche-with-low-competition"
            className="object-contain"
          ></Image>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-start max-w-[1172px] space-y-10  mx-auto mb-24">
        <div className="ml-[4%] md:ml-[8%] lg:ml-[8%] ">
          <Tab tabs={tabs2} />
        </div>
        <div className="mx-auto md:ml-[6%] lg:ml-[6%] px-5 sm:px-2">
          <ApplicationForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Application;
