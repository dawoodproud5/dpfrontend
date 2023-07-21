import React from "react";
import Navbar from "../../../../components/common/Navbar";
import Footer from "../../../../components/common/Footer";
import SideBar from "../../../../components/Services Page Sections/SidebarSevices";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import style from "../../../fonts/font.module.css";
function YoutubeConsutation() {
  const liItem = [
    {
      name: "1. Free Consultation",
      id: "free_consultation",
    },
    {
      name: "2. Tailored Content Strategy",
      id: "tailored_content_strategy",
    },
    {
      name: "3. Channel Analysis ",
      id: "channel_analysis",
    },
    {
      name: "4. Audience Development ",
      id: "audience_development",
    },
    {
      name: "5. YouTube Video SEO",
      id: "youtube_video_seo",
    },
  ];

  const sectionIds = [
    "free_consultation",
    "tailored_content_strategy",
    "channel_analysis",
    "audience_development",
    "youtube_video_seo",
  ];

  return (
    <div className="">
      <Head>
        <title>
          Certified YouTube Consultant | Get Free Consultation with YouTube
          Expert
        </title>
        <meta
          name="description"
          content="Looking for a certified YouTube marketing consultant?
           Get a free YouTube Consulting and Tailored Content Strategy to boost your channel's success."
        />
        <meta
          name="keywords"
          content="YouTube Consultant, Certified YouTube Consulting, YouTube Marketing Consultant"
        />
        <meta property="og:title" content="YouTube Consultation" />
        <meta
          property="og:description"
          content="This is the YouTube Consultation page description."
        />
        <meta property="og:image" content="" />
      </Head>

      <div className="w-full flex flex-col justify-center items-center h-full font-Halvic bg-[#001b47] ">
        <div className="w-full bg-white ">
          <Navbar bg_color={"white"} position={"fixed"} />
        </div>

        <div className="flex flex-col justify-start sm:justify-center items-start sm:items-center mt-16 sm:mt-8 min-h-[420px] max-w-full">
          <div className="text-[white]/80 relative w-full  grid grid-rows-12  pt-4 sm:pt-2">
            <h3 className="col-start-1 sm:col-start-3 col-span-5 font-Inter font-light text-[14px] sm:text-[14px] ml-3 sm:pl-4">
             <Link href={"/services"}>Services</Link>  <span className="text-[#41b0ff]">/</span> <Link href={"/services/youtube-consultation"}>Youtube
              Consultation</Link>
            </h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="grid grid-cols-1  sm:grid-cols-12  justify-center items-center mx-auto max-w-full  w-full  ">
              <div className=" text-white sm:col-start-4 sm:col-span-5 text-left mt-8 xl:mt-1 pr-10 sm:pr-0 pl-3 sm:pl-0">
                <div className="flex flex-col items-start justify-start gap-2">
                  <h1 className="text-[24px] md:text-[24px] lg:text-[36px] xl:text-[44px] font-bold xl:leading-[50px] font-Factor_A max-w-3xl pr-8 py-[12px]">
                 
                    Certified YouTube Consulting:{" "}
                    <span className="text-[#41b0ff] ">
                      Get Free Content Strategy from YouTube Experts
                    </span>
                    
                  </h1>

                  <div className="font-Inter font-light text-[14px] sm:text-[14px]  flex gap-4 sm:gap-6 mb-2 ml-0 sm:ml-2 pt-5 text-[white]/80">
                    <p>Team DP</p>
                    <p>Mar 31, 2023</p>
                    <p>3 min read</p>
                  </div>
                </div>
              </div>
              <div className="w-[100%] h-[200px] sm:h-[200px] lg:h-[250px] relative sm:col-start-9 sm:col-span-2 mb-4">
                <Image
                  src="/Images/Services/YouTube Consultation.svg"
                  fill
                  alt="Youtube_consultation"
                  className="object-contain"
                ></Image>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12  bg-white  mx-auto max-w-full  w-full ">
          {/* sidebar here  */}
          <div className="mx-5  md:col-span-3 mt-6 ">
            <div className="sticky top-12 ">
              <SideBar liItem={liItem} sectionIds={sectionIds} />
            </div>
          </div>
          <div className="w-full mx-auto bg-white min-h-screen md:col-start-4 md:col-span-6 p-2  mb-28 md:mb-40">
            <div className="max-w-[1172px] mx-auto">
              <div className="flex flex-col justify-center items-start mt-12 px-2">
                <div className="flex flex-col justify-center item-center gap-4 mb-3">
                  <div className="text-[16px] md:text-[20.4px]  font-light leading-[32.4px]   font-Inter space-y-4">
                    <p>
                      Welcome to Dawood Proud, the hub of certified YouTube
                      consultants who are passionate about helping your YouTube
                      channel thrive.
                    </p>
                    <p>
                      Unlock your channel&apos;s true potential with our expert
                      guidance and tailored content strategies.
                    </p>
                  </div>

                  <h3 className="text-[24px] md:text-[36px] xl:text-[42px] font-bold font-Factor_A">
                    Why Choose Our YouTube Consulting Services?
                  </h3>
                </div>

                {/* all the content starts here... */}
                <div className="space-y-8 mt-8">
                  <h2
                    id="free_consultation"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Free Consultation
                  </h2>
                  <p className="text-[16px] md:text-[20.4px] font-light leading-[32.4px] font-Inter">
                    Take advantage of our complimentary YouTube consultation
                    with experienced experts. Gain valuable insights and
                    personalized strategies to accelerate your channel&apos;s
                    growth.
                  </p>

                  <h2
                    id="tailored_content_strategy"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Tailored Content Strategy
                  </h2>
                  <p className="text-[16px] md:text-[20.4px] font-light leading-[32.4px] font-Inter">
                    Every channel is unique, and we understand the importance of
                    customized approaches. Our consultants will develop a
                    tailored content strategy to maximize your channel&apos;s
                    success.
                  </p>

                  <h2
                    id="channel_analysis"
                    className="text-xl md:text-2xl  font-bold font-Factor_A"
                  >
                    Channel Analysis
                  </h2>
                  <p className="text-[16px] md:text-[20.4px] font-light leading-[32.4px] font-Inter">
                    Our experts will conduct a comprehensive analysis of your
                    channel, examining your content, audience, engagement, and
                    SEO. Identify strengths and opportunities for improvement.
                  </p>

                  <h2
                    id="audience_development"
                    className="text-xl md:text-2xl  font-bold font-Factor_A"
                  >
                    Audience Development
                  </h2>
                  <p className="text-[16px] md:text-[20.4px] font-light leading-[32.4px] font-Inter">
                    Build a loyal and engaged audience through our proven
                    techniques. We&apos;ll help you identify your target
                    audience, optimize content to meet their interests, and
                    foster strong connections.
                  </p>

                  <h3
                    id="youtube_video_seo"
                    className="text-xl md:text-2xl  font-bold font-Factor_A"
                  >
                    YouTube Video SEO
                  </h3>
                  <p className="text-[16px] md:text-[20.4px] font-light leading-[32.4px] font-Inter">
                    Enhance your channel&apos;s visibility with effective search
                    engine optimization techniques. Our consultants will
                    optimize titles, tags, descriptions, and metadata for better
                    discoverability.
                  </p>

                  <h3 className="text-[24px] md:text-[36px] xl:text-[42px] font-bold font-Factor_A ">
                    Ready to Take Your YouTube Channel to New Heights?
                  </h3>
                  <p className="text-[16px] md:text-[20.4px] font-light leading-[32.4px] font-Inter">
                    Contact our certified YouTube consultants today to claim
                    your free consultation. Let us help you unlock the full
                    potential of your channel and achieve the success you
                    deserve. Start your journey towards YouTube excellence with
                    Dawood Proud.
                  </p>
                  <p className="text-[16px] md:text-[20.4px] font-light leading-[32.4px] font-Inter">
                    Remember, our commitment is to your growth and success. Get
                    in touch now and embark on a transformative YouTube journey
                    with our expert guidance and tailored strategies.
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
