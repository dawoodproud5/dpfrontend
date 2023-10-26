import React from "react";
import Footer from "../../../components/common/Footer";
import Navbar from "../../../components/common/Navbar";
import Tab from "../../../components/Careers/CareersTab";
import Image from "next/image";
import Head from "next/head";
function careers() {
  const tabs = [
    {
      label: "Who we are",

      link: "/about-us",
    },
    {
      label: "Our Team",
      link: "/team",
    },
    {
      label: "Jobs",
      link: "/jobs",
    },
    {
      label: "Logo Kit",
      link: "/logo-kit",
    },
    {
      label: "Legal Info",
      link: "/legal-info",
    },
  ];

  return (
    <>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Learn about our agency, Dawood Proud, and our relentless pursuit of YouTube channel success. Explore our services designed to elevate your online presence."
        />
      </Head>
      <div className="w-full  font-Inter text-white bg-white h-full ">
        <div className="w-full bg-white text-[black]">
          <Navbar bg_color={"white"} />
        </div>

        <div className="grid grid-cols-2  md:grid-cols-12  justify-center items-center mx-auto max-w-full  w-full min-h-[400px]  bg-[#001b47]">
          <div className=" text-white md:col-start-3 md:col-span-5 flex flex-col items-center justify-center  md:text-left mt-8 xl:mt-1">
            <h1 className="text-[24px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-bold xl:leading-[60px] font-Factor_A max-w-xl ">
              <span className="text-[#01b88d]"> We Think Big, </span>
              <br />
              Start Small,
              <br />
              and Move Fast
            </h1>
          </div>
          <div className="w-[100%] h-[120px] md:h-[200px] lg:h-[250px] relative md:col-start-8 md:col-span-2 mt-5">
            <Image
              src="/Images/ServicesheroSVGs/youtube-team.png"
              fill
              alt="youtube-team"
              className="object-contain"
            ></Image>
          </div>
        </div>
        <div className="w-full grid grid-cols-1  md:grid-cols-12  max-w-[1172px] space-y-10  mx-auto mb-24">
          <div className="md:col-start-3 md:col-span-9 ">
            <Tab tabs={tabs} />
          </div>

          <div className="flex flex-col justify-center items-center text-[#333333] font-Inter gap-4 w-full mx-auto  p-6  md:col-start-3 md:col-span-8">
            <div className="flex flex-col gap-2 ">
              <h1 className="font-semibold  text-[24px] md:text-[28px]">
                About our Agency
              </h1>
              <p className="font-normal text-[16px]">
                Welcome to Dawood Proud, your one-stop-shop for all{" "}
                <span>
                  {" "}
                  YouTube Growth Services! 
                </span>{" "}
                Our agency specializes in providing high-quality services for
                YouTube content creators, helping them grow their channels and
                reach a wider audience. Whether you&#39;re just starting out or
                have been creating content for years, our team of experts has
                the knowledge and experience to take your channel to the next
                level. Our motto is simple yet powerful – &quot;Stand Out from
                the Crowd.&quot;
                <br />
                <br />
                Our agency was founded by{" "}
                <span>
                   Dawood Hussain 
                </span>
                , a man who has been fascinated with the inner workings of the{" "}
                <span>
                  YouTube Algorithm 
                </span>{" "}
                since his Engineering Days. Dawood&#39;s curiosity led him to
                build his first web crawler for the YouTube Search Engine, and
                he started understanding the platform very well. However, being
                a shy person, he found it difficult to come in front of the
                camera. To overcome this, he started creating{" "}
                <span>
                  Faceless Automated YouTube Channels 
                </span>{" "}
                in different niches. (These channels can be seen in the
                &quot;Our Channels&quot; Section of our website). Dawood used
                his expertise to grow these channels, and they soon became a hit
                among the English Speaking International Audience.
                <br />
                <br />
                Due to overwhelming requests from creators around the world,
                Dawood decided to help other YouTubers to grow on the platform.
                His interest in the YouTube Algorithm never waned, and in 2018,
                he took the leap to start his own online business to provide
                YouTube Growth Services. Since then, this Agency has helped
                countless creators achieve their goals and reach a wider
                audience on the platform.
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <h2 className="font-semibold text-[28px]"> About our Services</h2>
              <p className="font-normal text-[16px]">
                Our team of experts specializes in providing customized
                solutions for every aspect of YouTube Channel Growth, from
                developing a{" "}
                <span>
                  YouTube Content Strategy 
                </span>{" "}
                to Engaging
                <span>
                  YouTube Content Creation 
                </span>
                . With our help, you can identify low competition niches, find
                winning YouTube Keywords, Rank your Videos higher in YouTube
                Search Results and can promote your Videos to Target Audiences.
                <br />
                <br />
                Speaking of growth services, our{" "}
                <span>
                  YouTube Content Creation 
                </span>{" "}
                service is second to none. We pride ourselves on producing{" "}
                <span>
                  high-quality videos 
                </span>{" "}
                that capture your audience&#39;s attention and keep them
                engaged. Our team takes care of everything, from{" "}
                <span>
                  scriptwriting 
                </span>{" "}
                and filming to{" "}
                <span>
                  editing, thumbnail designing, 
                </span>{" "}
                and{" "}
                
                  <span>post-production</span>
                 
                . You can sit back, relax, and let us do the hard for you.
                <br />
                <br />
                At Dawood Proud, we are committed to delivering exceptional
                service that exceeds your expectations. We understand the
                importance of growing your YouTube channel and increasing your
                online presence, which is why we work tirelessly to ensure that
                our services are designed to take your YouTube channel to the
                next level!
                <br />
              </p>
            </div>
          </div>
          <div className="md:col-start-2 md:col-span-9 w-[250px] xs:w-[400px] sm:w-[500px] md:w-[600px] lg:w-[900px] h-[200px] md:h-[400px] lg:h-[500px] mx-auto border-1 shadow-lg ml-[8%] md:ml-[10%] lg:ml-[12%] px-2 content-center ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155.17091359116824!2d-0.10760166433969663!3d51.51808458522204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b4da48c6ae5%3A0x3f79619512ae07d9!2s3 Hatton Garden%2C London EC1N 8DX%2C UK!5e0!3m2!1sen!2s!4v1698144164481!5m2!1sen!2s"
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default careers;
