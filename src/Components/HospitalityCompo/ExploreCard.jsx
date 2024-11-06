"use client";

import React from 'react'
import docs from '../../../public/team-2.png'
import Image from 'next/image';
const explore = [
    {
        img:docs,
        heading: "Hospitality ",
        lorem: "Hit the pause button on your daily grind and inject some fresh excitement into",
        btn: "Explore"
    },
     {
        img:docs,
        heading: "Hospitality ",
        lorem: "Hit the pause button on your daily grind and inject some fresh excitement into",
        btn: "Explore"
    },
     {
        img:docs,
        heading: "Hospitality ",
        lorem: "Hit the pause button on your daily grind and inject some fresh excitement into",
        btn: "Explore"
    }
]
export default function ExploreCard() {
    return (
      <div className="Mycontainer">
        <h1 className="text-center text-2xl font-semibold pt-12">
          Discover Our{" "}
          <span className="text-[#4CB6B6]">Hospital Categories</span>
        </h1>
        <p className="text-center text-xl pt-1">
          Tailored treatments designed to rejuvenate your mind, body, and soul.
        </p>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2  mt-4">
          {explore.map((expl, ind) => {
            return (
              <div
                key={ind}
                className="flex px-0 py-3 transition hover:scale-105		  lg:px-3 lg:py-3 md:px-3 md:py-3 w-full "
              >
                <div className=" rounded-xl overflow-hidden shadow-lg px-4 py-4 border">
                  <Image
                    className="w-full rounded-sm"
                    src={expl.img}
                    alt="img"
                  />
                  <div className="">
                    <div className="font-bold text-xl mb-2 pt-3 text-[#4CB6B6]">
                      {expl.heading}
                    </div>
                    <p className="text-gray-700 text-base">{expl.lorem}</p>
                  </div>
                  <div className="">
                    <button className="inline-block bg-gradient-to-r from-custom-blue to-custom-teal rounded-lg w-full py-4  text-xl mt-6 font-semibold text-white">
                      {expl.btn}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
}
