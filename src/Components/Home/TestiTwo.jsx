"use client";
import React from "react";
import "./Custom.css";

export default function TestiTwo() {
  const testimonials = [
    {
      id: 1,
      image: "/testimonial-1.png",
      text: "“After my knee surgery, the convenience of online consultations made my recovery smoother than I could have imagined.”",
      name: "- Linda A.",
    },
    {
      id: 2,
      image: "/testimonial-2.png",
      text: "“After my knee surgery, the convenience of online consultations made my recovery smoother than I could have imagined.”",
      name: "- Linda A.",
    },
  ];

  return (
    <div>
      <div className="relative">
        <div className="w-full m-auto grid lg:grid-cols-2 items-start lg:items-center gap-8 mt-12 lg:mt-24 md:mt-12 relative z-10">
          {testimonials.map((testi, ind) => {
            return (
              <div key={ind}>
                <div className="flex flex-wrap items-center border-4 border-blue-400 gap-4 bg-gradient-to-r from-testimonial-1 to-testimonial-2 p-8 lg:p-8y rounded-xl">
                  <img src={testi.image} alt="" />
                  <p className="max-w-[400px]">
                    {testi.text}
                    <br />
                    <span className="text-[#5D5D5D] font-bold">
                      {testi.name}
                    </span>
                  </p>
                </div>

                {ind === 0 && (
                  <div className="lg:hidden block mt-12 lg:mt-24 md:mt-12 text-center flex lg:justify-start md:justify-center justify-center gap-24">
                    <div>
                      <h1 className="text-4xl lg:text-5xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0179B4] to-[#4CB6B6]">
                        98%
                      </h1>
                      <p className="text-[#6D6D6D]">
                        Patient Satisfaction Rate
                      </p>
                    </div>
                    <div>
                      <h1 className="text-4xl lg:text-5xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0179B4] to-[#4CB6B6]">
                        200+
                      </h1>
                      <p className="text-[#6D6D6D]">Top Specialists</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div
          className="position-issue-ha absolute -right-8 top-[97%] transform -translate-y-1/2 lg:right-[-9%] lg:top-[85%]"
          style={{ zIndex: "-1" }}
        >
          <img src="/dots-3.png" alt="dots" />
        </div>
      </div>
    </div>
  );
}
