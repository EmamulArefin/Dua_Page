"use client";
import React, { useState } from "react";
import Image from "next/image";
import feo from "@/assets/feo.png"; // Make sure to adjust the image path

export const Category = () => {
  const [query, setQuery] = useState(""); // For search input
  const [openDropdown, setOpenDropdown] = useState(null); // Tracks which dropdown is open

  // Function to toggle the dropdown
  const toggleDropdown = (category:any) => {
    if (openDropdown === category) {
      setOpenDropdown(null); // Close if it's already open
    } else {
      setOpenDropdown(category); // Open the clicked dropdown
    }
  };

  return (
    <div className="fixed sm:w-[330px] sm:h-[834px] sm:top-[100px] sm:left-[150px] sm:gap-[2px] bg-white rounded-2xl">
      {/* Categories Header */}
      <div className="sm:w-[330px] sm:h-[57px] sm:top-[100px] left-[150px] sm:gap-[2px] bg-green-500 rounded-tl-2xl rounded-tr-2xl">
        <h1 className="text-[20px] p-4 font-bold text-center text-white">Categories</h1>
      </div>

      {/* Search Block */}
      <div className="flex flex-col gap-1 mt-2 px-4">
        <div className="flex items-center rounded-lg border border-gray-300 bg-white px-4 py-3 shadow-sm mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
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
          <input
            type="text"
            placeholder="Search by Dua Name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 outline-none bg-transparent text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Category List */}
      <div className="relative mt-4 px-4">
        {/* Dropdown Button 1 */}
        <div className="mb-4">
          <button
            onClick={() => toggleDropdown("category1")}
            className={`w-full flex items-center font-medium rounded-lg text-sm px-5 py-2.5 bg-gray-100 relative ${
              openDropdown === "category1" ? "pl-4" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <Image
                src={feo}
                alt="Logo"
                width={50}
                height={50}
                className="w-8 h-8"
              />
              <div>
                <p className="text-[#2b927f] font-semibold">Introduction to Dua</p>
                <p className="text-xs text-gray-500 -ml-11">Subcategory: 11</p>
              </div>
            </div>
            <div className="text-gray-600 font-bold ml-8">15 Duas</div>
          </button>

          {/* Dropdown content for Button 1 */}
          {openDropdown === "category1" && (
            <div className="mt-4 p-4 bg-white shadow-md rounded-lg">
              <p>Here are the details for "Introduction to Dua"</p>
            </div>
          )}
        </div>

        {/* Dropdown Button 2 */}
        <div>
          <button
            onClick={() => toggleDropdown("category2")}
            className={`w-full flex items-center font-medium rounded-lg text-sm px-5 py-2.5 bg-gray-100 relative ${
              openDropdown === "category2" ? "pl-4" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <Image
                src={feo}
                alt="Logo"
                width={50}
                height={50}
                className="w-8 h-8"
              />
              <div>
                <p className="text-[#2b927f] font-semibold">Introduction to Dua</p>
                <p className="text-xs text-gray-500 -ml-11">Subcategory: 11</p>
              </div>
            </div>
            <div className="text-gray-600 font-bold ml-8">15 Duas</div>
          </button>

          {/* Dropdown content for Button 2 */}
          {openDropdown === "category2" && (
            <div className="mt-4 p-4 bg-white shadow-md rounded-lg">
              <p>Here are the details for "Introduction to Dua"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
