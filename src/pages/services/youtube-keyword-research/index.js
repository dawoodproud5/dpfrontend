import React from "react";
import Navbar from "../../../../components/common/Navbar";
import Footer from "../../../../components/common/Footer";
import SideBar from "../../../../components/Services Page Sections/SidebarSevices";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

function youtubeseo() {
  const liItem = [
    {
      name: "1. Professional Expertise",
      id: "professional_expertise",
    },
    {
      name: "2. Low Competition, High Volume",
      id: "low_competition_high_volume",
    },
    {
      name: "3. Free Consistent Views ",
      id: "free_consistent_views",
    },
    {
      name: "4. Engaged Subscribers",
      id: "engaged_subscribers",
    },
    {
      name: <p className="font-medium"> YouTube Keywords Research Process</p>,
      id: "yotube_keyword_research_process",
    },

    {
      name: "5. Understanding Your Niche",
      id: "understanding_your_niche",
    },
    {
      name: "6. Comprehensive Keyword Analysis",
      id: "comprehensive_keyword_analysis",
    },
    {
      name: "7. Keyword Recommendations",
      id: "keyword_recommendations",
    },
    {
      name: "8. Implementation Guidance",
      id: "implementation_guidance",
    },
  ];

  const sectionIds = [
    "professional_expertise",
    "low_competition_high_volume",
    "free_consistent_views",
    "engaged_subscribers",
    "yotube_keyword_research_process",
    "understanding_your_niche",
    "comprehensive_keyword_analysis",
    "keyword_recommendations",
    "implementation_guidance",
  ];
  return (
    <div className="">
      <Head>
        <title>
          YouTube Keywords Research Services to get Consistent Views & Engaged
          Subscribers
        </title>
        <meta
          name="description"
          content="Get Low Competition and High Volume Keywords for YouTube Titles by YouTube Experts to get Free Consistent Views and Engaged Subscribers from YouTube Search Results"
        />
        <meta
          name="keywords"
          content=" YouTube Keywords Research Services, Keywords for YouTube Titles, Keywords for YouTube Services"
        />
        <meta property="og:title" content="YouTube Consultation" />
        <meta
          property="og:description"
          content="This is the YouTube Consultation page description."
        />
        <meta property="og:image" content="" />
      </Head>

      <div className="w-full flex flex-col justify-center items-center h-full font-Halvic bg-[#001b47]">
        <div className="w-full bg-white">
          <Navbar bg_color={"white"} position={"sticky"} />
        </div>

        <div className="flex flex-col justify-start sm:justify-center items-start sm:items-center mt-16 sm:mt-8 min-h-[420px] max-w-full">
          <div className="text-[white]/80 relative w-full  grid grid-rows-12  pt-4 sm:pt-2">
            <h3 className="col-start-1 sm:col-start-3 col-span-5 font-Inter font-light text-[14px] sm:text-[14px] ml-3 sm:pl-8">
              <Link href={"/services"}>Services</Link>{" "}
              <span className="text-[#41b0ff]">/</span>{" "}
              <Link href={"/services/youtube-keyword-research"}>
                YouTube Keywords Research
              </Link>
            </h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="grid grid-cols-1  sm:grid-cols-12  justify-center items-center mx-auto max-w-full  w-full  ">
              <div className=" text-white sm:col-start-4 sm:col-span-5 text-left mt-8 xl:mt-1 pr-10 sm:pr-0 pl-3 sm:pl-0">
                <div className="flex flex-col items-start justify-start gap-2">
                  <h1 className="text-[24px] md:text-[32px] lg:text-[36px] xl:text-[44px] font-bold xl:leading-[50px] font-Factor_A max-w-3xl pr-8 py-[12px]">
                    <span className="text-[#41b0ff]">
                      YouTube Keywords Research Services
                    </span>{" "}
                    to Leverage Low Competition & High Volume Keywords
                  </h1>

                  <div className="font-Inter font-light text-[14px] sm:text-[14px]  flex gap-4 sm:gap-6 mb-2 ml-0 sm:ml-2 pt-5 text-[white]/80">
                    <p>Team DP</p>
                    <p>April 30, 2023</p>
                    <p>3 min read</p>
                  </div>
                </div>
              </div>
              <div className="w-[100%] h-[200px] sm:h-[200px] lg:h-[250px] relative sm:col-start-9 sm:col-span-2 mb-4">
                <Image
                  src="/Images/Services/YouTube Keywords Research.png"
                  fill
                  alt="Youtube_keywordResearch"
                  className="object-contain"
                ></Image>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12  bg-white  mx-auto max-w-full  w-full ">
          {/* sidebar here  */}
          <div className="mx-5   md:col-span-3 mt-6 ">
            <div className="sticky top-12 ">
              <SideBar liItem={liItem} sectionIds={sectionIds} />
            </div>
          </div>
          <div className="w-full mx-auto bg-white min-h-screen md:col-start-4 md:col-span-6 p-2 mb-28 md:mb-40">
            <div className="max-w-[1172px] mx-auto">
              {/* <h1 className="font-Inter font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-12">
                YouTube Keywords Research Services to Leverage Low Competition &
                High Volume Keywords
              </h1> */}
            </div>
            <div className="max-w-[1172px] mx-auto">
              <div className="flex flex-col justify-center items-start mt-12 px-2">
                <div className="flex flex-col justify-center item-center gap-4 ">
                  <div className="text-[16px] md:text-[20.4px]     font-light leading-[32.4px]  font-Inter space-y-4">
                    <p>
                      Are you looking to maximize your visibility on YouTube and
                      attract a dedicated audience?
                    </p>
                    <p>
                      Our YouTube Keywords Research Services provide you with
                      expert assistance in finding low competition and high
                      volume keywords to enhance your YouTube titles and
                      increase your chances of ranking higher in YouTube search
                      results.
                    </p>
                  </div>
                  <h3 className="text-base md:text-xl lg:text-2xl font-Inter font-semibold p-1 -mb-8">
                    Why Choose Our YouTube Keywords Research Services?
                  </h3>
                </div>

                {/* all the content starts here... */}
                <div className="space-y-4 my-12 ">
                  <h2
                    id="professional_expertise"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Professional Expertise
                  </h2>
                  <div className="text-[16px] md:text-[20.4px]     font-light leading-[32.4px]  mt-4 font-Inter space-y-4">
                    <p>
                      Our team of YouTube experts has extensive knowledge and
                      experience in keyword research specifically tailored for
                      YouTube.
                    </p>
                    <p>
                      We understand the platform&apos;s algorithm and can
                      identify keywords that have the potential to bring you
                      consistent views and engaged subscribers.
                    </p>
                  </div>

                  <h2
                    id="low_competition_high_volume"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Low Competition, High Volume
                  </h2>
                  <div className="text-[16px] md:text-[20.4px]     font-light leading-[32.4px]  mt-4 font-Inter space-y-4">
                    <p>
                      High Volume: We delve deep into keyword analysis to
                      discover hidden gems - low competition keywords with high
                      search volume.
                    </p>
                    <p>
                      By leveraging these keywords in your video titles, you can
                      stand out from the crowd and attract more organic traffic.
                    </p>
                  </div>
                  <h2
                    id="free_consistent_views"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Free Consistent Views
                  </h2>
                  <div className="text-[16px] md:text-[20.4px]     font-light leading-[32.4px]  mt-4 font-Inter space-y-4">
                    <p>
                      Optimizing your YouTube titles with the right keywords
                      increases your chances of appearing in relevant search
                      results.
                    </p>
                    <p>
                      This exposure brings you free, consistent views from users
                      actively searching for content in your niche.
                    </p>
                  </div>
                  <h2
                    id="engaged_subscribers"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Engaged Subscribers
                  </h2>
                  <div className="text-[16px] md:text-[20.4px]     font-light leading-[32.4px]  mt-4 font-Inter space-y-4">
                    <p>
                      When your video appears in search results with compelling
                      titles, it captures the attention of potential subscribers
                      who are genuinely interested in your content.
                    </p>
                    <p>
                      By targeting the right keywords, we help you attract
                      engaged subscribers who are more likely to interact,
                      comment, and share your videos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-[1172px] mx-auto">
              <div className="flex flex-col justify-center items-start">
                <div className="flex flex-col justify-center item-center gap-4 mb-3">
                  <h3
                    id="yotube_keyword_research_process"
                    className="text-base md:text-xl lg:text-2xl font-Inter font-semibold p-1 "
                  >
                    Our YouTube Keywords Research Process
                  </h3>
                </div>

                {/* all the content starts here... */}
                <div className="space-y-4 my-16 p-3 ">
                  <h2
                    id="understanding_your_niche"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Understanding Your Niche
                  </h2>
                  <div className="text-[16px] md:text-[20.4px]     font-light leading-[32.4px]  mt-4 font-Inter space-y-4">
                    <p>
                      We start by gaining a thorough understanding of your
                      niche, target audience, and content goals.
                    </p>
                    <p>
                      This allows us to tailor our keyword research to your
                      specific needs.
                    </p>
                  </div>
                  <h2
                    id="comprehensive_keyword_analysis"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Comprehensive Keyword Analysis
                  </h2>
                  <div className="text-[16px] md:text-[20.4px]     font-light leading-[32.4px]  mt-4 font-Inter space-y-4">
                    <p>
                      Our team conducts in-depth research using advanced tools
                      and techniques to identify relevant keywords with low
                      competition and high search volume.
                    </p>
                    <p>
                      We analyze trends, search patterns, and competitor
                      strategies to uncover untapped keyword opportunities.
                    </p>
                  </div>
                  <h2
                    id="keyword_recommendations"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Keyword Recommendations
                  </h2>
                  <div className="text-[16px] md:text-[20.4px]     font-light leading-[32.4px]  mt-4 font-Inter space-y-4">
                    <p>
                      Based on our research, we provide you with a comprehensive
                      list of recommended keywords for your YouTube titles.
                    </p>
                    <p>
                      These keywords are carefully selected to maximize your
                      visibility and engagement.
                    </p>
                  </div>
                  <h2
                    id="implementation_guidance"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Implementation Guidance
                  </h2>
                  <div className="text-[16px] md:text-[20.4px]     font-light leading-[32.4px]  mt-4 font-Inter space-y-4">
                    <p>
                      We guide you on how to effectively incorporate the
                      researched keywords into your video titles to optimize
                      your chances of ranking higher in YouTube search results.
                    </p>

                    <p>
                      Unlock the power of YouTube&apos;s search algorithm and
                      increase your channel&apos;s visibility with our YouTube
                      Keywords Research Services.
                    </p>
                    <p>
                      Gain consistent views, attract engaged subscribers, and
                      grow your channel organically. Contact us today to
                      leverage low competition and high volume keywords for your
                      YouTube titles.
                    </p>
                  </div>
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

export default youtubeseo;
