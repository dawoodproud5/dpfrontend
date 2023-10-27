import { useState } from 'react'
import UserInput from '../../../components/ConsultationForm/UserInput'
import Navbar from '../../../components/common/Navbar'
import Image from 'next/image'



function cutomerpage() {

    return (
        <>

            <div className='grid grid-cols-1 w-full min-h-screen font-Inter text-white bg-white h-full'>
                <div className="w-full bg-white text-[black]">
                    <Navbar bg_color={"white"} />
                </div>

                <div className="grid grid-cols-1  md:grid-cols-12  justify-center items-center mx-auto max-w-full  w-full min-h-[400px]  bg-[#001b47]">
                    <div className=" text-white md:col-start-2 md:col-span-5 flex flex-col items-center justify-center text-center md:text-left mt-8 xl:mt-1">
                        <h1 className='text-[24px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-bold xl:leading-[60px] font-Factor_A max-w-2xl '>
                            <span className="text-[#007aff]">  We Think big, </span>
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
                <div className='text-[black] min-h-screen mx-auto mt-16 max-w-[1172px] w-full'>
                    <UserInput />
                </div>
            </div>
        </>
    )
}

export default cutomerpage