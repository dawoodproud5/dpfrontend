import React from "react";
import Navbar from "../../../../components/common/Navbar";
import Footer from "../../../../components/common/Footer";
import SideBar from "../../../../components/Services Page Sections/SidebarSevices";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

function youtubeseo() {
  const liItem = [
    {
      name: "1. Professional Expertise",
      id: "professional_expertise",
    },
    {
      name: "2. High-Quality Content",
      id: "high_quality_content",
    },
    {
      name: "3. Engaging Faceless YouTube Content",
      id: "engaging_faceless_youtube_content",
    },
    {
      name: "4. Tailored Solutions",
      id: "tailored_solutions",
    },
    {
      name: "5. Collaboration and Communication",
      id: "collaboration_communication",
    },
    {
      name: "6. Timely Delivery",
      id: "timely_delivery",
    },
  ];

  const sectionIds = [
    "professional_expertise",
    "high_quality_content",
    "engaging_faceless_youtube_content",
    "tailored_solutions",
    "collaboration_communication",
    "timely_delivery",
  ];

  return (
    <div className="">
      <Head>
        <title>
          YouTube SEO Services to Rank High in YouTube Search Results
        </title>
        <meta
          name="description"
          content="YouTube SEO Agency to Boost your YouTube video rankings. Let our Experts help you gain Consistent Views and Engaged Subscribers."
        />
        <meta
          name="keywords"
          content="YouTube SEO Services, YouTube SEO Expert, YouTube SEO Agency, YouTube SEO Company, YouTube Video SEO Services"
        />
        <meta property="og:title" content="YouTube Consultation" />
        <meta
          property="og:description"
          content="This is the YouTube Consultation page description."
        />
        <meta property="og:image" content="" />
      </Head>

      <div className="w-full flex flex-col justify-center items-center h-full font-Halvic bg-[#001b47]">
        <div className="w-full bg-white">
          <Navbar bg_color={"white"} position={"sticky"} />
        </div>

        <div className="flex flex-col justify-start sm:justify-center items-start sm:items-center mt-16 sm:mt-8 min-h-[420px] max-w-full">
          <div className="text-[white]/80 relative w-full  grid grid-rows-12  pt-4 sm:pt-2">
            <h3 className="col-start-1 sm:col-start-3 col-span-5 font-Inter font-light text-[14px] sm:text-[14px] ml-3 sm:pl-2">
              <Link href={"/services"}>Services</Link>{" "}
              <span className="text-[#41b0ff]">/</span>{" "}
              <Link href={"/services/youtube-seo"}>Youtube SEO</Link>
            </h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="grid grid-cols-1  sm:grid-cols-12  justify-center items-center mx-auto max-w-full  w-full  ">
              <div className=" text-white sm:col-start-4 sm:col-span-5 text-left mt-8 xl:mt-1 pr-10 sm:pr-0 pl-3 sm:pl-0">
                <div className="flex flex-col items-start justify-start gap-2">
                  <h1 className=" text-[24px] md:text-[32px] lg:text-[36px] xl:text-[44px] font-bold xl:leading-[50px] font-Factor_A  max-w-2xl pr-8 py-[12px]">
                    <span className="text-[#41b0ff]">
                      Best YouTube SEO Services{" "}
                    </span>
                    to Rank your Videos at the Top of YouTube Search Results
                  </h1>

                  <div className="font-Inter font-light text-[14px] sm:text-[14px]  flex gap-4 sm:gap-6 mb-2 ml-0 sm:ml-2 pt-5 text-[white]/80">
                    <p>Team DP</p>
                    <p>April 11, 2023</p>
                    <p>3 min read</p>
                  </div>
                </div>
              </div>
              <div className="w-[100%] h-[200px] sm:h-[200px] lg:h-[250px] relative sm:col-start-9 sm:col-span-2 mb-4">
                <Image
                  src="/Images/Services/YouTube_SEO Service.png"
                  fill
                  alt="Youtube_SEO"
                  className="object-contain"
                ></Image>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12  bg-white  mx-auto max-w-full  w-full ">
          {/* sidebar here  */}
          <div className="mx-5  md:col-span-3 mt-6 ">
            <div className="sticky top-12 ">
              <SideBar liItem={liItem} sectionIds={sectionIds} />
            </div>
          </div>
          <div className="w-full mx-auto bg-white min-h-screen md:col-start-4 md:col-span-6 p-2 mb-28 md:mb-40">
            <div className="max-w-[1172px] mx-auto">
              <div className="flex flex-col justify-center items-start mt-12 px-2">
                <div className="flex flex-col justify-center item-center gap-4 mb-3">
                  <div className="text-[16px] md:text-[20.4px]     font-light leading-[32.4px]  font-Inter space-y-4">
                    <p>
                      At Dawood Proud, we offer comprehensive YouTube video
                      production services to help you maximize your success on
                      the platform.
                    </p>{" "}
                    <p>
                      Our team of YouTube experts is dedicated to creating
                      high-quality, engaging content that will captivate your
                      audience and drive results.
                    </p>
                    <p>
                      With our YouTube video creation services, we provide a
                      range of solutions tailored to your specific needs.
                    </p>
                    <p>
                      Whether you&apos;re an individual creator, a brand, or a
                      business, we have the expertise to deliver outstanding
                      videos that align with your goals and resonate with your
                      target audience.
                    </p>
                  </div>

                  <h3 className="text-[24px] md:text-[36px] xl:text-[42px] font-bold font-Factor_A">
                    Why Choose Our YouTube Video Production Services:
                  </h3>
                </div>

                {/* all the content starts here... */}
                <div className="space-y-4 my-16 ">
                  <h2
                    id="professional_expertise"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Professional Expertise
                  </h2>

                  <div className="text-[16px] md:text-[20.4px]     font-light leading-[32.4px]  font-Inter space-y-4">
                    <p>
                      Our team consists of experienced professionals who
                      understand the intricacies of YouTube video production.
                    </p>
                    <p>
                      We stay up to date with the latest trends, techniques, and
                      strategies to ensure that your videos stand out from the
                      crowd.
                    </p>
                  </div>
                  <h2
                    id="high_quality_content"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    High-Quality Content
                  </h2>
                  <div className="text-[16px] md:text-[20.4px]     font-light leading-[32.4px]  mt-4 font-Inter space-y-4">
                    <p>
                      We pride ourselves on delivering exceptional quality in
                      every video we create.
                    </p>
                    <p>
                      From scripting and storyboarding to filming and editing,
                      we maintain a keen eye for detail to produce polished,
                      visually appealing videos that leave a lasting impact.
                    </p>
                  </div>

                  <h2
                    id="engaging_faceless_youtube_content"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Engaging Faceless YouTube Content
                  </h2>

                  <div className="text-[16px] md:text-[20.4px]     font-light leading-[32.4px]  mt-4 font-Inter space-y-4">
                    <p>
                      Our video production approach emphasizes engaging faceless
                      content that captivates viewers.
                    </p>
                    <p>
                      We understand the importance of connecting with your
                      audience, and our creative team excels at crafting videos
                      that resonate with viewers, even without on-screen talent.
                    </p>
                  </div>
                  <h2
                    id="tailored_solutions"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Tailored Solutions
                  </h2>

                  <div className="text-[16px] md:text-[20.4px]  font-light leading-[32.4px]  mt-4 font-Inter space-y-4">
                    <p>
                      We recognize that each YouTube channel is unique, with its
                      own branding, goals, and target audience. Our services are
                      fully customizable to meet your specific requirements.
                    </p>
                    <p>
                      We take the time to understand your vision and tailor our
                      approach accordingly, ensuring that the final product
                      aligns seamlessly with your brand identity.
                    </p>
                  </div>

                  <h3
                    id="collaboration_communication"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Collaboration and Communication
                  </h3>

                  <div className="text-[16px] md:text-[20.4px]  font-light leading-[32.4px]  mt-4 font-Inter space-y-4">
                    <p>
                      We believe in working closely with our clients throughout
                      the video production process. From initial ideation to
                      final delivery, we maintain open lines of communication,
                      seeking your input and feedback at every stage.
                    </p>
                    <p>
                      Our collaborative approach ensures that your vision is
                      brought to life while leveraging our expertise.
                    </p>
                  </div>
                  <h3
                    id="timely_delivery"
                    className="text-xl md:text-2xl font-bold font-Factor_A"
                  >
                    Timely Delivery
                  </h3>

                  <div className="text-[16px] md:text-[20.4px]  font-light leading-[32.4px]  mt-4 font-Inter space-y-4">
                    <p>
                      We understand the importance of timely delivery in the
                      fast-paced world of YouTube. Our team is committed to
                      meeting deadlines without compromising on quality.
                    </p>
                    <p>
                      You can trust us to deliver your videos promptly, allowing
                      you to maintain a consistent content schedule and engage
                      your audience effectively.
                    </p>
                  </div>

                  <div className="text-[16px] md:text-[20.4px]     font-light leading-[32.4px]  mt-4 font-Inter space-y-4">
                    <p>
                      Partner with Dawood Proud for your YouTube video
                      production needs and take your channel to new heights.
                    </p>
                    <p>
                      Contact us today to discuss how our services can help you
                      achieve your YouTube goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default youtubeseo;
