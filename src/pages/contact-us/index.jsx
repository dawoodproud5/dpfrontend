import React from 'react'
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import ContactCard from '../../../components/ContactUs/ContactCard';

function ContactUs() {
    return (
        <>
            <div className="w-full flex flex-col justify-center items-center h-full bg-[#001b47]">
                <div className="w-full bg-white text-[black]">
                    <Navbar bg_color={"white"} position={"sticky"} />
                </div>

                <div className="min-h-screen flex items-center">
                    <ContactCard />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs
