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
      name: "1. Our 8 Step YouTube Automation Process",
      id: "our_8_step_youtube_automation_process",
    },
    {
      name: "1.1 Initial Consultation",
      id: "initial_consultation",
    },
    {
      name: "1.2 YouTube Niche Selection",
      id: "youtube_niche_selection",
    },
    {
      name: "1.3 YouTube Keywords Research",
      id: "youtube_keywords_research",
    },
    {
      name: "1.4 Faceless Content Creation",
      id: "faceless_content_creation",
    },
    {
      name: "1.5 Thumbnail Designing",
      id: "thumbnail_designing",
    },
    {
      name: "1.6 YouTube Video SEO",
      id: "youtube_video_seo",
    },
    {
      name: "1.7 YouTube Channel Management",
      id: "youtube_channel_management",
    },
    {
      name: "1.8 Audience Engagement",
      id: "audience_engagement",
    },
  ];

  const sectionIds = [
    "our_8_step_youtube_automation_process",
    "initial_consultation",
    "youtube_niche_selection",
    "youtube_keywords_research",
    "faceless_content_creation",
    "thumbnail_designing",
    "youtube_video_seo",
    "youtube_channel_management",
    "audience_engagement",
  ];
  return (
    <div className="">
      <Head>
        <title>
          YouTube Automation Services: Grow your Channel without Making Videos
        </title>
        <meta
          name="description"
          content="Discover our YouTube Automation Services and grow your channel effortlessly. Achieve success without creating videos. Get YouTube Automation done for you."
        />
        <meta
          name="keywords"
          content="YouTube Automation Services, youtube automation without making videos, YouTube Automation Done for You"
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
        <div className="flex flex-col justify-start sm:justify-center items-start sm:items-center mt-16 sm:mt-8 min-h-[420px] max-w-full space-y-4">
          <div className="text-[white]/80 relative w-full  grid grid-rows-12  pt-4 sm:pt-4">
            <h3 className="col-start-1 sm:col-start-3 col-span-5 font-Inter font-light text-[14px] sm:text-[14px] ml-3 sm:pl-4">
              <Link href={"/services"}>Services</Link>{" "}
              <span className="text-[#41b0ff]">/</span>{" "}
              <Link href={"/services/youtube-automation"}>
                Youtube Automation
              </Link>
            </h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="grid grid-cols-1  sm:grid-cols-12  justify-center items-center mx-auto max-w-full  w-full  ">
              <div className=" text-white sm:col-start-4 sm:col-span-5 text-left mt-8 xl:mt-1 pr-10 sm:pr-0 pl-3 sm:pl-0">
                <div className="flex flex-col items-start justify-start gap-2">
                  <h1 className="text-[24px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-bold xl:leading-[56px] font-Factor_A max-w-3xl pr-8 py-[12px]">
                    <span className="text-[#41b0ff]">
                      YouTube Automation Done For You:{" "}
                    </span>
                    Grow your YouTube Channel without Making Videos
                  </h1>

                  <div className="font-Inter font-light text-[14px] sm:text-[14px]  flex gap-4 sm:gap-6 mb-2 ml-0 sm:ml-2 pt-5 text-[white]/80">
                    <p>Team DP</p>
                    <p>May 10, 2023</p>
                    <p>3 min read</p>
                  </div>
                </div>
              </div>
              <div className="w-[100%] h-[200px] sm:h-[200px] lg:h-[250px] relative sm:col-start-9 sm:col-span-2 mb-4">
                <Image
                  src="/Images/Services/YouTube Automation.svg"
                  fill
                  alt="youtube-automation"
                  className="object-contain"
                ></Image>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12  bg-white  mx-auto max-w-full  w-full  ">
          {/* sidebar here  */}
          <div className="mx-5   md:col-span-3 mt-6">
            <div className="sticky top-12 ">
              <SideBar liItem={liItem} sectionIds={sectionIds} />
            </div>
          </div>
          <div className="w-full mx-auto bg-white min-h-screen md:col-start-4 md:col-span-6 p-2 mb-28 md:mb-40">
            <div className="max-w-[1172px] mx-auto">
              <div className="flex flex-col justify-center items-start mt-12 px-2">
                <div className="flex flex-col justify-center item-center gap-6 ">
                  <div className="text-[16px] md:text-[20.4px]  font-light leading-[32.4px]   font-Inter space-y-5">
                    <p>
                      In today's fast-paced digital world, maintaining a
                      successful YouTube channel can be a challenging task.
                      That's where our YouTube Automation Services come into
                      play. We're here to help you grow your channel, increase
                      your visibility, and save you time and effort.
                    </p>
                  </div>
                </div>

                {/* all the content starts here... */}
                <div className="space-y-4 my-12">
                  <h2
                    id="our_8_step_youtube_automation_process"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Our 8 Step YouTube Automation Process
                  </h2>
                  <p className="text-[16px] md:text-[20.4px]  !font-light leading-[32.4px]]">
                    At Dawood Proud, we've meticulously crafted a comprehensive
                    8-step YouTube Automation Process to ensure your channel's
                    success. With our expert guidance and dedication, you'll see
                    your YouTube channel grow like never before.
                  </p>

                  <div className="text-[16px] md:text-[20.4px] font-light leading-[32.4px] mt-4 font-Inter space-y-4">
                    <div className="mb-4">
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
                    </div>

                    <div className="mb-4">
                      <h3
                        id="youtube_niche_selection"
                        className="text-lg md:text-xl font-bold font-Factor_A"
                      >
                        YouTube Niche Selection
                      </h3>
                      <p>
                        In this initial step, we work diligently to find the
                        perfect niche for your YouTube channel. We aim for a
                        niche that strikes the ideal balance between low
                        competition and high viewership potential, setting the
                        stage for your channel's growth.
                      </p>
                    </div>

                    <div className="mb-4">
                      <h3
                        id="youtube_keywords_research"
                        className="text-lg md:text-xl font-bold font-Factor_A"
                      >
                        YouTube Keywords Research
                      </h3>
                      <p>
                        Our team conducts meticulous YouTube Keywords Research
                        to identify keywords with high search volume, low
                        competition, and rising trends. This research ensures
                        that your videos target the right audience and gain the
                        visibility they deserve.
                      </p>
                    </div>

                    <div className="mb-4">
                      <h3
                        id="faceless_content_creation"
                        className="text-lg md:text-xl font-bold font-Factor_A"
                      >
                        Faceless Content Creation
                      </h3>
                      <p>
                        Our content creators specialize in producing engaging
                        Faceless YouTube Content that captivates your audience.
                        Whether it's informative content, tutorials, or
                        entertainment, we ensure your viewers keep coming back
                        for more.
                      </p>
                    </div>

                    <div className="mb-4">
                      <h3
                        id="thumbnail_designing"
                        className="text-lg md:text-xl font-bold font-Factor_A"
                      >
                        Thumbnail Designing
                      </h3>
                      <p>
                        The first impression is crucial. We design eye-catching
                        thumbnails that make your videos stand out in a sea of
                        content. A captivating thumbnail is the key to getting
                        viewers to click on your video.
                      </p>
                    </div>

                    <div className="mb-4">
                      <h3
                        id="youtube_video_seo"
                        className="text-lg md:text-xl font-bold font-Factor_A"
                      >
                        YouTube Video SEO
                      </h3>
                      <p>
                        To optimize your video's performance, we employ advanced
                        YouTube Video SEO techniques. From crafting compelling
                        titles, descriptions, and tags to optimizing for search
                        algorithms, we take care of it all.
                      </p>
                    </div>

                    <div className="mb-4">
                      <h3
                        id="youtube_channel_management"
                        className="text-lg md:text-xl font-bold font-Factor_A"
                      >
                        YouTube Channel Management
                      </h3>
                      <p>
                        We manage your YouTube channel with the utmost care.
                        This involves keeping your content organized, scheduling
                        uploads for maximum impact, engaging with your audience,
                        and monitoring your channel's overall performance.
                      </p>
                    </div>

                    <div className="mb-4">
                      <h3
                        id="audience_engagement"
                        className="text-lg md:text-xl font-bold font-Factor_A"
                      >
                        Audience Engagement
                      </h3>
                      <p>
                        In the final step, we work on fostering a strong
                        community around your channel. Engaging with your
                        audience through comments, likes, and responses is
                        crucial for building a loyal following. We'll help you
                        strategize and execute effective community engagement
                        campaigns to connect with your viewers on a deeper
                        level.
                      </p>
                    </div>
                    <ConsultButton />
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-[1172px] mx-auto"></div>
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
