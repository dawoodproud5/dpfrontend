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
      name: "1. Why Keyword Research Matters for YouTube Success",
      id: "why_keyword_research_matters",
    },
    {
      name: "Improved Visibility & Discovery",
      id: "improved_visibility_discovery",
    },
    {
      name: "Higher Click-Through Rates",
      id: "higher_click_through_rates",
    },
    {
      name: "Increased Audience Retention",
      id: "increased_audience_retention",
    },
    {
      name: "Channel Authority",
      id: "channel_authority",
    },
    {
      name: "Enhanced Growth",
      id: "enhanced_growth",
    },
    {
      name: "2. Our YouTube Keywords Research Services",
      id: "our_youtube_keywords_research_services",
    },
    {
      name: "Low Competition",
      id: "low_competition",
    },
    {
      name: "High Volume",
      id: "high_volume",
    },
    {
      name: "CPM / RPM Optimization",
      id: "cpm_rpm_optimization",
    },
    {
      name: "Rising Trend",
      id: "rising_trend",
    },
  ];

  const sectionIds = [
    "why_keyword_research_matters",
    "improved_visibility_discovery",
    "higher_click_through_rates",
    "increased_audience_retention",
    "channel_authority",
    "enhanced_growth",
    "our_youtube_keywords_research_services",
    "low_competition",
    "high_volume",
    "cpm_rpm_optimization",
    "rising_trend",
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
          {/* <div className="mx-5   md:col-span-3 mt-6 ">
            <div className="sticky top-12 ">
              <SideBar liItem={liItem} sectionIds={sectionIds} />
            </div>
          </div> */}
          <div className="w-full mx-auto bg-white min-h-screen md:col-start-4 md:col-span-6 p-2 mb-28 md:mb-40">
            <div className="max-w-[1172px] mx-auto">
              <h1 className="font-Inter font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-12">
                YouTube Keywords Research Services to Leverage Low Competition &
                High Volume Keywords
              </h1>
            </div>
            <div className="max-w-[1172px] mx-auto">
              <div className="flex flex-col justify-center items-start mt-12 px-2">
                <div className="flex flex-col justify-center item-center gap-4 ">
                  <div className="text-[16px] md:text-[20.4px]     font-light leading-[32.4px]  font-Inter space-y-4">
                    <p>
                      Are you tired of struggling to get your YouTube videos
                      noticed? Do you dream of achieving consistent views and
                      building an engaged subscriber base? Look no further!
                    </p>
                    <p>
                      At Dawood Proud, we specialize in YouTube Keywords
                      Research Services that are tailored to leverage low
                      competition and high volume keywords, helping you unlock
                      the full potential of your YouTube channel.
                    </p>
                  </div>
                </div>

                {/* all the content starts here... */}
                <div className="space-y-4 my-12">
                  <h2
                    id="why_keyword_research_matters"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Why Keyword Research Matters for YouTube Success
                  </h2>
                  <div className="text-[16px] md:text-[20.4px] font-light leading-[32.4px] mt-4 font-Inter space-y-4">
                    <div className="mb-4">
                      <h3
                        id="improved_visibility_discovery"
                        className="text-lg md:text-xl font-bold font-Factor_A"
                      >
                        Improved Visibility & Discovery:
                      </h3>
                      <p>
                        By targeting the right keywords, your videos are more
                        likely to appear in YouTube Search Results and
                        Recommendations, increasing your chances of being
                        discovered by a wider audience.
                      </p>
                    </div>

                    <div className="mb-4">
                      <h3
                        id="higher_click_through_rates"
                        className="text-lg md:text-xl font-bold font-Factor_A"
                      >
                        Higher Click-Through Rates:
                      </h3>
                      <p>
                        Well-researched keywords can lead to more compelling
                        video titles and thumbnails, enticing viewers to click
                        on your content.
                      </p>
                    </div>

                    <div className="mb-4">
                      <h3
                        id="increased_audience_retention"
                        className="text-lg md:text-xl font-bold font-Factor_A"
                      >
                        Increased Audience Retention:
                      </h3>
                      <p>
                        When you use the right keywords, you attract viewers who
                        are genuinely interested in your content, leading to
                        higher watch times and more engagement.
                      </p>
                    </div>

                    <div className="mb-4">
                      <h3
                        id="channel_authority"
                        className="text-lg md:text-xl font-bold font-Factor_A"
                      >
                        Channel Authority:
                      </h3>
                      <p>
                        Consistent use of the right keywords can establish your
                        channel as an authoritative source in your particular
                        Niche, further accelerating your growth.
                      </p>
                    </div>

                    <div className="mb-4">
                      <h3
                        id="enhanced_growth"
                        className="text-lg md:text-xl font-bold font-Factor_A"
                      >
                        Enhanced Growth:
                      </h3>
                      <p>
                        As your videos gain more views and engagement, your
                        channel&apos;s overall growth accelerates, making it easier
                        to reach milestones like monetization and subscriber
                        goals.
                      </p>
                    </div>
                  </div>

                  <h2
                    id="our_youtube_keywords_research_services"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Our YouTube Keywords Research Services
                  </h2>
                  <div className="text-[16px] md:text-[20.4px] font-light leading-[32.4px] mt-4 font-Inter space-y-4">
                    <div className="mb-4">
                      <h3
                        id="low_competition"
                        className="text-lg md:text-xl font-bold font-Factor_A"
                      >
                        Low Competition:
                      </h3>
                      <p>
                        We identify niches with lower competition, giving you a
                        better chance to stand out and grow your audience.
                      </p>
                    </div>

                    <div className="mb-4">
                      <h3
                        id="high_volume"
                        className="text-lg md:text-xl font-bold font-Factor_A"
                      >
                        High Volume:
                      </h3>
                      <p>
                        Our services focus on niches with a substantial viewer
                        base, ensuring that your content has the potential to
                        reach a wide audience.
                      </p>
                    </div>

                    <div className="mb-4">
                      <h3
                        id="cpm_rpm_optimization"
                        className="text-lg md:text-xl font-bold font-Factor_A"
                      >
                        CPM / RPM Optimization:
                      </h3>
                      <p>
                        We consider the CPM (Cost Per Mille) and RPM (Revenue
                        Per Mille) potential of your chosen niche, helping you
                        maximize your earnings.
                      </p>
                    </div>

                    <div className="mb-4">
                      <h3
                        id="rising_trend"
                        className="text-lg md:text-xl font-bold font-Factor_A"
                      >
                        Rising Trend:
                      </h3>
                      <p>
                        We keep an eye on trends and select niches with a
                        growing audience, ensuring that your channel can benefit
                        from increased interest over time.
                      </p>
                    </div>
                  </div>

                  <div className="text-[16px] md:text-[20.4px] font-light leading-[32.4px] mt-4 font-Inter space-y-4">
                    <p>
                      Don&apos;t let indecision hinder your YouTube journey. Let us
                      help you uncover the niche that will propel you to
                      success.
                    </p>
                    <p>
                      Ready to take the plunge? Contact us today for a{" "}
                      <Link href="/consultation" className="text-blue-500">
                        Free Consultation
                      </Link>{" "}
                      and let&apos;s revolutionize your YouTube journey together!
                    </p>
                  </div>

                  <ConsultButton text="Elevate your YouTube Game"/>
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
