"use client";

import Link from "next/link";
import plus from "../../../public/plus.png";
import Image from "next/image";
const services = [
  {
    icon: plus,

    title: "Orthodontic Treatments",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.",
    link: "/ServiceDetail",
  },
  {
    icon: plus,
    title: "Restorative Treatments",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.",
    link: "/ServiceDetail",
  },
  {
    icon: plus,
    title: "Root Canal Treatments",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.",
    link: "/ServiceDetail",
  },
  {
    icon: plus,
    title: "Root Canal Treatments",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.",
    link: "/ServiceDetail",
  },
  {
    icon: plus,
    title: "Root Canal Treatments",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.",
    link: "/ServiceDetail",
  },
  {
    icon: plus,
    title: "Root Canal Treatments",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.",
    link: "/ServiceDetail",
  },
];

export default function ServiceSection() {
  return (
    <div className="bg-[#49BEBA33] lg:mt-24 md::mt-24 mt-12 mb-12 pt-12 lg:pt-24 md:pt-24 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 Mycontainer">
        {services.map((service, ind) => (
          <div className="bg-white" key={ind}>
            <div className="bg-[#4CB6B6] p-6 max-w-fit m-auto mt-12	">
              <Image
                className="m-auto"
                src={service.icon}
                alt="service"
                width={60}
              />
            </div>
            <div key={service.title} className="card">
              <h3 className="text-[#4CB6B6] font-bold	 text-center text-2xl  m-auto max-w-48	pt-6">
                {service.title}
              </h3>
              <p className="text-[#000000] font-sans font-normal	 px-4 text-center text-base	 m-auto pt-4 max-w-[344px]	">
                {service.para}
              </p>
              <Link href={service.link}>
                <button className="flex m-auto mt-10 mb-10 items-center gap-4 px-5 py-3 text-xl lg:text-2xl bg-gradient-to-r from-custom-blue to-custom-teal text-white rounded-lg">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
