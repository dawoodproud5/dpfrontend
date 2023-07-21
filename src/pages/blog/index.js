import React from "react";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import SignIn from "../../../components/AdminDashBoad/Sign";

function blog() {
  return (
    <div className="w-full  flex  flex-col items-center justify-center bg-[#001b47]">
      <div className="bg-white w-full">
        <Navbar bg_color={"bg-white"} position={"fixed"} />
      </div>

      <div className="flex flex-col items-center justify-center">
        <div>
          <SignIn />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default blog;
