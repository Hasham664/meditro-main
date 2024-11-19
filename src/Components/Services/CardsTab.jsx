"use client";
import { useState } from "react";
import DentistryServices from "./DentistryServices";
import Hospitals from "./Hospitals";
import TopDoctors from "./TopDoctors";
import { IoStar } from "react-icons/io5";

export default function CardsTab() {
    const [activeTab, setActiveTab] = useState("Procedure");

const [procedureCheckbox, setProcedureCheckbox] = useState(null)
const [hospitalCheckbox, setHospitalCheckbox] = useState(null);
const [topDoctorCheckbox, setTopDoctorCheckbox] = useState(null);
 const checkAllCHeckbox = () => {
   return (
     procedureCheckbox !== null &&
     hospitalCheckbox !== null &&
     topDoctorCheckbox !== null
   );
 };
  const prices = [
    {
      name: "Gold",
      icons: [
        <IoStar key="star" />,
        <IoStar key="star2" />,
        <IoStar key="star3" />,
      ],
      btn: "Contact us",
    },
    {
      name: "Silver",
      icons: [
        <IoStar key="star" />,
        <IoStar key="star2" />,
        <IoStar key="star3" />,
      ],
      btn: "Contact us",
    },
    {
      name: "Platenium",
      icons: [
        <IoStar key="star" />,
        <IoStar key="star2" />,
        <IoStar key="star3" />,
      ],
      btn: "Contact us",
    },
  ];

  
    return (
      <>
        <div className="flex flex-warp items-center gap-0 lg:gap-8 justify-between mt-24 space-x-4 Mycontainer">
          {["Procedure", "Hospitals", "Top Doctors"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={` border-0 px-4 py-2 text-sm lg:text-4xl md:text-2xl mt-12 lg:mt-24 md:mt-24 ${
                activeTab === tab
                  ? "active-tab bg-[#4CB6B6] text-white"
                  : "text-[#4CB6B6]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="bg-[#49BEBA33]">
          <div className="flex flex-col Mycontainer text-center  ">
            <div className=" mb-24">
              <DentistryServices
                checkbox={procedureCheckbox}
                setCheckbox={setProcedureCheckbox}
                activeTab={activeTab}
              />
              <Hospitals
                activeTab={activeTab}
                checkbox={hospitalCheckbox}
                setCheckbox={setHospitalCheckbox}
              />{" "}
              <TopDoctors
                activeTab={activeTab}
                checkbox={topDoctorCheckbox}
                setCheckbox={setTopDoctorCheckbox}
              />
            </div>
          </div>
        </div>
        <div className="Mycontainer flex lg:justify-between md:justify-between justify-center flex-wrap gap-10 items-center">
          {checkAllCHeckbox() && prices.map((item, ind) => {
            return (
              <div key={ind} className=" pt-12 text-center">
                <div className="flex gap-4 text-2xl justify-center">
                  {item.icons.map((icon, i) => {
                    return <div key={i}>{icon}</div>;
                  })}
                </div>
                <h1 className="text-2xl pt-2 text-[#4CB6B6] font-bold">
                  {item.name}
                </h1>
                <button className="mt-4    px-5 py-3 text-xl lg:text-2xl bg-gradient-to-r from-custom-blue to-custom-teal text-white rounded-lg">
                  {item.btn}
                </button>
              </div>
            );
          })}
        </div>
      </>
    );
}
