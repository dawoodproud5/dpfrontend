import React, { Fragment } from 'react'
import Head from 'next/head';

import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import { Images } from '../../../next.config';
import Image from 'next/image';
import PorftfoliCard from '../../../components/Portfolio/PortfoliCard';
import TwitterTweet from '../../../components/Portfolio/TwitterTweet';
import SideBar from '../../../components/Portfolio/SiderBar';
import PortfoliPage from "../../../components/Portfolio/PorfolioPage"
import InstagramPost from '../../../components/Portfolio/InstagramPost';

function Portfolio() {

    const liItem = [
        {
            "name": "1. Alux.com",
            "id": "#Emil_Anton"
        },
        {
            "name": "2. Watch Mojo",
            "id": "#Ashkan_Karbasfrooshan"
        },
        {
            "name": "3. ZHC Crafts",
            "id": "#Zach_Hsieh"
        },
        {
            "name": "4. Linus Tech Tips",
            "id": "#Linus_Sebastian"
        },
        {
            "name": "5. EmmyMade",
            "id": "#Emmeline_Mayline"
        },
        {
            "name": "6. AutoTrader",
            "id": "#Ian_Plummer"
        },

    ];

    const sectionIds = ["Emil_Anton", "Ashkan_Karbasfrooshan", "Zach_Hsieh", "Linus_Sebastian", "Emmeline_Mayline", "Ian_Plummer", "Marton_Barcza"];
    return (
        <div className='w-full min-h-screen font-Inter text-white bg-white h-full'>
            <Head>
                <title>Yotube SEO</title>
                <meta name="description" content="This is a description of my page." />
            </Head>


            <div className='w-full bg-white text-[black]'>
                <Navbar bg_color={"white"} position={"sticky"} />
            </div>

            <div className="grid grid-cols-1  md:grid-cols-12  justify-center items-center mx-auto max-w-full  w-full min-h-[400px]  bg-[#001b47]">
                <div className=" text-white md:col-start-4 md:col-span-5 flex flex-col items-center justify-center text-center md:text-left pt-8 xl:pt-1">
                    <h1 className='text-[24px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-bold xl:leading-[60px] font-Factor_A max-w-xl '>
                        <span className="text-[#41b0ff]"> We love our customers </span>
                        And we&#39;re flattered to know they love us!
                    </h1>
                </div>
                <div className="w-[100%] h-[150px] md:h-[200px] lg:h-[250px] relative md:col-start-9 md:col-span-2 pb-4">
                    <Image
                        src="/Images/ServicesheroSVGs/YouTube Growth Services.svg"
                        fill
                        alt="youtube-niche-with-low-competition"
                        className="object-contain"
                    ></Image>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-12  bg-white  mx-auto max-w-full  w-full'>
                <div className=' mx-5  md:col-span-3 mt-6 flex flex-col md:items-end'>
                    <div className="sticky top-12">
                        <SideBar liItem={liItem} sectionIds={sectionIds} />
                    </div>
                </div>
                <div className='sm:col-start-4 sm:col-span-7 mx-auto '>
                    <PortfoliPage />
                </div>
            </div>

            <Footer />


        </div>

    )
}

export default Portfolio