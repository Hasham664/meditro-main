"use client";

import Navbar from "@/Components/Home/Navbar";
import HospitalList from "@/Components/Hospital/Hospitals";
import React from "react";
// import Service from "../service/page";

export default function hospital() {
  return (
    <div>
      <div className="bg-[#F6FBFF] pb-12 lg:pb-36">
        <Navbar />
        <h1 className="text-center font-bold pt-6 lg:pt-24 md:pt-24 text-2xl lg:text-5xl text-[#4CB6B6]">
          Hospital
        </h1>
      </div>
      <HospitalList />
    </div>
  );
}
