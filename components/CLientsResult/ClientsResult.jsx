import React from 'react'
import Image from 'next/image'


function ClientsResult() {
    return (
        <div className='w-full flex flex-col justify-start items-start font-Inter p-12 max-w-[1300px] mx-auto '>
            <h2 className='text-[40px] font-extrabold py-12'>It’s Important To Us That You Get Results</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-12'>
                <div className='flex flex-col justify-start items-center'>
                    <div className='flex flex-col items-center justify-center gap-2 py-6'>
                        <div className='w-[370px] md:w-[400px] h-[400px] relative  mx-auto '>
                            <Image src="/Images/ClientsResult/anthony_youn.jpg" alt="" fill className='object-contain rounded-3xl' />
                        </div>
                        <h3 className='text-[14px] font-light text-[gray]'>Dr. Anthony Youn</h3>
                    </div>

                    <div className='flex flex-col justify-start items-start py-4'>
                        <h2 className='text-[32px] font-bold pr-2'>
                            10,000 to 1.5 Million Views per Video
                        </h2>
                        <p className='font-Montserrat text-[18px] font-light italic text-[gray] py-8'>
                            “With Video Creators, I grew to 100,000 subscribers in less than a year. Their guidance enabled me to reach over 1 million subscribers today.”
                        </p>
                    </div>
                </div>
                <div className='flex flex-col justify-start items-center'>
                    <div className='flex flex-col items-center justify-center gap-2 py-6'>
                        <div className='w-[370px] md:w-[400px] h-[400px] relative  mx-auto '>
                            <Image src="/Images/ClientsResult/schellea.jpg" alt="" fill className='object-contain rounded-3xl' />
                        </div>
                        <h3 className='text-[14px] font-light text-[gray]'>Schellea Fowler</h3>
                    </div>

                    <div className='flex flex-col justify-start items-start py-4'>
                        <h2 className='text-[32px] font-bold pr-2'>
                            400 to 1 Million Subscribers
                        </h2>
                        <p className='font-Montserrat text-[18px] font-light italic text-[gray] py-8'>
                            “I took 6 years to grow to 250k subs and 10k views per video.
                            After working with Video Creators, I went to 1.5 million views in a few videos and hit 1 million subs 4 months later.”

                        </p>
                    </div>
                </div>
                <div className='flex flex-col justify-start items-center'>
                    <div className='flex flex-col items-center justify-center gap-2 py-6 px-2'>
                        <div className='w-[370px] md:w-[400px] h-[400px] relative  mx-auto '>
                            <Image src="/Images/ClientsResult/blake.jpg" alt="" fill className='object-contain rounded-3xl' />
                        </div>
                        <h3 className='text-[14px] font-light text-[gray]'>Dr. Anthony Youn</h3>
                    </div>

                    <div className='flex flex-col justify-start items-start py-4'>
                        <h2 className='text-[32px] font-bold pr-2'>
                            Doubled Sales Overnight
                        </h2>
                        <p className='font-Montserrat text-[18px] font-light italic text-[gray] py-12'>
                            “I’m already a full-time creator and these concepts quickly doubled my channel growth and grew my email list by 75%.”
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientsResult