import React from 'react'
import Footer from "../../../components/common/Footer"
import Navbar from "../../../components/common/Navbar"
import Tab from "../../../components/Careers/CareersTab"
import Image from 'next/image'

function LegalInfo() {

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
            link: "/careers"
        },
        {
            label: "Logo Kit",
            link: "/logo-Kit"
        },
        {
            label: "Legal Info",
            link: "/legal-info"
        }
    ];


    return (
        <div className='w-full min-h-screen font-Inter text-white bg-white h-full'>
            <div className="w-full bg-white text-[black]">
                <Navbar bg_color={"white"} />
            </div>

            <div className="grid grid-cols-1  md:grid-cols-12  justify-center items-center mx-auto max-w-full  w-full min-h-[400px]  bg-[#001b47]">
                <div className=" text-white md:col-start-3 md:col-span-5 flex flex-col items-center justify-center text-center md:text-left mt-8 xl:mt-1">
                    <h1 className='text-[24px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-bold xl:leading-[60px] font-Factor_A max-w-3xl '>
                        <span className="text-[#01b88d]">  Legal Information </span>

                        <br />Data Protection Policy



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


                <div className='flex flex-col justify-center items-start text-[#333333] font-Inter gap-4 mx-auto  md:ml-[4%] lg:ml-[15%] p-6 md:p-8 max-w-[1172px]'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-semibold text-[22px] text-[#054ada] hover:text-[#FF8800]'>Terms & Conditions</h1>
                        <p className='font-normal text-[16px]'>
                            This details Dawood Proud&#39;s Terms of Service on Parties&#39; Responsibilities, Rights, Privacy, Subscriptions, Information Usage, Cancellation of Service and so on.
                            <br />
                            <span className='text-[gray]/80'>Last Modified: February 25, 2023</span>
                        </p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-semibold text-[22px] text-[#054ada] hover:text-[#FF8800]'>Privacy Policy</h1>
                        <p className='font-normal text-[16px]'>
                            This details the Types of Data that Our Team collects and the mode and place of processing this Data.
                            <br />
                            <span className='text-[gray]/80'> Last Modified: December 11, 2022</span>

                        </p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-semibold text-[22px] text-[#054ada] hover:text-[#FF8800]'>Data Processing Addendum</h1>
                        <p className='font-normal text-[16px]'>
                            This details the Processing of Customer Personal Data by our Company.
                            <br />
                            <span className='text-[gray]/80'>Last Modified: March 18, 2021</span>

                        </p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-semibold text-[22px] text-[#054ada] hover:text-[#FF8800]'>Security Measures</h1>
                        <p className='font-normal text-[16px]'>
                            This details the processes and measures taken by our Company to maintain the overall security of your YouTube Channel.
                            <br />
                            <span className='text-[gray]/80'> Last Modified: April 29, 2023</span>

                        </p>
                    </div>

                </div>
            </div>


            <Footer />
        </div >
    )
}



export default LegalInfo