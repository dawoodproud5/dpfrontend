import React from "react";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import SiderBar from "../../../components/Our Channels/Sidebar";
import ChannelPage from "../../../components/Our Channels/ChannelsPage";
import Image from "next/image";
import Head from "next/head";
function OurChannels() {
  return (
    <>
      <Head>
        <title>Explore Our Channelss</title>
        <meta
          name="description"
          content="Explore our YouTube Channels where YouTube Growth Services come to life. Our channels serve as a testament to our success in various YouTube niches."
        />
      </Head>

      <div className="w-full flex flex-col justify-center items-center h-full font-Halvic bg-[#001b47]">
        <div className="w-full bg-white text-[black]">
          <Navbar bg_color={"white"} position={"sticky"} />
        </div>

        <div className="grid grid-cols-1  md:grid-cols-12  justify-center items-center mx-auto max-w-full  w-full min-h-[400px]  bg-[#001b47]">
          <div className=" text-white md:col-start-4 md:col-span-5 flex flex-col items-center justify-center text-center md:text-left pt-10 xl:pt-10">
            <h1 className="text-[24px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-bold xl:leading-[56px] font-Factor_A max-w-xl ">
              <span className="text-[#41b0ff]">From Zero to Hero: </span>
              Check Out Our Top-performing Faceless YouTube Channels
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

        <div className="grid  grid-cols-1 md:grid-cols-12  mt-6 bg-white">
          {/* <div className=" mx-[4%] col-span-3 flex flex-col md:items-end mt-2">
          <div className="sticky top-0">
            <SiderBar />
          </div>
        </div> */}
          <div className="w-full mx-auto bg-white min-h-screen  md:col-start-4 md:col-span-6 p-2 my-12">
            <p className="px-2 text-[18px] leading-8 font-normal mb-[1rem] font-Inter">
              Welcome to &quot;Our Channels&quot; page, where we showcase our
              expertise in YouTube growth strategies. We don&#39;t just talk the
              talk, we walk the walk. Our channels are the living proof of our
              ability to apply winning YouTube content strategies that help
              channels grow. As a wise person once said, &quot;Don&#39;t tell
              me, show me.&quot; And that&#39;s exactly what we&#39;re doing
              here.
              <br />
              <br />
              We specialize in not only understanding the{" "}
              <strong>YouTube Algorithm</strong>, but also in applying those
              strategies to grow our channels. We believe that success is not a
              one-size-fits-all approach, which is why we offer{" "}
              <strong>customized growth strategies</strong> tailored to each
              channel&#39;s unique needs.
              <br />
              <br />
              While we have channels in various niches, we&#39;ve highlighted a
              few examples here to give you a taste of what we can do. Whether
              you&#39;re a beauty guru, a gaming enthusiast, or a business
              owner, we&#39;ve got you covered.
              <br />
              <br />
              Also, If you&#39;re interested in promoting your brand on our
              channels, please don&#39;t hesitate to reach out to us at our
              official email address or contact number.
            </p>
            <div>
              <ChannelPage />
            </div>
            <div className="">
              <p className="px-2 text-[18px] leading-8 font-normal mb-[1rem] font-Inter mt-36">
                If you&#39;re interested in exploring our complete list of
                YouTube channels across various niches for promotional purposes,
                please don&#39;t hesitate to contact us at our official number.
                We&#39;ll work with you to identify the most relevant channel
                for your needs and help you achieve your YouTube Growth goals.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default OurChannels;
