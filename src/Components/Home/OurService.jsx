"use client";

import Image from "next/image";
import serviceImage1 from "../../../public/service-1.png";
import serviceImage2 from "../../../public/service-2.png";
import medical from "../../../public/medical.png";
import heart2 from "../../../public/heart-2.png";
import medical_plus from "../../../public/medical-plus.png";
import suppor from "../../../public/suppor-icon.png";
import Link from "next/link";
import { useState } from "react";
export default function OurService() {
    const [activeTab, setActiveTab] = useState(0);
const services = [
  { name: "Consulta tions", icon: medical },
  { name: "Travel", icon: "heart2" },
  { name: "Treatment", icon: medical_plus },
  { name: "Post Care Support", icon: suppor },
];
  return (
    <div className="bg-[#4CB6B60D] lg:mt-24 md:mt-24 mt-12 pb-12">
      <section className="Mycontainer">
        <h2 className="text-center text-4xl font-semibold text-teal-600 mb-8 lg:pt-24 pt-12 pb-12">
          Our Services
        </h2>

        <div className="flex flex-col lg:flex-row items-start ">
          <div className=" text-center">
            <div className=" justify-center flex flex-row flex-wrap gap-4 lg:gap-0 md:gap-4 lg:flex-col  ">
              {services.map((service, index) => (
                <div
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex flex-col items-center p-4 lg:p-6 md:p-6 rounded-sm cursor-pointer transition duration-200 mb-4 ${
                    activeTab === index
                      ? "bg-[#0069AB] text-white"
                      : "text-black hover:bg-[#0069AB] hover:text-white"
                  }`}
                >
                  {service.icon === "heart2" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="39"
                      height="34"
                      viewBox="0 0 39 34"
                      fill="none"
                      className="w-10 h-10"
                    >
                      <path
                        d="M23.1519 14.9605H21.2642V13.0904C21.2642 12.5944 21.0653 12.1187 20.7113 11.768C20.3573 11.4172 19.8772 11.2202 19.3765 11.2202C18.8759 11.2202 18.3958 11.4172 18.0418 11.768C17.6878 12.1187 17.4889 12.5944 17.4889 13.0904V14.9605H15.6012C15.1006 14.9605 14.6204 15.1575 14.2664 15.5083C13.9124 15.859 13.7136 16.3347 13.7136 16.8307C13.7136 17.3266 13.9124 17.8023 14.2664 18.153C14.6204 18.5038 15.1006 18.7008 15.6012 18.7008H17.4889V20.571C17.4889 21.0669 17.6878 21.5426 18.0418 21.8933C18.3958 22.2441 18.8759 22.4411 19.3765 22.4411C19.8772 22.4411 20.3573 22.2441 20.7113 21.8933C21.0653 21.5426 21.2642 21.0669 21.2642 20.571V18.7008H23.1519C23.6525 18.7008 24.1326 18.5038 24.4866 18.153C24.8406 17.8023 25.0395 17.3266 25.0395 16.8307C25.0395 16.3347 24.8406 15.859 24.4866 15.5083C24.1326 15.1575 23.6525 14.9605 23.1519 14.9605ZM34.7799 3.73961C32.767 1.76605 30.1085 0.57021 27.284 0.367881C24.4595 0.165551 21.655 0.970052 19.3765 2.63622C16.9748 0.866379 13.9854 0.0638494 11.0103 0.390239C8.03519 0.716629 5.29542 2.14769 3.3427 4.39525C1.38998 6.64281 0.369352 9.53992 0.486347 12.5032C0.603342 15.4664 1.84927 18.2757 3.97323 20.3652L15.2992 31.6796C16.361 32.7303 17.8003 33.3204 19.301 33.3204C20.8017 33.3204 22.2411 32.7303 23.3029 31.6796L34.6288 20.3652C35.7443 19.2855 36.6334 17.998 37.245 16.5768C37.8567 15.1555 38.1787 13.6285 38.1928 12.0835C38.2068 10.5385 37.9125 9.00605 37.3268 7.57412C36.7411 6.14219 35.8755 4.83906 34.7799 3.73961ZM32.1182 17.6909L20.7923 28.9118C20.6168 29.0871 20.408 29.2262 20.178 29.3212C19.948 29.4161 19.7012 29.465 19.452 29.465C19.2029 29.465 18.9561 29.4161 18.7261 29.3212C18.4961 29.2262 18.2873 29.0871 18.1118 28.9118L6.78585 17.6909C5.30546 16.1917 4.4765 14.1778 4.4765 12.0805C4.4765 9.98317 5.30546 7.96924 6.78585 6.47003C8.29438 4.99446 10.3289 4.16706 12.4488 4.16706C14.5687 4.16706 16.6033 4.99446 18.1118 6.47003C18.2873 6.64531 18.4961 6.78444 18.7261 6.87938C18.9561 6.97433 19.2029 7.02321 19.452 7.02321C19.7012 7.02321 19.948 6.97433 20.178 6.87938C20.408 6.78444 20.6168 6.64531 20.7923 6.47003C22.3008 4.99446 24.3354 4.16706 26.4553 4.16706C28.5752 4.16706 30.6097 4.99446 32.1182 6.47003C33.61 7.97091 34.4461 9.99279 34.4461 12.0992C34.4461 14.2056 33.61 16.2274 32.1182 17.7283V17.6909Z"
                        fill="#4CB6B6"
                      />
                    </svg>
                  ) : (
                    <Image
                      className="w-10 h-10"
                      src={service.icon}
                      alt="service icon"
                    />
                  )}
                  <span className="text-lg max-w-[90px] m-auto text-center pt-4">
                    {service.name}
                  </span>
                </div>
              ))}
            </div>
            <button className="px-14 py-4 mb-12 text-white bg-[#0069AB] rounded-lg">
              View All
            </button>
          </div>
          {/* Main Content Section */}

          {activeTab === 0 && (
            <>
              <div className="flex-1 px-0 lg:px-12 md:px-6 sm:px-4">
                <h3 className="text-2xl pb-2 font-semibold text-gray-800">
                  A passion for putting patients first.
                </h3>

                {/* Points */}
                <ul className="grid grid-cols-2 gap-6 text-gray-700 mt-6">
                  {[
                    "A Passion for Healing",
                    "All our best",
                    "A Legacy of Excellence",
                    "5-Star Care",
                    "Believe in Us",
                    "Always Caring",
                  ].map((point, index) => (
                    <li
                      key={index}
                      className="flex items-center text-[#000000] space-x-2"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Description */}
                <p className=" mt-10 lg:mt-24 md:mt-24 text-xl max-w-[628px] text-[#212124]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque placerat scelerisque tortor ornare ornare. Quisque
                  placerat scelerisque tortor ornare ornare Convallis felis
                  vitae tortor augue. Velit nascetur proin massa in. Consequat
                  faucibus porttitor enim et.
                </p>
                <p className="mt-10 pb-12 text-xl text-[#212124]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque placerat scelerisque. Convallis felis vitae tortor
                  augue. Velit nascetur proin massa in.
                </p>
              </div>
              <div className=" ">
                <Image
                  src={serviceImage1}
                  alt="Service Image 1"
                  className="rounded-lg"
                />
                <Image
                  src={serviceImage2}
                  alt="Service Image 2"
                  className="rounded-lg mt-6 mb-8"
                />
              </div>
            </>
          )}
          {activeTab === 1 && (
            <>
              <div className="flex-1 px-0 lg:px-12 md:px-6 sm:px-4">
                <h3 className="text-2xl pb-2 font-semibold text-gray-800">
                  b passion for putting patients first.
                </h3>

                {/* Points */}
                <ul className="grid grid-cols-2 gap-6 text-gray-700 mt-6">
                  {[
                    "A Passion for Healing",
                    "All our best",
                    "A Legacy of Excellence",
                    "5-Star Care",
                    "Believe in Us",
                    "Always Caring",
                  ].map((point, index) => (
                    <li
                      key={index}
                      className="flex items-center text-[#000000] space-x-2"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Description */}
                <p className="mt-24 text-xl max-w-[628px] text-[#212124]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque placerat scelerisque tortor ornare ornare. Quisque
                  placerat scelerisque tortor ornare ornare Convallis felis
                  vitae tortor augue. Velit nascetur proin massa in. Consequat
                  faucibus porttitor enim et.
                </p>
                <p className="mt-12 pb-12 text-xl text-[#212124]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque placerat scelerisque. Convallis felis vitae tortor
                  augue. Velit nascetur proin massa in.
                </p>
              </div>
              <div className=" ">
                <Image
                  src={serviceImage1}
                  alt="Service Image 1"
                  className="rounded-lg"
                />
                <Image
                  src={serviceImage2}
                  alt="Service Image 2"
                  className="rounded-lg mt-6"
                />
              </div>
            </>
          )}
          {activeTab === 2 && (
            <>
              <div className="flex-1 px-0 lg:px-12 md:px-6 sm:px-4">
                <h3 className="text-2xl pb-2 font-semibold text-gray-800">
                  C passion for putting patients first.
                </h3>

                {/* Points */}
                <ul className="grid grid-cols-2 gap-6 text-gray-700 mt-6">
                  {[
                    "A Passion for Healing",
                    "All our best",
                    "A Legacy of Excellence",
                    "5-Star Care",
                    "Believe in Us",
                    "Always Caring",
                  ].map((point, index) => (
                    <li
                      key={index}
                      className="flex items-center text-[#000000] space-x-2"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Description */}
                <p className="mt-24 text-xl max-w-[628px] text-[#212124]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque placerat scelerisque tortor ornare ornare. Quisque
                  placerat scelerisque tortor ornare ornare Convallis felis
                  vitae tortor augue. Velit nascetur proin massa in. Consequat
                  faucibus porttitor enim et.
                </p>
                <p className="mt-12 pb-12 text-xl text-[#212124]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque placerat scelerisque. Convallis felis vitae tortor
                  augue. Velit nascetur proin massa in.
                </p>
              </div>
              <div className=" ">
                <Image
                  src={serviceImage1}
                  alt="Service Image 1"
                  className="rounded-lg"
                />
                <Image
                  src={serviceImage2}
                  alt="Service Image 2"
                  className="rounded-lg mt-6"
                />
              </div>
            </>
          )}
          {activeTab === 3 && (
            <>
              <div className="flex-1 px-0 lg:px-12 md:px-6 sm:px-4">
                <h3 className="text-2xl pb-2 font-semibold text-gray-800">
                  D passion for putting patients first.
                </h3>

                {/* Points */}
                <ul className="grid grid-cols-2 gap-6 text-gray-700 mt-6">
                  {[
                    "A Passion for Healing",
                    "All our best",
                    "A Legacy of Excellence",
                    "5-Star Care",
                    "Believe in Us",
                    "Always Caring",
                  ].map((point, index) => (
                    <li
                      key={index}
                      className="flex items-center text-[#000000] space-x-2"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Description */}
                <p className="mt-24 text-xl max-w-[628px] text-[#212124]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque placerat scelerisque tortor ornare ornare. Quisque
                  placerat scelerisque tortor ornare ornare Convallis felis
                  vitae tortor augue. Velit nascetur proin massa in. Consequat
                  faucibus porttitor enim et.
                </p>
                <p className="mt-12 pb-12 text-xl text-[#212124]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque placerat scelerisque. Convallis felis vitae tortor
                  augue. Velit nascetur proin massa in.
                </p>
              </div>
              <div className=" ">
                <Image
                  src={serviceImage1}
                  alt="Service Image 1"
                  className="rounded-lg"
                />
                <Image
                  src={serviceImage2}
                  alt="Service Image 2"
                  className="rounded-lg mt-6"
                />
              </div>
            </>
          )}
        </div>
        <div className="mt-6 flex justify-center pb-10">
          <Link href="/service">
            <button className=" bg-gradient-to-r from-custom-blue to-custom-teal flex items-center text-lg gap-4 text-white font-semibold px-6 py-4 rounded-lg hover:bg-teal-600 transition">
              Book Now
              <img src="/check.png" alt="" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
