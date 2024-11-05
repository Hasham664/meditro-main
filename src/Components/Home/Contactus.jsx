// "use client";

// import React from "react";
// import { useForm } from "react-hook-form";
// import './Custom.css'
// export default function Contactus() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data); // You can replace this with an API call or any other logic
//   };

//   return (
//     <div className="Mycontainer">
//       <h1 className="text-[#3D3D3D] text-center pt-12 lg:pt-24 md:pt-24  text-3xl font-bold lg:text-5xl">
//         Reach our <span className="text-[#4CB6B6]"> Help Desk</span> for support
//       </h1>
//       <p className="text-[#B0B0B0] pt-6 text-center max-w-[440px] m-auto text-lg">
//         Questions? Need assistance? Our dedicated support team is here to help
//         you every step of the way:
//       </p>

//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="flex flex-wrap flex-col lg:flex-row  items-center justify-center contact-issue lg:justify-center md:justify-start gap-10 mt-12"
//       >
//         {/* First Name Field */}
//         <div className="w-full max-w-md flex items-center gap-4 border px-4 py-4 border-blue-500 rounded-lg">
//           <img src="/user.png" alt="User Icon" />
//           <input
//             {...register("firstName", { required: "First Name is required" })}
//             className="outline-none flex-grow"
//             type="text"
//             placeholder="Enter Your First Name"
//           />
//           {errors.firstName && (
//             <p className="text-red-500 text-sm mt-1">
//               {errors.firstName.message}
//             </p>
//           )}
//         </div>

//         {/* Email Field */}
//         <div className="w-full max-w-md flex items-center gap-4 border px-4 py-4 border-blue-500 rounded-lg">
//           <img src="/email.png" alt="Email Icon" />
//           <input
//             {...register("email", {
//               required: "Email is required",
//               pattern: {
//                 value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                 message: "Enter a valid email address",
//               },
//             })}
//             className="outline-none flex-grow"
//             type="text"
//             placeholder="Enter Your Email Address"
//           />
//           {errors.email && (
//             <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
//           )}
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="flex items-center gap-4 px-5 py-3 text-xl lg:text-2xl bg-gradient-to-r from-custom-blue to-custom-teal text-white rounded-lg"
//         >
//           Contact us
//           <img src="/arrow.png" alt="Arrow Icon" />
//         </button>
//       </form>
//     </div>
//   );
// }
"use client"
import React from 'react'

const Contactus = () => {
  return (
    <>
      <div>
      this is contact form.
      </div> 
    </>
  )
}

export default Contactus
