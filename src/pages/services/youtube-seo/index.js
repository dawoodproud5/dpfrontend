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
      name: "1. Why YouTube SEO Matters",
      id: "why_youtube_seo_matters",
    },
    {
      name: "2. Our 6-Step YouTube SEO Process",
      id: "our_6_step_youtube_seo_process",
    },
    {
      name: "2.1 Initial Consultation",
      id: "initial_consultation",
    },
    {
      name: "2.2 Keywords Research",
      id: "keywords_research",
    },
    {
      name: "2.3 Title Optimization",
      id: "title_optimization",
    },
    {
      name: "2.4 Description Optimization",
      id: "description_optimization",
    },
    {
      name: "2.5 High-Rank Tags",
      id: "high_rank_tags",
    },
    {
      name: "2.6 Internal Linking and External Linking",
      id: "linking",
    },
    {
      name: "2.7 Analytics and Performance Tracking",
      id: "analytics_and_performance_tracking",
    },
    {
      name: "3. Ready to Get Started?",
      id: "ready_to_get_started",
    },
  ];

  const sectionIds = [
    "why_youtube_seo_matters",
    "our_6_step_youtube_seo_process",
    "initial_consultation",
    "keywords_research",
    "title_optimization",
    "description_optimization",
    "high_rank_tags",
    "linking",
    "analytics_and_performance_tracking",
    "ready_to_get_started",
  ];

  return (
    <div className="">
      <Head>
        <title>
          YouTube SEO Services to Rank High in YouTube Search Results
        </title>
        <meta
          name="description"
          content="YouTube SEO Agency to Boost your YouTube video rankings. Let our Experts help you gain Consistent Views and Engaged Subscribers."
        />
        <meta
          name="keywords"
          content="YouTube SEO Services, YouTube SEO Expert, YouTube SEO Agency, YouTube SEO Company, YouTube Video SEO Services"
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
            <h3 className="col-start-1 sm:col-start-3 col-span-5 font-Inter font-light text-[14px] sm:text-[14px] ml-3 sm:pl-2">
              <Link href={"/services"}>Services</Link>{" "}
              <span className="text-[#41b0ff]">/</span>{" "}
              <Link href={"/services/youtube-seo"}>Youtube SEO</Link>
            </h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="grid grid-cols-1  sm:grid-cols-12  justify-center items-center mx-auto max-w-full  w-full  ">
              <div className=" text-white sm:col-start-4 sm:col-span-5 text-left mt-8 xl:mt-1 pr-10 sm:pr-0 pl-3 sm:pl-0">
                <div className="flex flex-col items-start justify-start gap-2">
                  <h1 className=" text-[24px] md:text-[32px] lg:text-[36px] xl:text-[44px] font-bold xl:leading-[50px] font-Factor_A  max-w-2xl pr-8 py-[12px]">
                    <span className="text-[#41b0ff]">
                      Best YouTube SEO Services{" "}
                    </span>
                    to Rank your Videos at the Top of YouTube Search Results
                  </h1>

                  <div className="font-Inter font-light text-[14px] sm:text-[14px]  flex gap-4 sm:gap-6 mb-2 ml-0 sm:ml-2 pt-5 text-[white]/80">
                    <p>Team DP</p>
                    <p>April 11, 2023</p>
                    <p>3 min read</p>
                  </div>
                </div>
              </div>
              <div className="w-[100%] h-[200px] sm:h-[200px] lg:h-[250px] relative sm:col-start-9 sm:col-span-2 mb-4">
                <Image
                  src="/Images/Services/YouTube_SEO Service.png"
                  fill
                  alt="Youtube_SEO"
                  className="object-contain"
                ></Image>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12  bg-white  mx-auto max-w-full  w-full ">
          {/* sidebar here  */}
          {/* <div className="mx-5  md:col-span-3 mt-6 ">
            <div className="sticky top-12 ">
              <SideBar liItem={liItem} sectionIds={sectionIds} />
            </div>
          </div> */}
          <div className="w-full mx-auto bg-white min-h-screen md:col-start-4 md:col-span-6 p-2 mb-28 md:mb-40">
            <div className="max-w-[1172px] mx-auto">
              <div className="flex flex-col justify-center items-start mt-12 px-2">
                <div className="flex flex-col justify-center item-center gap-4 mb-3">
                  <div className="text-[16px] md:text-[20.4px]     font-light leading-[32.4px]  font-Inter space-y-4">
                    <p>
                      Welcome to Dawood Proud, your trusted YouTube SEO Agency.
                      Are you struggling to get your videos noticed in the
                      crowded world of YouTube?
                    </p>{" "}
                    <p>
                      Our YouTube SEO Services are tailored to help you dominate
                      the platform, ranking your videos at the top of YouTube
                      search results.
                    </p>
                  </div>

                  <h3 className="text-[24px] md:text-[36px] xl:text-[42px] font-semibold font-Factor_A">
                    Why Choose Our YouTube Video Production Services:
                  </h3>
                </div>
                {/* all the content starts here... */}
                <div className="text-[16px] md:text-[20.4px] font-light leading-[32.4px] mt-4 font-Inter space-y-4">
                  <h2
                    id="why_youtube_seo_matters"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Why YouTube SEO Matters
                  </h2>
                  <p>
                    YouTube is the World&apos;s Second Largest search engine in the
                    world, with billions of users searching for content every
                    day. To stand out in this competitive landscape, it&apos;s
                    essential to optimize your videos for search engines and
                    user discovery. That&apos;s where our YouTube SEO Services come
                    into play.
                  </p>

                  <h2
                    id="our_6_step_youtube_seo_process"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Our 6-Step YouTube SEO Process
                  </h2>
                  <div className="text-[16px] md:text-[20.4px] font-light leading-[32.4px] mt-4 font-Inter space-y-4">
                    <div className="mb-4">
                      <h3
                        id="initial_consultation"
                        className="text-lg md:text-xl font-bold font-Factor_A"
                      >
                        Initial Consultation
                      </h3>
                      <p>
                        We begin by understanding your goals and objectives.
                        During our initial consultation, we&apos;ll discuss your
                        target audience, content niche, and what you hope to
                        achieve with your YouTube channel. This step helps us
                        tailor our YouTube SEO strategy to your specific needs.
                      </p>
                    </div>

                    <div className="mb-4">
                      <h3
                        id="keywords_research"
                        className="text-lg md:text-xl font-bold font-Factor_A"
                      >
                        Keywords Research
                      </h3>
                      <p>
                        Our team conducts comprehensive YouTube keyword research
                        to identify high-volume, low-competition keywords
                        relevant to your content. These keywords are crucial for
                        boosting your video&apos;s visibility in YouTube search
                        results, helping you attract a larger audience.
                      </p>
                    </div>

                    <div className="mb-4">
                      <h3
                        id="title_optimization"
                        className="text-lg md:text-xl font-bold font-Factor_A"
                      >
                        Title Optimization
                      </h3>
                      <p>
                        We craft compelling titles that not only capture
                        viewers&apos; attention but also, we incorporate target High
                        Volume Keywords having low competition and rising
                        trends. This strategic approach ensures your videos are
                        more discoverable in YouTube search results, driving
                        increased clicks and engagement.
                      </p>
                    </div>

                    <div className="mb-4">
                      <h3
                        id="description_optimization"
                        className="text-lg md:text-xl font-bold font-Factor_A"
                      >
                        Description Optimization
                      </h3>
                      <p>
                        We will optimize YouTube Video Description based on
                        Variation of Keywords and Long Tail keywords. Also, we
                        include relevant High rank hashtags. These optimizations
                        ensure that the YouTube algorithm understands the
                        context of your video, improving its discoverability
                        among your target audience.
                      </p>
                    </div>

                    <div className="mb-4">
                      <h3
                        id="high_rank_tags"
                        className="text-lg md:text-xl font-bold font-Factor_A"
                      >
                        High-Rank Tags
                      </h3>
                      <p>
                        To boost discoverability, we strategically add
                        high-ranking video tags. These tags are aligned with
                        your target keywords and niche, making your content more
                        visible in YouTube search results and recommendations.
                      </p>
                    </div>

                    <div className="mb-4">
                      <h3
                        id="linking"
                        className="text-lg md:text-xl font-bold font-Factor_A"
                      >
                        Internal Linking and External Linking
                      </h3>
                      <p>
                        Our YouTube SEO strategy includes both internal and
                        external linking. Internal linking helps improve viewer
                        engagement by guiding them to other relevant videos on
                        your channel. External linking acts as a form of
                        backlinking, enhancing the authority and credibility of
                        your videos.
                      </p>
                    </div>

                    <div className="mb-4">
                      <h3
                        id="analytics_and_performance_tracking"
                        className="text-lg md:text-xl font-bold font-Factor_A"
                      >
                        Analytics and Performance Tracking
                      </h3>
                      <p>
                        We continually monitor the performance of your videos,
                        their Audience Retention and Engagement using advanced
                        analytics tools. This data-driven approach allows us to
                        refine our YouTube SEO Strategies, adapt to changing
                        trends, and ensure consistent and sustainable growth
                        over time.
                      </p>
                    </div>
                  </div>

                  <h2
                    id="ready_to_get_started"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Ready to Get Started?
                  </h2>
                  <p>
                    Contact us today to discuss your needs and objectives.
                    Whether you&apos;re a budding content creator or a seasoned
                    channel owner, our YouTube SEO services are here to help you
                    thrive.
                  </p>
                </div>
                <ConsultButton text="Dominate YouTube Search Now"/>
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
