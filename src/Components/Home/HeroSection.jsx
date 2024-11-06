// components/HeroSection.js
"use client";

import Image from "next/image";
import doctorImage from "../../../public/doctor-pic.png";
import iconImage1 from "../../../public/easy.png";
import iconImage2 from "../../../public/customer.png";
import iconImage3 from "../../../public/lorem.png";
import dottedLine from "../../../public/dot.png";
import map_1 from "../../../public/icon-1.png";
import map_2 from "../../../public/icon-2.png";
import map_3 from "../../../public/icon-3.png";
import map_4 from "../../../public/icon-4.png";
import map_5 from "../../../public/icon-5.png";
import map_6 from "../../../public/icon-6.png";
import "./Custom.css";
import { IoIosArrowForward } from "react-icons/io";

const HeroSection = () => {
  return (
    <>
      <div className=" Mycontainer  flex flex-col items-center gap-6 lg:flex-row lg:justify-between   ">
        <div className=" space-y-4">
          <h1 className="max-w-lg pt-10 text-4xl font-bold text-gray-800">
            Your <span className="text-teal-500">Trusted Partner</span> In
            Digital Healthcare.
          </h1>
          <p className="max-w-lg pt-4 pb-4 text-gray-600 font-medium	">
            <span className="text-[#01B2A8] font-bold">
              {" "}
              Empowering Your Health at Every Step.
            </span>{" "}
            Experience personalized medical care from the comfort of your home.
            Connect with{" "}
            <span className="text-[#01B2A8] font-bold">
              certified doctors,
            </span>{" "}
            or manage prescriptions, and schedule appointments with ease. Ready
            to take control of your health?{" "}
            <span className="text-[#01B2A8] font-bold"> Get Started </span> or
            Book an Appointment today.
          </p>
          <button className="z-10 relative mt-12 flex items-center gap-1 text-xl lg:text-2xl md:text-2xl  cursor-pointer px-6 py-3 bg-gradient-to-r from-custom-blue to-custom-teal text-white rounded-md ">
            Book an appointment
            <IoIosArrowForward className="font-bold" />
          </button>
          <div>
            <p className="pt-6 text-[#B0B0B0]">
              Trusted by millions across the globe:
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-4 z-10 relative">
              {[
                { icon: map_1 },
                { icon: map_2 },
                { icon: map_3 },
                { icon: map_4 },
                { icon: map_5 },
                { icon: map_6 },
              ].map((hero, index) => (
                <div key={index}>
                  <Image
                    className="w-8 h-8 md:w-14 md:h-14"
                    src={hero.icon}
                    alt="hero"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-8 lg:mt-0">
          <div className="relative">
            <Image src={doctorImage} alt="Doctor" className="w-[500px]" />
          </div>

          <div
            className="absolute z-50 icon-one-hero "
            style={{ top: "70%", left: "-30%", zIndex: "99" }}
          >
            <Image
              src={iconImage1}
              alt="Icon 1"
              className=" rounded-full z-10"
            />
          </div>
          <div
            className="absolute icon-two-hero"
            style={{ top: "45%", left: "55%", zIndex: "99", width: "56%" }}
          >
            <Image
              src={iconImage2}
              alt="Icon 2"
              className="w-full h-full rounded-full"
            />
          </div>
          <div
            className="absolute  "
            style={{ top: "85%", left: "45%", zIndex: "99", width: "60%" }}
          >
            <Image
              src={iconImage3}
              alt="Icon 3"
              className="w-full h-full rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="relative mb-12   inset-0  hidden md:block lg:block">
        <Image
          src={dottedLine}
          alt="Dotted Line"
          className="absolute  w-full "
          style={{ top: "-340px" }}
        />
      </div>
    </>
  );
};

export default HeroSection;
