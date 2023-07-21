import React, { Fragment } from "react";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import Head from "next/head";
import ServiceCards from "../../../components/Services Page Sections/ServiceCards";
import Image from "next/image";

function ServicesPage() {
  return (
    <Fragment>
      <Head>
        <title>YouTube Growth Services From YouTube Experts</title>
        <meta
          name="description"
          content="Get Best YouTube Marketing Services from Dawood Proud, a Leading YouTube Growth Agency to Supercharge your YouTube Channel "
        />
        <meta
          name="keywords"
          content="YouTube Growth Services, YouTube Marketing Service"
        />
        <meta property="og:title" content="YouTube Consultation" />
        <meta
          property="og:description"
          content="This is the YouTube Consultation page description."
        />
        <meta property="og:image" content="" />
      </Head>
      <div className="w-full flex flex-col justify-center items-center h-full font-Halvic bg-[#001b47]">
        <div className="w-full bg-white ">
          <Navbar bg_color={"white"} position={"sticky"} />
        </div>
        <div className="grid grid-cols-1  md:grid-cols-12  justify-center items-center mx-auto max-w-full  w-full min-h-[400px]  ">
          <div className=" text-white md:col-start-4 md:col-span-5 flex flex-col items-center justify-center text-center md:text-left mt-8 xl:mt-1">
            <h1 className="text-[24px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-bold xl:leading-[60px] font-Factor_A max-w-3xl text-[#41b0ff]">
              Ultimate Destination
              <br />
              <span className="text-white">
                for all YouTube Growth Services
              </span>
            </h1>
          </div>
          <div className="w-[100%] h-[150px] md:h-[200px] lg:h-[250px] relative md:col-start-9 md:col-span-2 mb-4">
            <Image
              src="/Images/ServicesheroSVGs/YouTube Growth Services.svg"
              fill
              alt="services"
              className="object-contain"
            ></Image>
          </div>
        </div>

        <div className="  w-full bg-white">
          <ServiceCards />
        </div>

        <div  className="w-full">
          <Footer />
        </div>
      </div>
    </Fragment>
  );
}

export default ServicesPage;
