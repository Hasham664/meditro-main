"use client";
import { useState } from "react";
import DentistryServices from "./DentistryServices";
import Hospitals from "./Hospitals";
import TopDoctors from "./TopDoctors";

export default function CardsTab() {
  const [activeTab, setActiveTab] = useState("Our Dentistry Services");

  

    return (
      <>
        <div className="flex flex-warp items-center gap-0 lg:gap-8 justify-between mt-24 space-x-4 Mycontainer">
          {["Our Dentistry Services", "Hospitals", "Top Doctors"].map((tab) => (
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
              <DentistryServices activeTab={activeTab} />
              <Hospitals activeTab={activeTab} />{" "}
              <TopDoctors activeTab={activeTab} />
            </div>
          </div>
        </div>
      </>
    );
}
