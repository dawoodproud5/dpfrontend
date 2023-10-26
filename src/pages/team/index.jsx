import React from "react";
import Image from "next/image";
import CEOCard from "../../../components/TeamSection/CeoCard";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import Tab from "../../../components/Careers/CareersTab";
import { relative } from "path";
import TeamMembers from "../../../components/TeamSection/TeamMembers";
import Head from "next/head";
const tabs = [
  {
    label: "Who we are",

    link: "/about-us",
  },
  {
    label: "Our Team",
    link: "/team",
  },
  {
    label: "Jobs",
    link: "/jobs",
  },
  {
    label: "Logo Kit",
    link: "/logo-kit",
  },
  {
    label: "Legal Info",
    link: "/legal-info",
  },
];

function TeamPage() {
  return (
    <>
      <Head>
        <title>Meet the Team at Dawood Proud</title>
        <meta
          name="description"
          content="Meet the talented team that powers Dawood Proud YouTube Agency. Learn about the individuals who make creativity come alive."
        />
      </Head>
      <div className="w-full font-Inter bg-white h-full">
        <div className="w-full bg-white">
          <Navbar bg_color={"white"} />
        </div>
        <div className="bg-[#001b47] w-full ">
          <div className="grid grid-cols-2  md:grid-cols-12  justify-center items-center mx-auto  w-full min-h-[400px]  max-w-[1200px]">
            <div className=" text-white md:col-start-2 md:col-span-5 flex flex-col items-center justify-center text-left mt-8 xl:mt-1">
              <h1 className="text-[24px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-bold xl:leading-[60px] font-Factor_A max-w-xl ">
                <span className="text-[#01b88d]"> We Think Big, </span>
                <br />
                Start Small,
                <br />
                and Move Fast
              </h1>
            </div>
            <div className="w-[100%] h-[110px] md:h-[200px] lg:h-[250px] relative md:col-start-8 md:col-span-3 mt-4">
              <Image
                src="/Images/ServicesheroSVGs/youtube-team.png"
                fill
                alt="teamatDawoodProud"
                className="object-contain"
              ></Image>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-1  md:grid-cols-12 max-w-[1172px] space-y-10  mx-auto mb-24">
          <div className="md:col-start-3 md:col-span-8 ">
            <Tab tabs={tabs} />
          </div>

          <div className="mx-4 sm:mx-2 md:col-start-2 md:col-span-12">
            <TeamMembers />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default TeamPage;
