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
        <title>YouTube Promotion / Ads</title>
        <meta
          name="description"
          content="This is the YouTube Promotion / Ads page description."
        />
        <meta property="og:title" content="YouTube Promotion / Ads" />
        <meta
          property="og:description"
          content="This is the YouTube Promotion / Ads page description."
        />
        <meta property="og:image" content="path/to/og/image" />
      </Head>
    </div>
  );
}

export default YoutubeConsutation;
