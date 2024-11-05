"use Client"
import React from 'react'
import blueIcon from '../../../public/blue-heart.png'
import Image from 'next/image'
const stats = [
  {
    icon: blueIcon,
    text: "Wellness Consultation",
  },
  {
    icon: blueIcon,
    text: "Transfers",
  },
  {
    icon: blueIcon,
    text: "Air Tickets",
  },
  {
    icon: blueIcon,
    text: "Visas",
  },
];
export default function StatsCards() {
  return (
    <div className="Mycontainer">
      <p className="text-center text-xl lg:text-3xl lg:max-w-4xl m-auto text-[#4CB6B6] font-semibold">
        Experience world-class wellness services with seamless care,
        convenience, and compassion.
      </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 lg:gap-6 md:gap-6 gap-3 ">
              {
                  stats.map((stat, ind) => {
                      return (
                        <div key={ind} className="w-full  mt-6">
                          <div className=" min-h-[203px] text-center items-center  py-12 shadow-sm rounded-md bg-slate-100">
                                  <Image className='m-auto' src={stat.icon } alt='blue' width={40}/>
                                  <p className=' text-lg pt-4'>{stat.text }</p>
                          </div>
                        </div>
                      );
                  })
              }
       

        

        
      </div>
    </div>
  );
}
