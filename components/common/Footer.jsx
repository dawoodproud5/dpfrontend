import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiYoutubeLine } from "react-icons/ri";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <div className="w-full  text-white bg-[#001b47] text-base  font-Inter">
      {/* parent div */}
      <div className="w-full flex flex-col justify-center items-center ">
        <div className="page-section-container max-w-[1280px] px-6 md:px-4 md:mx-auto pt-24 md:pt-24 pb-10 grid grid-cols-1 md:grid-cols-12">
          <div className="col-span-full mb-7 md:mb-8">
            <div className="relative h-14 w-14 flex items-center justify-center rounded-full shadow-xl">
              <Image
                src={"/Images/logo.png"}
                alt="logbimg"
                fill
                className="object-contain"
              />
            </div>
          </div>
          {/* <div className="col-span-full mb-7 md:mb-8"></div> */}
          <div className="col-span-full md:col-span-3 flex flex-col">
            <h2 className="mb-4 sm:mb-3 font-bold text-[#01b88d]">Mission</h2>
            <p className="font-medium  mb-8 md:mb-12 text-left ">
              Our Mission at Dawood Proud is to help YouTube creators and
              businesses stand out from the Crowd. We provide customized
              services to help our clients gain views, engaged subscribers, and
              loyal audiences. With our support, our clients do achieve success
              and become leaders in their niches.
            </p>
          </div>
          <div className="col-span-full md:col-span-6 mt-8 md:mt-0 text-md">
            <div className="flex flex-col md:flex-row w-full space-y-7 md:space-y-0 space-x-0 md:space-x-2 lg:space-x-10 md:pl-10">
              <div>
                <div className="mb-4 sm:mb-3 font-bold text-[#01b88d]">
                  Company
                </div>
                <div className="flex flex-col items-start space-y-3  text-white text-opacity-90">
                  <Link href={"/our-channels"}>Our Channels </Link>
                  <Link href={"/portfolio"}>Portfolio</Link>
                  <Link href={"/blog"}>Blog</Link>
                </div>
              </div>
              <div>
                <div className="mb-4 sm:mb-3 font-bold text-[#01b88d]">
                  Services
                </div>
                <div className="flex flex-col items-start space-y-3 text-white text-opacity-90">
                  <Link href={"/services/youtube-consultation"}>
                    YouTube Consultation
                  </Link>
                  <Link href={"/services/youtube-niche-with-low-competition"}>
                    YouTube Niche
                  </Link>
                  <Link href={"/services/youtube-keyword-research"}>
                    YouTube Keyword Research
                  </Link>
                  <Link href={"/services/youtube-seo"}>YouTube SEO</Link>
                  {/* <Link href={"/services/youtube-video-production"} >YouTube Content Creation</Link> */}

                  <Link href={"/services/youtube-automation"}>
                    YouTube Automation
                  </Link>
                  <Link href={"/services/youtube-channel-optimization"}>
                    YouTube Channel Optimization
                  </Link>
                  <Link href={"/services/youtube-channel-management"}>
                    {" "}
                    YouTube Channel Management
                  </Link>
                </div>
              </div>
              <div>
                <div className="mb-4 sm:mb-3 font-bold text-[#01b88d] ">
                  Other
                </div>
                <div className="flex flex-col items-start space-y-3 text-white text-opacity-90 ">
                  <Link href="/contact-us">Contact</Link>
                  <Link href="/careers">Jobs</Link>
                  <Link href="/team">Team</Link>
                  <Link href="/legal-info">Privacy</Link>
                  <Link href="/contact-us">Support</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full md:col-span-3 text-md mt-8 md:mt-0">
            <div className="font-bold mb-2 md:mb-3 text-[#01b88d]">
              Connect with us
            </div>
            <div className="leading-5 text-white text-opacity-90 space-y-2">
              <p>Call Team DP +44 7308 510775</p>
              <p>
                9am to 5pm GMT +1 <br />
                (British Standard Time){" "}
              </p>
            </div>
            <div className="mt-4 flex items-center space-x-4">
              <Link
                href="/our-channels"
                className="hover:opacity-70"
                title="YouTube"
              >
                <RiYoutubeLine size={30} />
              </Link>
              {/* <a href="https://www.facebook.com" target="_blank" className="hover:opacity-70" title="Facebook"><AiOutlineFacebook size={30} /></a> */}
              {/* <a
                href="https://www.instagram.com/dawoodproud/"
                target="_blank"
                className="hover:opacity-70"
                title="Instagram"
              >
                <AiOutlineInstagram size={30} />
              </a> */}
              {/* <a href="https://twitter.com/dawoodproud" target="_blank" className="hover:opacity-70" title="Twitter"><BsTwitter size={30} /></a> */}
              <a
                href="https://www.linkedin.com/company/dawoodproud"
                target="_blank"
                className="hover:opacity-70"
                title="LinkedIn"
              >
                <AiOutlineLinkedin size={30} />
              </a>
            </div>
          </div>

          {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-9 mt-9 col-span-full">

                </div> */}
        </div>
        {/* <hr className='w-full max-w-7xl text-[gray] h-full' /> */}
        <div className="bg-[#071324] w-full">
          <div className="grid grid-col-1 xl:grid-cols-12 justify-center items-center  mt-4  max-w-7xl mb-8 mx-auto ">
            <div className="xl:col-span-7 font-Inter text-[14px] text-left  px-5 sm:px-0">
              <p>
                Dawood Proud Ltd ® 2018-2023 | Celebrating 5+ Years of YouTube
                Marketing Excellence <br />
                Office 3, Unit 3A, Hatton Garden Holborn EC1N London, United
                Kingdom
              </p>
              <p>
                <Link href={"/legal-info"}>Privacy & Terms of Use</Link>
              </p>
              {/* Call Toll Free: +92 327 007 5555 */}
            </div>
            <div className="xl:col-start-8  xl:col-span-5 flex justify-center gap-4 items-center max-w-md">
              <div className="w-[24%] h-16 relative ">
                <Image
                  src={"/Images/googlpartner.svg"}
                  fill
                  alt="logo"
                  className="object-contain"
                />
              </div>
              <div className="w-[30%] h-20 relative">
                <Image
                  src={"/Images/Microsoft-Elite-Channel-Partner-2023.png"}
                  fill
                  alt="logo"
                  className="object-contain"
                />
              </div>
              <div className="w-[30%] h-16 relative">
                <Image
                  src={"/Images/Google ads partner.png"}
                  fill
                  alt="logo"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
