"use client";
import React, { useState } from "react";


export const Category = () => {
    const [query, setQuery] = useState("");
    return (
        <div className="fixed sm:w-[330px] sm:h-[834px] sm:top-[100px] sm:left-[150px] sm:gap-[2px] bg-white rounded-2xl">
    {/* Categories Header */}
    <div className="sm:w-[330px] sm:h-[57px] sm:top-[100px] left-[150px] sm:gap-[2px] bg-green-500 rounded-tl-2xl rounded-tr-2xl">
        <h1 className="text-[20px] p-4 font-bold text-center justify-center text-white">
            Categories
        </h1>
    </div>

    {/* Search Block */}
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

    )
}