"use client";

import docs_1 from "../../../public/team-1.png";
import docs_2 from "../../../public/team-2.png";
import docs_3 from "../../../public/team-3.png";
// import icons from "../../../public/team-icon-1.png";
// import icons_1 from "../../../public/team-icon-2.png";
// import icons_2 from "../../../public/team-icon-3.png";
import { LiaInstagram } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";

import './Custom.css'
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const TeamSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const teamMembers = [
    {
      name: "Doctor’s Name",
      specialty: "NEUROLOGY",
      imgSrc: docs_1,
      icons: [<LiaInstagram />, <FaFacebookF />, <LiaLinkedinIn />],
    },
    {
      name: "Doctor’s Name",
      specialty: "NEUROLOGY",
      imgSrc: docs_2,
      icons: [<LiaInstagram />, <FaFacebookF />, <LiaLinkedinIn />],
    },
    {
      name: "Doctor’s Name",
      specialty: "NEUROLOGY",
      imgSrc: docs_3,
      icons: [<LiaInstagram />, <FaFacebookF />, <LiaLinkedinIn />],
    },
  ];

  return (
    <div className="py-8 Mycontainer">
      <h2 className="text-center text-xl font-bold  text-[#0069AB]  mb-2">
        MEET THE
      </h2>
      <h1 className="text-[#4CB6B6] text-2xl lg:text-4xl md:text-3xl text-center font-bold">
        Team Members
      </h1>
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index} className="lg:px-4 md:px-4 px-0 mt-12">
            <div className="  text-center">
              <Image className="w-full" src={member.imgSrc} alt="dr" />
              <h3 className="text-lg text-[#0069AB] font-sans font-normal pt-6 ">
                {member.name}
              </h3>
              <p className=" mb-2 font-bold font-sans tracking-widest text-[#0069AB] pt-2 text-xl">
                {member.specialty}
              </p>
              <div className="flex justify-center space-x-6 mt-2 mb-4">
                {member.icons.map((IconComponent, iconIndex) => (
                  <div
                    key={iconIndex}
                    className="bg-[#0069AB]  rounded-full px-2 py-2 mt-3"
                  >
                    <span className="text-xl text-white">{IconComponent}</span>
                  </div>
                ))}
              </div>
              <button className=" w-full bg-[#0069AB] text-white text-white py-3 px-4 rounded-sm">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamSlider;
