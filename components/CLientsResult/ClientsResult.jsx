import React from "react";
import Image from "next/image";

function ClientsResult() {
  return (
    <div className="w-full flex flex-col justify-start items-start font-Inter p-12 max-w-[1300px] mx-auto ">
      <h2 className="text-[40px] font-extrabold py-12">
        Delivering results is a core commitment for us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-12">
        <div className="flex flex-col justify-start items-center">
          <div className="flex flex-col items-center justify-center gap-2 py-6 px-2">
            <div className="w-[370px] md:w-[400px] h-[400px] relative  mx-auto ">
              <Image
                src="/Images/ClientsResult/Anatoly Client.png"
                alt=""
                fill
                className="object-contain rounded-3xl"
              />
            </div>
            <h3 className="text-[14px] font-light text-[gray]">
              Anatoly (Vladimir Shmondenko)
            </h3>
          </div>

          <div className="flex flex-col justify-start items-start py-4">
            <h2 className="text-[32px] font-bold pr-2">
              500K to 1.5 Million Views per Video
            </h2>
            <p className="font-Montserrat text-[18px] font-light italic text-[gray] py-12">
              “With Dawood, I grew very fast on YouTube. After working with him,
              I actually understood how to create content that my audiences love
              to watch.”
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center">
          <div className="flex flex-col items-center justify-center gap-2 py-6">
            <div className="w-[370px] md:w-[400px] h-[400px] relative  mx-auto ">
              <Image
                src="/Images/ClientsResult/Law by Mike.png"
                alt=""
                fill
                className="object-contain rounded-3xl"
              />
            </div>
            <h3 className="text-[14px] font-light text-[gray]">Law By Mike</h3>
          </div>

          <div className="flex flex-col justify-start items-start py-4">
            <h2 className="text-[32px] font-bold pr-2">
              100K to 1 Million Views per Video
            </h2>
            <p className="font-Montserrat text-[18px] font-light italic text-[gray] py-8">
              “Dawood and Team significantly boosted my channel's growth, making
              Law education more accessible and empowering for my audience.”
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center">
          <div className="flex flex-col items-center justify-center gap-2 py-6 px-2">
            <div className="w-[370px] md:w-[400px] h-[400px] relative  mx-auto ">
              <Image
                src="/Images/ClientsResult/blake.jpg"
                alt=""
                fill
                className="object-contain rounded-3xl"
              />
            </div>
            <h3 className="text-[14px] font-light text-[gray]">
              Dr. Anthony Youn
            </h3>
          </div>

          <div className="flex flex-col justify-start items-start py-4">
            <h2 className="text-[32px] font-bold pr-2">
              Doubled Sales Overnight
            </h2>
            <p className="font-Montserrat text-[18px] font-light italic text-[gray] py-12">
              “I’m already a full-time creator and these concepts quickly
              doubled my channel growth and grew my email list by 75%.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientsResult;
