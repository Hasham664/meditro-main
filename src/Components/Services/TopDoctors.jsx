"use client";

import Doctors from "../Details/Doctors";
import TeamSlider from "./TeamMembers";


export default function TopDoctors({ activeTab }) {
  return (
    <>
      {activeTab === "Top Doctors" && (
        <div className="mt-12 ">
          <TeamSlider />
        </div>
      )}
    </>
  );
}
