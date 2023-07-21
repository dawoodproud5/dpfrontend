import { useState, useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Link from 'next/link';
import { style } from '@mui/system';
import { Fade } from 'react-awesome-reveal';
import { FiTarget } from "react-icons/fi"
import Image from "next/image";


function ServiceCard2({ heading, heading2, para, btntext, bgColor, link, images, icon, text, bg }) {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`w-full font-Inter text-[black] relative ${bgColor} overflow-hidden py-24`}>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-center md:justify-center md:items-center max-w-[1024px] mx-auto px-6'>

                <div className='md:flex-1 w-full sm:order-first md:order-last py-8'>
                    <Fade delay={100} duration={1000} triggerOnce={true} cascade={true} direction="right">
                        <div className='w-[100%] h-[300px] md:h-[300px] relative '>
                            <Image src={images} alt="" fill className='object-contain' />
                        </div>
                    </Fade>
                </div>

                <div className='flex flex-col justify-center items-start gap-4'>

                    <div className='flex flex-col justify-start items-start gap-6'>
                        <div className='flex flex-col justify-start items-start gap-6'>
                            <div className='flex justify-start items-start gap-6'>
                                <div className={`rounded-full ${bg} p-1`}>
                                    {icon}
                                </div>
                                <h3 className='text-[20px] font-bold text-left'>{text}</h3>
                            </div>
                            <h3 className="font-extrabold text-[24px] md:text-[36px] lg:text-[40px] text-left leading-[43px]">{heading2}</h3>
                        </div>
                    </div>
                    <p className='text-[#231F20] font-light text-[18px] md:text-[18px] lg:text-[22px] text-left md:max-w-sm'>
                        {para}
                    </p>
                </div>

            </div>
        </div >
    )
}

export default ServiceCard2