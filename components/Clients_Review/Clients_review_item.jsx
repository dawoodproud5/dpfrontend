import Image from 'next/image'
import React from 'react'
// import styles from './Chat_icon.module.css'
function Client_Review({ name, img, role, review, subs, views }) {
    return (
        <div className='w-full min-h-[70vh]'>
            
            <div className='w-full mx-auto flex items-center justify-center text-[#878B8C] font-Inter min-h-[400px] overflow-hidden'>
                <div className="flex flex-col rounded-2xl  max-w-sm  max-h-[430px]  relative shadow-lg shadow-[#01b88d]/20  h-full ">
                    <div className='flex flex-col  bg-white p-8 items-start justify-start shadow-xl shadow-[gray]/30 gap-4'>
                        <div className='flex'>
                            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 relative">
                                <Image src={img} alt="Avatar" fill className="object-contain" />
                            </div>
                            <div className='flex flex-col justify-center items-start gap-0'>
                                <h3 className="text-xl font-bold mb-2 ">{name}</h3>
                                <div className='italic font-normal text-[12.8px]'>
                                    {role}
                                </div>
                            </div>
                        </div>
                        <div className=" w-full flex flex-col justify-center items-center">
                            <div className="flex items-end  w-full">
                                <svg viewBox="0 0 18 18" className="mr-2 self-center w-[1.3rem] css-0"><g fill-rule="nonzero" fill="none">
                                    <path d="M2.33 9.5a1.33 1.33 0 010-2.67 8.83 8.83 0 018.84 8.84 1.33 1.33 0 01-2.67 0c0-3.4-2.76-6.17-6.17-6.17z" stroke="#7C8898" fill="#7C8898"></path>
                                    <path d="M2.33 3.67a1.33 1.33 0 010-2.67C10.43 1 17 7.57 17 15.67a1.33 1.33 0 01-2.67 0 12 12 0 00-12-12z" stroke="#7C8898" fill="#7C8898"></path>
                                    <path d="M3.17 17a2.17 2.17 0 110-4.33 2.17 2.17 0 010 4.33z" fill="#549DD2"></path></g></svg>
                                <div className="text-[#139dff] text-[24px] font-extrabold mr-2">{subs}</div><span className="font-normal text-[#878B8C] text-[16px] self-center">Subscribers</span>
                            </div>
                            <div className="flex items-end w-full">

                                <svg viewBox="0 0 20 16" className="mr-2 self-center w-[1.3rem] css-0"><g transform="translate(2 2)" fill="none" fill-rule="evenodd">
                                    <path d="M0 6s2.9-6 8-6 8 6 8 6-2.9 6-8 6-8-6-8-6z" stroke="#7C8898" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <ellipse fill="#549DD2" cx="8" cy="6" rx="2.15" ry="2.21"></ellipse></g></svg>

                                <div className='flex items-end w-full'>
                                    <div className="text-[#139dff] text-[24px] font-extrabold mr-2">{views}</div>
                                    <div className="font-normal text-[#878B8C] text-[16px] self-center">Views</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="triangle ml-16"></div>
                    <div className="min-h-[250px] bg-white/40 p-6  overflow-y-scroll custom-scroll relative h-full">
                        <div className="text-lg text-left mb-4">{review}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Client_Review