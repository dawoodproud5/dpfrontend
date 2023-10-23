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
        heading2={`Unlock Your YouTube  Potential with a Certified YouTube Strategist`}
        para={`Get a comprehensive channel evaluation and Tailored Content Strategy that help you unlock the secrets to YouTube Channel Growth , connect with your audience, and build your brand on this exciting platform. Ready to take your channel to new heights? `}
        btntext={`Let${"'"}s get started`}
        link={"/services/youtube-consultation"}
        images={"/Images/Services/YouTube Consultation.svg"}
        bgColor={""}
      />

      <ServiceCard
        heading={"YouTube SEO"}
        heading2={"Supercharge Your Videos with YouTube SEO Services"}
        para={`Get Your Videos Ranked on YouTube Search Results to drive consistent traffic and engaged subscribers. Optimize your videos with winning strategies to dominate the world${"'"}s second-largest search engine.`}
        btntext={"Dominate YouTube Search Now"}
        bgColor={""}
        link={"/services/youtube-seo"}
        images={"/Images/Services/YouTube_SEO Service.png"}
      />

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
      />

      <ServiceCard
        heading={"YouTube Keywords Research"}
        heading2={"Crush the Competition with Winning YouTube Keywords"}
        para={`Boost your YouTube channel${"'"}s organic growth and visibility by using winning keywords having high search volume, low competition, and rising trends.`}
        btntext={"Elevate your YouTube Game"}
        bgColor={""}
        link={"/services/youtube-keyword-research"}
        images={"/Images/Services/YouTube Keywords Research.png"}
      />

      {/* Automated  */}
      <ServiceCard
        heading={"YouTube Automation"}
        heading2={"Earn passive income with Faceless YouTube videos."}
        para={`Start your Faceless Automated YouTube channel with our YouTube Automation Services! From niche selection to channel setup, faceless video creation, and channel management, we${"'"}ve got you covered.`}
        btntext={"Get started today"}
        bgColor={""}
        link={"/services/youtube-automation"}
        images={"/Images/Services/YouTube Automation.svg"}
      />

      {/* YouTube niche selection */}
      <ServiceCard
        heading={"YouTube Niches "}
        heading2={
          "Get YouTube Niches with Low Competition for Your Target Audience"
        }
        para={`Uncover profitable YouTube Automation Niches with low competition and Niches for YouTube Shorts that perfectly align with your target audience.`}
        btntext={"Get started today"}
        bgColor={""}
        link={"/services/youtube-niche-with-low-competition"}
        images={"/Images/Services/YouTube Niches with Low Competition.svg"}
      />

      {/* channle optimization */}

      <ServiceCard
        heading={"YouTube Channel Optimization"}
        heading2={
          "YouTube Channel Optimization Service to Enhance Organic Growth & Visibility"
        }
        para={`Boost your YouTube channel${"'"}s organic visibility and rankings with our expert YouTube Optimization Service. Unlock the power of organic reach & Engagement on the Channel.`}
        btntext={"Skyrocket Your Profits Today"}
        bgColor={""}
        link={"/services/youtube-channel-optimization"}
        images={"/Images/Services/YouTube Channel Optimization Services.png"}
      />

      <ServiceCard
        heading={"YouTube Channel Management"}
        heading2={
          "YouTube Management Agency: Your Success Partner"
        }
        para={`Boost your YouTube channel${"'"}s organic visibility and rankings with our expert YouTube Management Services. Unlock the power of organic reach & Engagement on the Channel.`}
        btntext={"Skyrocket Your Profits Today"}
        bgColor={""}
        link={"/services/youTube-channel-management"}
        images={"/Images/Services/YouTube Channel Management Services.svg"}
      />
    </div>
  );
}

export default ServiceCards;
