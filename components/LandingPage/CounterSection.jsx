import { useState, useEffect, useRef } from 'react'

import Link from 'next/link'
import CountUp from 'react-countup';
import { FaUsers } from "react-icons/fa"
import { FaEye } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"

function CunterSection() {

    const [showCounter, setShowCounter] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setShowCounter(true);
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div className='w-full grid grid-cols-1 lg:grid-cols-2 font-Inter max-w-[1100px] mx-auto min-h-screen justify-center items-start gap-12 py-20'>
            <div className='flex flex-col justify-center items-center md:justify-start md:items-start space-y-4 sm:px-0 mx-auto px-1 '>
                <h2 className='text-[28px] md:text-[40px] font-extrabold text-center md:text-left leading-[42px] px-2 sm:px-0'>
                Our YouTube Strategies Deliver Proven Results
                </h2>
                <p className='text-[18px] md:text-[24px] font-light text-[#554b4d] max-w-[80%] text-center md:text-left'>
                In the world of YouTube where your channel is your livelihood, you need more than just ideas; you need data-backed, battle-tested strategies honed across thousands of channels.
                </p>
                <button className='flex justify-center items-center px-5 py-3 rounded-2xl bg-[#001b47] hover:bg-[#001b47] text-white font-bold gap-2'>
                    <Link href={"/consultation"}>Start a New Project</Link>
                    <svg fill="none" viewBox="0 0 20 21" width="20" className="css-orecyf">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.166 10.5h11.667M10 4.667l5.833 5.833L10 16.334"></path>
                    </svg>
                </button>
            </div>


            <section ref={sectionRef}>
                {showCounter &&
                    <div className='flex flex-col items-center justify-center w-full gap-4 '>
                        <div className='flex flex-col justify-center items-center p-4 border border-Solid-2 border-[gray] w-[90%] '>
                            <div className='flex justify-center items-center gap-4'>
                                <FaUsers size={60} color="#001b47" />
                                <CountUp
                                    start={0}
                                    end={1000}
                                    duration={3}
                                    useEasing={true}
                                    separator=","
                                    prefix=''
                                    suffix="+"
                                    className='text-[50px] font-light text-[#001b47]'
                                />
                            </div>
                            <p className='text-[18px] font-light text-[black]/70'>Clients Served</p>
                        </div>
                        <div className='flex flex-col justify-center items-center p-4 border border-Solid-2 border-[gray] w-[90%] '>
                            <div className='flex justify-center items-center gap-4'>
                                <FaEye size={60} color="#001b47" />
                                <CountUp
                                    start={0}
                                    end={6}
                                    duration={8}
                                    useEasing={true}
                                    separator=","
                                    prefix=''
                                    suffix="+Billion"
                                    className='text-[50px] font-light text-[#001b47]'
                                />
                            </div>
                            <p className='text-[18px] font-light text-[black]/70'>YouTube Views for our Clients</p>
                        </div>
                        <div className='flex flex-col justify-center items-center p-4 border border-Solid-2 border-[gray] w-[90%] '>
                            <div className='flex justify-center items-center gap-4'>
                                <FaYoutube size={60} color="#001b47" />
                                <CountUp
                                    start={0}
                                    end={23}
                                    duration={6}
                                    useEasing={true}
                                    separator=","
                                    prefix=''
                                    suffix="+Million"
                                    className='text-[50px] font-light text-[#001b47]'
                                />
                            </div>
                            <p className='text-[18px] font-light text-[black]/70 '>Subscribers for our Clients</p>
                        </div>
                    </div>


                }
            </section>
        </div>
    )
}

export default CunterSection