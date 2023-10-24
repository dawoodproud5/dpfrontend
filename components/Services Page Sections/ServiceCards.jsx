import React from "react";
import ServiceCard from "./ServiceCard";
import Link from "next/link";
import ReviewSlider from "../../components/ReviewSlider/RatingsSlider";
import TrustPilotReview from "../TrustPilot/TrustPilotReview";
import YtSlider from "../YtSlider/Slider";
import { style } from "@mui/system";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

function ServiceCards() {
  return (
    <div className="flex flex-col  md:space-y-8 ">
      <YtSlider />
      <ServiceCard
        heading={"Certified YouTube Consultant"}
        heading2={`Get Free Consultation with YouTube Experts`}
        para={`Elevate your YouTube journey with our Certified YouTube Consultation. Get personalized guidance and tailored content strategy for channel growth and success. `}
        btntext={`Let${"'"}s get started`}
        link={"/services/youtube-consultation"}
        images={"/Images/Services/YouTube Consultation.svg"}
        bgColor={""}
      />

      <ServiceCard
        heading={"YouTube SEO Services"}
        heading2={"Get Videos Ranked in YouTube Search Results"}
        para={`Gain a competitive edge in the crowded world of YouTube by ranking your videos to the top of YouTube search results for higher visibility and viewer engagement.`}
        btntext={"Dominate YouTube Search Now"}
        bgColor={""}
        link={"/services/youtube-seo"}
        images={"/Images/Services/YouTube SEO sevice.svg"}
      />
      {/* 
      <ServiceCard
        heading={"YouTube Content Creation"}
        heading2={
          "YouTube Video Creation Services to Maximize Your YouTube Success"
        }
        para={`Reach your YouTube Goals with our Video Creation Services. Get high-quality, engaging faceless YouTube Content from leading YouTube Video Production Company.`}
        btntext={"Elevate your YouTube Game"}
        bgColor={""}
        link={"/services/youtube-video-production"}
        images={"/Images/Services/YouTube Content Creation.png"}
      /> */}

      <ServiceCard
        heading={"YouTube Keywords Research"}
        heading2={"Get Consist Views & Engaged Subscribers"}
        para={`Boost your channel${"'"}ss visibility and growth by Targeting the right keywords that will make your videos stand out in search results and recommendations.`}
        btntext={"Elevate your YouTube Game"}
        bgColor={""}
        link={"/services/youtube-keyword-research"}
        images={"/Images/Services/YouTube Keywords Research.png"}
      />

      {/* Automated  */}
      <ServiceCard
        heading={"YouTube Automation Services"}
        heading2={"Earn passive income with Faceless YouTube videos."}
        para={`Grow your channel Hands-Free, because from niche selection to channel setup, to faceless video creation, and channel management, we've got you covered.`}
        btntext={"Get started today"}
        bgColor={""}
        link={"/services/youtube-automation"}
        images={"/Images/Services/YouTube Automation.svg"}
      />

      {/* YouTube niche selection */}
      <ServiceCard
        heading={"YouTube Niche Research"}
        heading2={"Get Low Competition & Profitable Niches"}
        para={`Your YouTube journey begins with niche selection. We guide you to discover niches tailored to your audience, ensuring low competition and high growth potential.`}
        btntext={"Get started today"}
        bgColor={""}
        link={"/services/youtube-niche-with-low-competition"}
        images={"/Images/Services/YouTube Niches with Low Competition.svg"}
      />

      {/* channle optimization */}

      <ServiceCard
        heading={"YouTube Channel Optimization"}
        heading2={"Boost Organic Growth & Visibility"}
        para={`Improve search engine rankings, organic reach, viewer engagement, branding, and monetization opportunities.`}
        btntext={"Skyrocket Your Profits Today"}
        bgColor={""}
        link={"/services/youtube-channel-optimization"}
        images={"/Images/Services/YouTube Channel Optimization Services.png"}
      />

      <ServiceCard
        heading={"YouTube Channel Management Services"}
        heading2={"Take Your Channel to the Next Level"}
        para={`Maximize subscribers, boost revenue, and elevate viewer engagement with our tailored services. Let our YouTube experts guide you to success with a customized strategy.`}
        btntext={"Skyrocket Your Profits Today"}
        bgColor={""}
        link={"/services/youTube-channel-management"}
        images={"/Images/Services/YouTube Channel Management Services.svg"}
      />
    </div>
  );
}

export default ServiceCards;
