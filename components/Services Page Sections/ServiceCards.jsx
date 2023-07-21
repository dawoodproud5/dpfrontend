import React from 'react'
import ServiceCard from './ServiceCard'
import Link from 'next/link'
import ReviewSlider from "../../components/ReviewSlider/RatingsSlider";
import TrustPilotReview from '../TrustPilot/TrustPilotReview';
import YtSlider from "../YtSlider/Slider"
import { style } from '@mui/system';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';

function ServiceCards() {
    // function ServiceCard({ heading, heading2, para, btntext, bgColor, link, images }) {
    //     return (
    //         <div className={`w-full min-h-[100vh] font-Inter text-[black] relative ${bgColor}`}>
    //             <div className="w-full p-2 mt-6 md:mt-0">
    //                 <div className="w-full max-w-[1172px]  flex flex-col items-center justify-center  mx-auto gap-3 md:gap-8 mt-12">
    //                     <h2 className=' max-w-auto md:max-w-[580px] font-extrabold text-[28px] md:text-[38px] lg:text-[38px] text-center  '>{heading}</h2>
    //                     <div className='flex flex-col md:flex-row justify-center md:justify-center md:items-center '>
    //                         <div className='flex-1 mb-6 md:mb-0 p-2 sm:p-6 md:p-2'>
    //                             <Fade delay={100} duration={1000} triggerOnce={true} cascade={true} direction="left"  >
    //                                 <div className='w-full h-[300px] md:h-[400px] relative drop-shadow-2xl '>
    //                                     <Image src={images} alt="" fill className='object-contain ' />
    //                                 </div>
    //                             </Fade>
    //                         </div>

    //                         <div className='w-full flex-1 '>
    //                             <div className='px-[5%] md:pl-[15%] md:pr-[7%] space-y-5 flex flex-col justify-center !items-center md:items-start'>
    //                                 <h3 className="font-extrabold text-[24px] md:text-[30px] lg:text-[32px] text-center md:text-left leading-[43px]">{heading2}</h3>
    //                                 <p className='text-[black] font-light text-[16px] md:text-[17px] lg:text-[18px] text-center md:text-left leading-[25px]'>{para}</p>
    //                                 <div className=' self-center md:self-start'>
    //                                     <Link rel="stylesheet" href={`${link}`}>
    //                                         <button className='flex justify-center items-center font-bold mt-1 px-2 sm:px-4  py-2 sm:py-3 gap-1  sm:gap-2 rounded-full text-xs sm:text-base bg-[#0077cc] hover:bg-[#3b82f6] text-white'>
    //                                             {btntext}
    //                                             <svg fill="none" viewBox="0 0 20 21" width="20" className="css-orecyf">
    //                                                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.166 10.5h11.667M10 4.667l5.833 5.833L10 16.334"></path>
    //                                             </svg>
    //                                         </button>
    //                                     </Link>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div >
    //     )
    // }
    return (
        <div className="flex flex-col  md:space-y-8 ">
            <YtSlider />
            <ServiceCard heading={"Certified YouTube Consultant"}
                heading2={`Unlock Your YouTube  Potential with a Certified YouTube Strategist`}
                para={`Get a comprehensive channel evaluation and Tailored Content Strategy that help you unlock the secrets to YouTube Channel Growth , connect with your audience, and build your brand on this exciting platform. Ready to take your channel to new heights? `}
                btntext={`Let${"'"}s get started`} link={"/services/youtube-consultation"} images={"/Images/Services/YouTube Consultation.svg"} bgColor={""} />

            <ServiceCard heading={"YouTube SEO"}
                heading2={"Supercharge Your Videos with YouTube SEO Services"}
                para={`Get Your Videos Ranked on YouTube Search Results to drive consistent traffic and engaged subscribers. Optimize your videos with winning strategies to dominate the world${"'"}s second-largest search engine.`}
                btntext={"Dominate YouTube Search Now"} bgColor={""} link={"/services/youtube-seo"} images={"/Images/Services/YouTube_SEO Service.png"} />

            <ServiceCard heading={"YouTube Content Creation"}
                heading2={"YouTube Video Creation Services to Maximize Your YouTube Success"}
                para={`Reach your YouTube Goals with our Video Creation Services. Get high-quality, engaging faceless YouTube Content from leading YouTube Video Production Company.`}
                btntext={"Elevate your YouTube Game"} bgColor={""} link={"/consultation"} images={"/Images/Services/YouTube Content Creation.png"} />

            {/* rating of the gogle clietns review section */}

            {/* <ReviewSlider /> */}


            {/* </div> */}


            <ServiceCard heading={"YouTube Keywords Research"}
                heading2={"Crush the Competition with Winning YouTube Keywords"}
                para={`Boost your YouTube channel${"'"}s organic growth and visibility by using winning keywords having high search volume, low competition, and rising trends.`}
                btntext={"Elevate your YouTube Game"} bgColor={""} link={"/services/youtube-keyword-research"} images={"/Images/Services/YouTube Keywords Research.png"} />



            {/* Automated  */}
            <ServiceCard heading={"YouTube Automation"}
                heading2={"Earn passive income with Faceless YouTube videos."}
                para={`Start your Faceless Automated YouTube channel with our YouTube Automation Services! From niche selection to channel setup, faceless video creation, and channel management, we${"'"}ve got you covered.`}
                btntext={"Get started today"} bgColor={""} link={"/services/youtube-automation"} images={"/Images/Services/YouTube Automation.svg"} />

            {/* <div className="bg-cover bg-center bg-[url('/Images/blob_bg_2.png')]"> */}

            {/* YouTube niche selection */}
            <ServiceCard heading={"YouTube Niches "}
                heading2={"Get YouTube Niches with Low Competition for Your Target Audience"}
                para={`Uncover profitable YouTube Automation Niches with low competition and Niches for YouTube Shorts that perfectly align with your target audience.`}
                btntext={"Get started today"} bgColor={""} link={"/services/youtube-niche-with-low-competition"} images={"/Images/Services/YouTube Niches with Low Competition.svg"} />

            {/* channle optimization */}


            <ServiceCard heading={"YouTube Channel Optimization"}
                heading2={"YouTube Channel Optimization Service to Enhance Organic Growth & Visibility"}
                para={`Boost your YouTube channel${"'"}s organic visibility and rankings with our expert YouTube Optimization Service. Unlock the power of organic reach & Engagement on the Channel.`}
                btntext={"Skyrocket Your Profits Today"} bgColor={""} link={"/services/youtube-channel-optimization"} images={"/Images/Services/YouTube Channel Optimization.png"} />

            {/* <ServiceCard heading={"YouTube Monetization"}
                heading2={"Get your Channel Monetized with Organic Monetization Strategies"}
                para={`Monetize your YouTube channel sustainably with a winning Monetization Strategies. Boost your earnings and maximize your content${"'"}s value without harmful promotions that can hurt your channel${"'"}s organic growth.`}
                btntext={"Skyrocket Your Profits Today"} bgColor={""} link={"/services/youtube-monetization"} images={"/Images/Services/YouTube Monetization.png"} /> */}

            {/* <ServiceCard heading={"YouTube Promotion Services "}
                heading2={"Captivate Your Ideal Audience & Skyrocket Leads with Organic Promotion"}
                para={"Maximize Your YouTube Potential with our Organic YouTube Promotion Services. Effectively target and engage with the right audience to not only Grow your YouTube Channel but also to Generate Leads and boost your online presence."}
                btntext={"Promote your Channel Now"} bgColor={""} link={"/services/youtube-promotion"} images={"/Images/Services/YouTube Promotion_1.png"} /> */}


            {/* <ServiceCard heading={"Overall YouTube Channel Management"}
                heading2={"Level Up Your YouTube Game with Expert Growth Management"}
                para={`Our expert strategies and optimization techniques are the secret sauce to skyrocketing your subscribers and engagement. Let${"'"}s unleash your channel${"'"}s full potential and dominate the online space!`}
                btntext={"Let us Help you Grow"} bgColor={""} link={"/services/youtube-channel-managment"} images={"/Images/Services/Overall YouTube Channel Management.png"} /> */}

            {/* <TrustPilotReview /> */}

        </div>

    )
}

export default ServiceCards