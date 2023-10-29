import React from "react";
import Footer from "../../../components/common/Footer";
import Navbar from "../../../components/common/Navbar";
import Tab2 from "../../../components/JobsTab/JobsTab";
import Tab from "../../../components/Careers/CareersTab";
import Image from "next/image";
import Link from "next/link";
import JobClosedBtn from "../../../components/JobsTab/JobClosedPop";
import HiringRecruttie from "../../../components/JobsTab/HiringRecruttie";
import Head from "next/head";
function careers() {
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
      link: "/careers",
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

  const tabs2 = [
    {
      label: "Job details",
      link: "/careers-details",
    },
    {
      label: "Apply",
      link: "/apply",
    },
  ];
  const jobsClosed = [
    {
      Job: "YouTube Growth Strategists",
      Location: "May 2023 • In-Office ",
    },
    {
      Job: "Multimedia Designers",
      Location:
        "March 2023 • In-Office ",
    },
    {
      Job: "Corporate Video Editors",
      Location: "January 2023 • In-Office ",
    },
    {
      Job: "Graphic Designers",
      Location: "Jan 2022 • Remote",
    },
    {
      Job: "Content Writer",
      Location: "Jan 2022 • In-Office ",
    },

    {
      Job: "Multimedia Designers",
      Location: "December 2022 ",
    },
    {
      Job: "Commercial Video Editors",
      Location: "September • Remote ",
    },
    {
      Job: "Voice-Over Artists (American Accent) ",
      Location: "August 2022 • Remote",
    },

    {
      Job: "Content Writers",
      Location: "June 2022 • Remote",
    },

    {
      Job: "SEO Experts",
      Location: "May 2022 • Remote",
    },

    {
      Job: "Voice-Over Artists (American Accent) ",
      Location: "April 2022 • Remote",
    },

    {
      Job: "Video Editors",
      Location: "February 2022 • Remote",
    },
    {
      Job: "Video Content Creator",
      Location: "December 2021 • Remote",
    },
    {
      Job: "Content Writer",
      Location: "June 2023 ",
    },
    
    {
      Job: "Voice-Over Artist (Male, Urdu) ",
      Location: "June 2023 ",
    },
    {
      Job: "Video Editors",
      Location:
        "June 2023 • In-Office ",
    },

    {
      Job: "Content Writers",
      Location: "July 2023 • Remote",
    },
    {
      Job: "Video Content Creator",
      Location: "July 2023 • In-Office ",
    },
  ];

  const UpcomingJobs = [
    {
      Job: "YouTube Growth Strategists",
      Location: "November 2023 • In-office",
    },
  ];

  return (
    <>
      <Head>
        <title>Careers at Dawood Proud - Where You Can Truly Stand Out</title>
        <meta
          name="description"
          content="Join Dawood Proud Agency and experience a workplace that encourages creativity, innovation, and personal growth."
        />
      </Head>
      <div className="w-full  font-Inter text-white bg-white min-h-screen h-full">
        <div className="w-full bg-white text-[black]">
          <Navbar bg_color={"white"} />
        </div>

        <div className="bg-[#001b47] w-full">
          <div className="grid grid-cols-2  md:grid-cols-12  justify-center items-center mx-auto  w-full min-h-[400px]  max-w-[1200px] px-3 ">
            <div className=" text-white md:col-start-3 md:col-span-5  text-left mt-8 xl:mt-1 ">
              <h1 className="text-[20px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-bold xl:leading-[60px] font-Factor_A max-w-xl ">
                <span className="text-[#007aff]">First do it, </span>
                <br />
                then Do it Right,
                <br />
                then Do it Better.
              </h1>
            </div>
            <div className="w-[100%] h-[110px] md:h-[200px] lg:h-[230px] relative md:col-start-8 md:col-span-3 mt-4">
              <Image
                src="/Images/ServicesheroSVGs/youtube-team.png"
                fill
                alt="careerdawodproud"
                className="object-contain"
              ></Image>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-12 w-full  max-w-[1200px] space-y-10  mx-auto mb-24">
          <div className="md:col-start-3 md:col-span-8">
            <Tab tabs={tabs} />
          </div>

          <hr className="w-[30%]" />
          <div className="flex flex-col justify-start items-center text-[#333333] font-Inter mt-6 gap-2 mx-auto  p-6  md:col-start-3 md:col-span-8">
            <div className="flex flex-col justify-center items-start gap-3 w-full self-start">
              <h2 className="font-semibold  text-[24px] md:text-[28px] text-center sm:text-left">
                Why Work at Dawood Proud Agency?
              </h2>
              <p className="font-normal text-[12px] sm:text-[14px] md:text-[16px] font-Inter">
                Our Motto is &quot;Stand Out from the Crowd&quot;. That&#39;s
                why we offer our Employees much more than just a job — We offer
                them a chance to be a part of something bigger. For starters, we
                offer highly Competitive Salaries that are way above the
                industry average. But that&#39;s not all - We also provide our
                employees with home-like facilities that make coming to work a
                joy. Our office environment is designed to encourage creativity
                and innovation.
                <br />
                <br />
                At our Company, we pride ourselves on having a flat hierarchy.
                This means that everyone has a voice, and everyone&#39;s ideas
                are valued. We&#39;re always exploring new growth opportunities,
                which means there&#39;s plenty of potential for our employees to
                take on new tasks and help shape the company. We believe in
                empowering our employees to make informed, independent decisions
                that add real value to our business.
                <br />
                <br />
                If you&#39;re looking for a job that offers much more than just
                a paycheck, then this is the Right place for you !
              </p>
            </div>
            <div className="w-[250px] xs:w-[400px] sm:w-[500px] md:w-[680px] h-[300px] xs:h-[300px] sm:h-[300px] md:h-[400px] relative ">
              <Image
                src={"/Images/jobs.png"}
                fill
                className="object-contain"
                alt="jobimage"
              ></Image>
            </div>
          </div>
          <div className="mx-auto flex flex-col justify-start items-start gap-12 mb-6 max-w-[900px] p-3 md:col-start-3 md:col-span-9">
            <div className="justify-start">
              <h3 className="text-[black] text-[24px] sm:text-[32px] md:text-[44px] font-semibold">
                Open positions
              </h3>
            </div>
            <div className="text-[black] max-w-[600px] self-start">
              {/* <div className="border-2 border-solid border-[black]/20 grid grid-cols-[2fr_1fr] justify-between items-start sm:items-center px-3 md:px-3 py-3 md:py-6 shadow-md">
                <div className="flex flex-col ">
                  <p className="text-[16px] md:text-[20px] font-semibold">
                    YouTube Growth Strategists
                  </p>
                  <p className="text-[14px] md:text-[16px] font-normal">
                    May 2023 • In-Office 
                  </p>
                </div>
                <div className="mx-auto ">
                  <Link
                    href={"/careers-details"}
                    type="button"
                    className="border border-indigo-500 text-[12px] md:text-[14px] bg-[black] text-white rounded-md  px-3 md:px-6 py-2 md:py-3  md:m-2  focus:outline-none focus:shadow-outline"
                  >
                    Apply Now
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
          <div className="mx-auto flex flex-col justify-start items-start gap-12 max-w-[900px] p-3  md:col-start-3 md:col-span-9">
            <h3 className="text-[black] text-[24px] sm:text-[32px] md:text-[44px] font-semibold">
              Upcoming positions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 text-[black] mx-auto gap-4 md:gap-8">
              {UpcomingJobs.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="border-1 border-solid border-[black] flex flex-col gap-2 md:grid md:grid-cols-[2.2fr_1fr]  px-3 md:px-2 py-3 md:py-4 shadow-md "
                  >
                    <div className="flex flex-col ">
                      <p className="text-[16px] md:text-[20px] font-semibold">
                        {data.Job}
                      </p>
                      <p className="text-[14px] md:text-[16px] font-normal">
                        {data.Location}
                      </p>
                    </div>
                    <JobClosedBtn
                      status="Opening Soon"
                      desc="Stay Tuned. Open Position will be available Soon! "
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mx-auto flex flex-col justify-start items-start gap-12 max-w-[900px] p-3  md:col-start-3 md:col-span-9">
            <h3 className="text-[black] text-[24px] sm:text-[32px] md:text-[44px] font-semibold">
              Closed positions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 text-[black] mx-auto gap-4 md:gap-8">
              {jobsClosed.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="border-1 border-solid border-[black] flex flex-col gap-2 md:grid md:grid-cols-[2.2fr_1fr]  px-3 md:px-2 py-3 md:py-4 shadow-md "
                  >
                    <div className="flex flex-col ">
                      <p className="text-[16px] md:text-[20px] font-semibold">
                        {data.Job}
                      </p>
                      <p className="text-[14px] md:text-[16px] font-normal">
                        {data.Location}
                      </p>
                    </div>
                    <JobClosedBtn status="Job Closed" desc="Job Is Closed" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <HiringRecruttie />

        <Footer />
      </div>
    </>
  );
}

export default careers;
