import React from "react";
import Navbar from "../../../../components/common/Navbar";
import Footer from "../../../../components/common/Footer";
import SideBar from "../../../../components/Services Page Sections/SidebarSevices";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import ConsultButton from "../../../../components/Utils/ConsultButton";

function youtubeseo() {
  const liItem = [
    {
      name: "1. Why YouTube Niche Selection Matters",
      id: "why_youtube_niche_selection_matters",
    },
    {
      name: "2. Our 5 Step Niche Research Process",
      id: "our_5_step_niche_research_process",
    },
    {
      name: "  2.1 Initial Consultation",
      id: "initial_consultation",
    },
    {
      name: "  2.2 Audience Profiling",
      id: "audience_profiling",
    },
    {
      name: "  2.3 Market Analysis",
      id: "market_analysis",
    },
    {
      name: "  2.4 Competitor Analysis",
      id: "competitor_analysis",
    },
    {
      name: "  2.5 Niche Validation",
      id: "niche_validation",
    },
    {
      name: "3. Why Choose Our YouTube Niche Selection Services",
      id: "why_choose_our_youtube_niche_selection_services",
    },
    {
      name: "  3.1 Low Competition",
      id: "low_competition",
    },
    {
      name: "  3.2 High Volume",
      id: "high_volume",
    },
    {
      name: "  3.3 CPM / RPM Optimization",
      id: "cpm_rpm_optimization",
    },
    {
      name: "  3.4 Rising Trend",
      id: "rising_trend",
    },
  ];

  const sectionIds = [
    "why_youtube_niche_selection_matters",
    "our_5_step_niche_research_process",
    "initial_consultation",
    "audience_profiling",
    "market_analysis",
    "competitor_analysis",
    "niche_validation",
    "why_choose_our_youtube_niche_selection_services",
    "low_competition",
    "high_volume",
    "cpm_rpm_optimization",
    "rising_trend",
  ];

  return (
    <div className="">
      <Head>
        <title>
          Get YouTube Niches with Low Competition for Your Target Audience
        </title>
        <meta
          name="description"
          content="Uncover profitable YouTube Automation Niches with low competition and Niches for YouTube Shorts that perfectly align with your target audience."
        />
        <meta
          name="keywords"
          content=" youtube niches with low competition, youtube automation niches, niches for youtube shorts, top faceless youtube niches"
        />
        <meta property="og:title" content="YouTube Consultation" />
        <meta
          property="og:description"
          content="This is the YouTube Consultation page description."
        />
        <meta property="og:image" content="" />
      </Head>

      <div className="w-full flex flex-col justify-center items-center h-full font-Halvic bg-[#001b47]">
        <div className="w-full bg-white ">
          <Navbar bg_color={"white"} position={"sticky"} />
        </div>

        <div className="flex flex-col justify-start sm:justify-center items-start sm:items-center mt-16 sm:mt-8 min-h-[420px] max-w-full">
          <div className="text-[white]/80 relative w-full  grid grid-rows-12  pt-4 sm:pt-2">
            <h3 className="col-start-1 sm:col-start-3 col-span-5 font-Inter font-light text-[14px] sm:text-[14px] ml-3 sm:pl-2">
              <Link href={"/services"}>Services</Link>{" "}
              <span className="text-[#41b0ff]">/</span>{" "}
              <Link href={"/services/youtube-video-production"}>
                YouTube Niches
              </Link>
            </h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="grid grid-cols-1  sm:grid-cols-12  justify-center items-center mx-auto max-w-full  w-full  ">
              <div className=" text-white sm:col-start-4 sm:col-span-5 text-left mt-8 xl:mt-1 pr-10 sm:pr-0 pl-3 sm:pl-0">
                <div className="flex flex-col items-start justify-start gap-2">
                  <h1 className="text-[24px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-bold xl:leading-[50px] font-Factor_A max-w-3xl pr-8 py-[12px]">
                    <span className="text-[#41b0ff]">
                      YouTube Niches with Low Competition Services{" "}
                    </span>
                    to Optimize for Your Target Audience
                  </h1>
                  <div className="font-Inter font-light text-[14px] sm:text-[14px]  flex gap-4 sm:gap-6 mb-2 ml-0 sm:ml-2 pt-5 text-[white]/80">
                    <p>Team DP</p>
                    <p>May 04, 2023</p>
                    <p>3 min read</p>
                  </div>
                </div>
              </div>
              <div className="w-[100%] h-[200px] sm:h-[200px] lg:h-[250px] relative sm:col-start-9 sm:col-span-2 mb-4">
                <Image
                  src="/Images/Services/YouTube Niches with Low Competition.svg"
                  fill
                  alt="youtube-niche-with-low-competition"
                  className="object-contain"
                ></Image>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12  bg-white  mx-auto max-w-full  w-full ">
          {/* sidebar here  */}
          {/* <div className="mx-5   md:col-span-3 mt-6 ">
            <div className="sticky top-12">
              <SideBar liItem={liItem} sectionIds={sectionIds} />
            </div>
          </div> */}
          <div className="w-full mx-auto bg-white min-h-screen md:col-start-4 md:col-span-6 p-2 mb-28 md:mb-40">
            <div className="max-w-[1172px] mx-auto">
              <div className="flex flex-col justify-center items-start mt-12 px-2">
                <div className="flex flex-col justify-center item-center gap-4 mt-4">
                  <div className="text-[16px] md:text-[20.4px]     font-light leading-[32.4px] font-Inter space-y-4">
                    <p>
                      Your YouTube journey begins with one crucial decision:
                      choosing the right niche. Whether you&apos;re just
                      starting a new YouTube channel or looking to revamp your
                      channel&apos;s content strategy, our YouTube Niche Selection
                      services are designed to guide you toward success.
                    </p>{" "}
                    <h2
                      className="font-medium text-xl md:text-2xl"
                      id="why_youtube_niche_selection_matters"
                    >
                      Why YouTube Niche Selection Matters
                    </h2>
                    <p>
                      A well-defined niche not only helps you attract the right
                      audience but also positions you as an expert in your
                      field. With millions of channels on YouTube, it&apos;s
                      crucial to stand out and offer something unique.
                      <br></br>It&apos;s the cornerstone of building a dedicated
                      audience, increasing your visibility, and monetizing your
                      channel effectively. Our YouTube Niche Selection services
                      take the guesswork out of the equation, because It&apos;s
                      not just about selecting a topic; it&apos;s about defining
                      your unique voice and connecting with a dedicated
                      community.
                    </p>
                  </div>
                </div>

                {/* all the content starts here... */}
                <div className="space-y-4 my-12">
                  <h2
                    id="our_5_step_niche_research_process"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Our 5 Step Niche Research Process
                  </h2>
                  <div className="text-[16px] md:text-[20.4px] font-light leading-[32.4px] mt-4 font-Inter space-y-4">
                    <h3
                      id="initial_consultation"
                      className="text-lg md:text-xl font-bold font-Factor_A"
                    >
                      Initial Consultation
                    </h3>
                    <p>
                      We start by understanding your interests, strengths,
                      goals, and vision for your YouTube channel during a
                      detailed consultation.
                    </p>

                    <h3
                      id="audience_profiling"
                      className="text-lg md:text-xl font-bold font-Factor_A"
                    >
                      Audience Profiling
                    </h3>
                    <p>
                      We&apos;ll help you define your ideal audience by creating a
                      detailed profile of your target audience, ensuring your
                      niche resonates with the right viewers.
                    </p>

                    <h3
                      id="market_analysis"
                      className="text-lg md:text-xl font-bold font-Factor_A"
                    >
                      Market Analysis
                    </h3>
                    <p>
                      Our team conducts in-depth research, analyzing trends,
                      competition, and audience demographics within your field
                      of interest.
                    </p>

                    <h3
                      id="competitor_analysis"
                      className="text-lg md:text-xl font-bold font-Factor_A"
                    >
                      Competitor Analysis
                    </h3>
                    <p>
                      We&apos;ll assess your competitors within the chosen niche and
                      identify opportunities to differentiate your content.
                    </p>

                    <h3
                      id="niche_validation"
                      className="text-lg md:text-xl font-bold font-Factor_A"
                    >
                      Niche Validation
                    </h3>
                    <p>
                      We evaluate potential niches based on competition, search
                      volume, and long-term sustainability and scalability.
                    </p>
                  </div>
                  <h2
                    id="why_choose_our_youtube_niche_selection_services"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Why Choose Our YouTube Niche Selection Services
                  </h2>
                  <div className="text-[16px] md:text-[20.4px] font-light leading-[32.4px] mt-4 font-Inter space-y-4">
                    <h3
                      id="low_competition"
                      className="text-lg md:text-xl font-bold font-Factor_A"
                    >
                      Low Competition
                    </h3>
                    <p>
                      We identify niches with lower competition, giving you a
                      better chance to stand out and grow your audience.
                    </p>

                    <h3
                      id="high_volume"
                      className="text-lg md:text-xl font-bold font-Factor_A"
                    >
                      High Volume
                    </h3>
                    <p>
                      Our services focus on niches with a substantial viewer
                      base, ensuring that your content has the potential to
                      reach a wide audience.
                    </p>

                    <h3
                      id="cpm_rpm_optimization"
                      className="text-lg md:text-xl font-bold font-Factor_A"
                    >
                      CPM / RPM Optimization
                    </h3>
                    <p>
                      We consider the CPM (Cost Per Mille) and RPM (Revenue Per
                      Mille) potential of your chosen niche, helping you
                      maximize your earnings.
                    </p>

                    <h3
                      id="rising_trend"
                      className="text-lg md:text-xl font-bold font-Factor_A"
                    >
                      Rising Trend
                    </h3>
                    <p>
                      We keep an eye on trends and select niches with a growing
                      audience, ensuring that your channel can benefit from
                      increased interest over time.
                    </p>
                  </div>
                  <div className="text-[16px] md:text-[20.4px] font-light leading-[32.4px] mt-4 font-Inter space-y-4">
                    <p>
                      Don&apos;t let indecision hinder your YouTube journey. Let us
                      help you uncover the niche that will propel you to
                      success.
                    </p>
                    <p>
                      Ready to take the next step? Contact us now for a{" "}
                      <Link href="/consultation" className="text-blue-500">
                        Free Consultation
                      </Link>{" "}
                      and let&apos;s find your YouTube Niche together!
                    </p>
                  </div>
                 
                </div>
              </div>
            </div>
            <ConsultButton text="Get started today"/>
          </div>
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default youtubeseo;
