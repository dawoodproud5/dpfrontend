import React from 'react'
import Image from 'next/image'
import CEOCard from '../../../components/TeamSection/CeoCard'
import Navbar from '../../../components/common/Navbar'
import Footer from '../../../components/common/Footer'
import Tab from "../../../components/Careers/CareersTab"
import { relative } from 'path'
import TeamMembers from '../../../components/TeamSection/TeamMembers'


const tabs = [
    {
        label: "Who we are",

        link: "/about-us"
    },
    {
        label: "Our Team",
        link: "/team"
    },
    {
        label: "Jobs",
        link: "/jobs"
    },
    {
        label: "Media Kit",
        link: "/media-kit"
    },
    {
        label: "Legal Info",
        link: "/legal-info"
    }
];

function TeamPage() {
    return (
        <div className='w-full font-Inter bg-white h-full'>
            <div className="w-full bg-white">
                <Navbar bg_color={"white"} />
            </div>

            <div className="grid grid-cols-1  md:grid-cols-12  justify-center items-center mx-auto max-w-full  w-full min-h-[400px]  bg-[#001b47]">
                <div className=" text-white md:col-start-2 md:col-span-5 flex flex-col items-center justify-center text-center md:text-left mt-8 xl:mt-1">
                    <h1 className='text-[24px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-bold xl:leading-[60px] font-Factor_A max-w-xl '>
                        <span className="text-[#01b88d]">  We Think big, </span>
                        <br />start small,
                        <br />and move fast
                    </h1>
                </div>
                <div className="w-[100%] h-[150px] md:h-[200px] lg:h-[250px] relative md:col-start-9 md:col-span-2 mb-4">
                    <Image
                        src="/Images/ServicesheroSVGs/youtube-niche-with-low-competition.svg"
                        fill
                        alt="youtube-niche-with-low-competition"
                        className="object-contain"
                    ></Image>
                </div>
            </div>
            <div className='w-full flex flex-col justify-center items-start max-w-[1172px] space-y-10  mx-auto mb-24'>
                <div className='ml-[4%] md:ml-[8%] lg:ml-[8%] '>
                    <Tab tabs={tabs} />
                </div>

                <div className='mx-4 sm:mx-2'>
                    <TeamMembers />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default TeamPage