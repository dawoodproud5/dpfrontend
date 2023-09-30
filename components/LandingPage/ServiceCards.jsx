import React from 'react'
import ServiceCard from './ServiceCard'
import Link from 'next/link'
import ReviewSlider from "../ReviewSlider/RatingsSlider";
import TrustPilotReview from '../TrustPilot/TrustPilotReview';
import YtSlider from "../YtSlider/Slider"
import Clients_review_item from '../Clients_Review/Clients_review_item';
import Client_Review from '../Clients_Review/Clients_review_slider';
import ServiceCard2 from './ServiceCard2';
import ServiceCard3 from './ServiceCar3';
import { FiTarget } from "react-icons/fi"
import { FaAngleDoubleRight } from "react-icons/fa"
import { VscGraph } from "react-icons/vsc"
import CounterSection from "./CounterSection"

function ServiceCards() {
    return (
        <div className='flex flex-col '>
            <h2 className='max-w-auto md:max-w-[580px] font-extrabold text-[28px] md:text-[38px] lg:text-[56px] text-center mx-auto font-Inter md:mb-16'>
                Our 4 Step Process
            </h2>
            <div className="flex flex-col md:gap-4 ">

                <ServiceCard icon={<FiTarget color='white' size={30} />} text={"Your Goals"} bg={"bg-[#001b47]"}
                    heading2={`It starts with you.`}
                    para={`Our process always starts with clear understanding of what you want to accomplish with YouTube, whether that’s brand awareness, lead generation or YouTube Channel Growth`}
                    btntext={`Let${"'"}s get started`} link={"/services/youtube-consultation"} images={"/Images/Services/Starts with You.svg"} />


                <ServiceCard3 icon={<FaAngleDoubleRight color='white' size={30} />} text={"Comprehensive Analysis"} bg={"bg-[#f8cc23]"}
                    heading2={`YouTube Channel Audit.`}
                    para={`Performing a YouTube audit will give you clear action points and help you focus on fixing any glaring issues while baselining your performance.`}
                    btntext={`Let${"'"}s get started`} link={"/services/youtube-consultation"} images={"/Images/Services/Channel Evaluation Audit.svg"} />

                <ServiceCard2 icon={<VscGraph color='white' size={25} />} text={"Your Growth"} bg={"bg-[#1999d4]"}
                    heading2={`Winning Content Strategy.`}
                    para={`Get a tailored blueprint that positions your YouTube journey for success, with actionable measures to help you achieve your specific goals.`}
                    btntext={`Let${"'"}s get started`} link={"/services/youtube-consultation"} images={"/Images/Services/YouTube Channel Optimization.svg"} />

                <ServiceCard3 icon={<FiTarget color='white' size={30} />} text={"Your Results"} bg={"bg-[#01b88d]"}
                    heading2={`Optimize and Grow.`}
                    para={`Collaborate to eliminate hurdles and fine-tune your YouTube content strategy, ensuring steady, sustainable & exponential YouTube Growth.`}
                    btntext={`Let${"'"}s get started`} link={"/services/youtube-consultation"} images={"/Images/Services/YouTube Channel Optimization.png"} />

                <div className="py-24">
                    <CounterSection />
                </div>

                <Client_Review />

            </div>
        </div>
    )
}

export default ServiceCards