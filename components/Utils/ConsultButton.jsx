import React from "react";
import Link from "next/link";
function ConsultButton() {
  return (
    <div>
      <Link href={"/consultation"}>
        <button className="text-base font-medium  px-8 py-3  mt-4 rounded-xl text-white bg-[#001b47]">
          <p className="flex justify-center items-center gap-4">
            Get Free Consultation
          </p>
        </button>
      </Link>
    </div>
  );
}

export default ConsultButton;
