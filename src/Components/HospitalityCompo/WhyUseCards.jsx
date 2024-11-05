"use client";

import React from "react";
import icon from "../../../public/icon-4.png";
import Image from "next/image";
export default function WhyUseCards() {
  const health = [
    {
      img: icon,
      heading: "Best Price Guarantee",
      para: "We ensure you receive the lowest prices for all our wellness programs.",
    },
    {
      img: icon,
      heading: "Best Price Guarantee",
      para: "We ensure you receive the lowest prices for all our wellness programs.",
    },
    {
      img: icon,
      heading: "Best Price Guarantee",
      para: "We ensure you receive the lowest prices for all our wellness programs.",
    },
  ];
  return (
    <div>
      <div className="Mycontainer">
        <h1 className="text-[#4CB6B6] text-center text-2xl mt-12 font-semibold">
          Why Use Meditro.com?
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-6">
          {health.map((data, ind) => {
            return (
              <div key={ind} className="">
                <div className="flex items-center px-4 py-8 shadow-xl border rounded-md bg-white">
                  <div className=" bg-opacity-75">
                    <Image className="" src={data.img} alt="img" width={110} />
                  </div>

                  <div className="mx-5">
                    <h4 className="text-2xl font-semibold text-gray-700">
                      {data.heading}
                    </h4>
                    <div className="text-gray-500">{data.para}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
