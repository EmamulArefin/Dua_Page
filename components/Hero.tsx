"use client";
import React, { useState } from "react";
import Profile from "@/assets/profile.png";
import Image from "next/image";


export const Hero = () => {
    const [query, setQuery] = useState("");
    return ( 
        <div className=" fixed sm:w-[1350px] sm:h-[36px] sm:top-[40px] sm:left-[140px] sm:gap-[2px] ">
           <div className="fixed sm:w-[117px] sm:h-[36px] sm:top-[45px] sm:left-[140px] sm:gap-[2px]">
                <h1 className="font-bold text-center text-gray-800">Dua Page</h1>
           </div>

        <div className="fixed sm:w-[117px] sm:h-[36px] sm:top-[40px] sm:left-[1450px] sm:gap-[2px]">
           <Image
                src={Profile}
                alt="Logo"
                width={50}
                height={50}
               
            />
        </div>
        
        <div className="fixed  sm:w-[250px] sm:left-[800px] rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-green-500 sm:top-[35px]">
        <input
        type="text"
        placeholder="Search by Dua Name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 outline-none bg-transparent text-gray-700 placeholder-gray-400"
      />
      <button className="text-gray-500 hover:text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
          />
        </svg>
      </button>
     </div>

    </div>
    );

}