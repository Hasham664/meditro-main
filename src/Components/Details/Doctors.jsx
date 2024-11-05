"use client";

import docs_1 from "../../../public/team-1.png";
import docs_2 from "../../../public/team-2.png";
import docs_3 from "../../../public/team-3.png";
import icons from "../../../public/team-icon-1.png";
import icons_1 from "../../../public/team-icon-2.png";
import icons_2 from "../../../public/team-icon-3.png";
import "../Home/Custom.css";
import Image from "next/image";




const Doctors = () => {
 

  const teamMembers = [
    {
      name: "Doctor’s Name",
      specialty: "NEUROLOGY",
      imgSrc: docs_1,
      icon: icons,
      icon2: icons_1,
      icon3: icons_2,
    },
    {
      name: "Doctor’s Name",
      specialty: "NEUROLOGY",
      imgSrc: docs_2,
      icon: icons,
      icon2: icons_1,
      icon3: icons_2,
    },
    {
      name: "Doctor’s Name",
      specialty: "NEUROLOGY",
      imgSrc: docs_3,
      icon: icons,
      icon2: icons_1,
      icon3: icons_2,
    },
  ];

  return (
    <div className="py-8 Mycontainer">
      <h2 className="text-center text-2xl lg:text-3xl  text-[#0069AB] pt-12  mb-2">
        Our Doctor
      </h2>
      <h1 className="text-[#4CB6B6] text-2xl lg:text-4xl md:text-3xl text-center font-semibold">
        Meet Best Doctors
      </h1>
      <div className="flex flex-wrap justify-between ">
        {teamMembers.map((member, index) => (
          <div key={index} className="mt-12 ">
            <div className="  text-center">
              <Image className="m-auto " src={member.imgSrc} alt="docs"/>
              <h3 className="text-lg text-[#0069AB] pt-6 ">{member.name}</h3>
              <p className=" mb-2 font-semibold text-[#0069AB] pt-2 text-xl">
                {member.specialty}
              </p>
              <div className="flex justify-center space-x-4 mb-4">
                <Image
                  className=" "
                  src={member.icon2}
                  alt="icon2"
                  width={25}
                />
                <Image className=" " src={member.icon} alt="icon" width={25} />
                <Image
                  className=" "
                  src={member.icon3}
                  alt="icon3"
                  width={25}
                />
              </div>
              <button className="w-full mt-4 bg-[#0069AB] text-white text-white py-3 px-4 rounded-sm">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
