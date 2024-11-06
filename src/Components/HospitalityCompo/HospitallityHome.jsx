"use client";

import React from "react";
import Image from "next/image";
import img from "../../../public/service-2.png";
import img2 from "../../../public/service-1.png";

export default function HospitallityHome() {
  return (
    <div className="bg-[#49BEBA33] mb-12  lg:mt-24 md::mt-24 mt-12 ">
      <div className="Mycontainer flex flex-wrap items-center justify-between py-12 ">
        <div>
          <h1 className=" leading-snug font-semibold	 lg:text-5xl text-3xl max-w-md text-[#0069AB]">
            Your Path to Ultimate Wellness Begins Here
          </h1>
          <p className="text-lg max-w-md pt-4 pb-4 lg:pt-8">
            Discover expert-designed wellness programs that rejuvenate mind,
            body, and soul, tailored for your holistic health journey.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Image className="rounded-lg" src={img} alt="img" width={340} />
          <div>
            <Image className="rounded-lg" src={img2} alt="img" width={340} />
            <Image
              className="mt-4 rounded-lg"
              src={img2}
              alt="img"
              width={340}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
