import React from 'react'
import { FiArrowRight } from "react-icons/fi"
import { FiArrowLeft } from "react-icons/fi"
import PhoneInput from '../SelectMui/PhoneInput'
function FormStep6({ formData, onChange, nextStep, prevStep, setFormData }) {
    return (
        <div className='flex flex-col justify-center items-center mx-w-[600px] mx-auto space-y-4'>
            <div className='flex flex-col justify-between items-center gap-8  '>
            <h1 className='text-[14px] sm:text-[16px] md:text-[18px] font-medium text-center '>Thank you for Showing Interest in Dawood Proud Services <br /> to take your YouTube Channel to New Heights</h1>
                {/* <h2 className='text-[20px] font-semibold text-center '>Nice to meet you😊</h2> */}
                <h2 className='text-[16px] md:text-[20px] font-medium  '>What is your phone number?</h2>
            </div>
            <label htmlFor="name"></label>
            <div>
                <PhoneInput value={formData.phone} setFormData={setFormData} formData={formData} />
            </div>
            <div className='text-[12px] font-normal text-center  '>
                Your contact details will NOT be used for unsolicited calls and messages. <br />
                Your Contact Information will be handled securely because Your privacy matters! <br />
                We will respectfully reach out to schedule a consultation at a time that suits you best.
            </div>
            <div className='flex justify-center items-center gap-4'>
                <button type="button" onClick={prevStep} className="bg-[#139dff] px-6 py-1 rounded-2xl text-white">
                    <FiArrowLeft size={30} />
                </button>
                <button type="button" onClick={nextStep} className="bg-[#139dff] px-6 py-1 rounded-2xl text-white">
                    <FiArrowRight size={30} />
                </button>

            </div>

        </div >
    )
}

export default FormStep6