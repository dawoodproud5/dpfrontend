import React from "react";
import Navbar from "../../../../components/common/Navbar";
import Footer from "../../../../components/common/Footer";
import SideBar from "../../../../components/Services Page Sections/SidebarSevices";
import Image from "next/image";
import Head from "next/head";

function YoutubeConsutation() {
  const liItem = [
    {
      name: "1. Why YouTube Keyword Research Matters",
      id: "why_youtube_research_matters",
    },
    {
      name: "2. Our Approach to Keyword Research",
      id: "our_approach_to_keyword_research",
    },
    {
      name: "3. Benefits of Our Keyword Research ",
      id: "benefit_of_keyword_research",
    },
    {
      name: "4. How Our Process Works",
      id: "how_process_works",
    },
    {
      name: "5. Get Started with YouTube Keyword Research",
      id: "get_started_with_keyword_research",
    },
  ];

  const sectionIds = [
    "why_youtube_research_matters",
    "our_approach_to_keyword_research",
    "benefit_of_keyword_research",
    "how_process_works",
    "get_started_with_keyword_research",
  ];
  return (
    <div className="">
      <Head>
        <title>YouTube Monetization</title>
        <meta
          name="description"
          content="This is the YouTube Monetization page description."
        />
        <meta property="og:title" content="YouTube Monetization" />
        <meta
          property="og:description"
          content="This is the YouTube Monetization page description."
        />
        <meta property="og:image" content="path/to/og/image" />
      </Head>
      <div className="w-full flex flex-col justify-center items-center h-full font-Halvic bg-[#001b47]">
        <div className="w-full bg-white">
          <Navbar bg_color={"white"} position={"sticky"} />
        </div>
        <div className="flex flex-col justify-center items-center mt-8 min-h-[420px] max-w-full">
          <div className="text-[white]/70 relative w-full  grid grid-rows-12 ml-4 pt-2">
            <h3 className="col-start-3 col-span-5 font-Inter font-light text-[14px]">
              Services <span className="text-[#41b0ff]">/</span> Youtube
              Consultation
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-1  sm:grid-cols-12  justify-center items-center mx-auto max-w-full  w-full min-h-[400px] ">
          <div className="text-white sm:col-start-4 sm:col-span-5 flex flex-col items-start justify-start md:items-center md:justify-center text-left mt-8 xl:mt-1 pr-10 sm:pr-0 pl-3 sm:pl-0">
            <h1 className="text-[24px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-bold xl:leading-[50px] font-Factor_A max-w-3xl pr-8 py-[12px]">
              We love our customers
              <br />
              <span className="text-[#41b0ff]">
                And we&#39;re flattered to <br /> know they love us!
              </span>
            </h1>
          </div>
          <div className="w-[100%] h-[200px] sm:h-[200px] lg:h-[250px] relative sm:col-start-9 sm:col-span-2 mb-4">
            <Image
              src="/Images/ServicesheroSVGs/Youtube_consultation.svg"
              fill
              alt="ServicesheroImg"
              className="object-contain"
            ></Image>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12  bg-white  mx-auto max-w-full  w-full ">
          {/* sidebar here  */}
          {/* <div className="mx-5   md:col-span-3 mt-6 ">
            <div className="sticky top-12 ">
              <SideBar liItem={liItem} sectionIds={sectionIds} />
            </div>
          </div> */}
          <div className="w-full mx-auto bg-white min-h-screen md:col-start-4 md:col-span-7 p-2 mb-28 md:mb-40">
            <div className="mx-auto w-[100%]  mt-5">
              <h1 className="font-Inter font-black text-5xl mt-12">
                YouTube Monetization Services
              </h1>
            </div>
            <div className="max-w-[1172px] mx-auto">
              <div className="flex flex-col justify-center items-start mt-12 px-2">
                <h3 className="text-xl p-1 font-medium font-Inter mt-4">
                  Boost Your YouTube Channel&apos;s Discoverability with YouTube
                  Keyword Research Services
                </h3>
                {/* image comes here.. */}
                <div className="relative h-[300px] w-[760px] bg-blue mx-auto">
                  <Image
                    src="/Images/Services/Keyword Research.png"
                    alt="YouTube Keyword Research"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* all the content starts here... */}
                <div className="space-y-4 mt-8 p-3">
                  <h2
                    id="why_youtube_research_matters"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Why YouTube Keyword Research Matters
                  </h2>
                  <p className="text-base">
                    As a YouTube content creator or marketer, understanding the
                    significance of keyword research is crucial. By leveraging
                    relevant keywords, you can significantly improve your
                    video&apos;s discoverability and visibility. Keywords play a
                    pivotal role in YouTube&apos;s algorithm, determining the ranking
                    and exposure of your videos to potential viewers.
                  </p>

                  <h2
                    id="our_approach_to_keyword_research"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Our Approach to YouTube Keyword Research
                  </h2>
                  <p className="text-base">
                    At our YouTube Keyword Research Services, we employ a
                    comprehensive approach to ensure the effectiveness of our
                    research. Our dedicated team utilizes advanced tools and
                    techniques to analyze keywords in depth, taking into account
                    audience intent and search volume. This approach ensures
                    that we uncover valuable insights to optimize your YouTube
                    videos and drive organic traffic to your channel.
                  </p>

                  <h2
                    id="benefit_of_keyword_research"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Benefits of Our YouTube Keyword Research Services
                  </h2>
                  <p className="text-base">
                    When you choose our YouTube Keyword Research Services, you
                    unlock several benefits that can elevate your channel&apos;s
                    growth and success. These benefits include increased
                    visibility and exposure for your videos, improved rankings
                    in YouTube search results, targeted audience engagement,
                    higher click-through rates, and valuable insights into
                    trending topics and popular search queries.
                  </p>

                  <h2 id="how_process_works" className="text-xl md:text-2xl font-bold font-Factor_A">
                    How Our Process Works
                  </h2>
                  <p className="text-base">
                    Our YouTube Keyword Research Services follow a well-defined
                    process to deliver the best results for your channel.
                  </p>

                  <h3 id="section-4-1" className="text-xl font-semibold">
                    Initial Consultation
                  </h3>
                  <p className="text-base">
                    During the initial consultation, we take the time to
                    understand your specific goals and target audience. By
                    grasping your channel&apos;s niche and content focus, we can
                    tailor our keyword research to align with your objectives.
                    You can also avail a free consultation to discuss your
                    requirements and explore how our services can benefit your
                    YouTube channel.
                  </p>

                  <h3 id="section-4-2" className="text-xl font-semibold">
                    Keyword Identification and Analysis
                  </h3>
                  <p className="text-base">
                    Using industry-leading tools, we conduct extensive keyword
                    research. Our analysis involves evaluating keyword
                    relevance, search volume, and competition. We identify both
                    broad and long-tail keywords that resonate with your content
                    and target audience.
                  </p>

                  <h2
                    id="get_started_with_keyword_research"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Get Started with YouTube Keyword Research
                  </h2>
                  <p className="text-base">
                    Ready to take your YouTube channel to new heights? Contact
                    us today to schedule your free consultation and discover how
                    our YouTube Keyword Research Services can boost your
                    channel&apos;s discoverability and growth. Let&apos;s unlock the power
                    of optimized keywords together!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default YoutubeConsutation;
