"use client";
import React from "react";
import Image from "next/image";
import al from "@/assets/allah.png"; // Add your logo image path here
import hints from "@/assets/hints.png"; // Add your hints image path here
import bookmark from "@/assets/bmark.png"; // Add your bookmark image path here
import share from "@/assets/share.png"; // Add your share image path here
import copy from "@/assets/copy.png"; // Add your copy image path here

// Sample data for the sections
const sections = [
  {
    title: "The servant is dependent on his Lord",
    content: "All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world...",
    reference: "Surah Al-Fatir 35:15",
  },
  {
    title: "Conditions for Dua to be successful",
    content: "Prophet (ﷺ) used to say after every compulsory prayer, The servant will ask his Lord for all his religiously and worldly needs...",
    reference: "Bukhari 844",
  },
  {
    title: "The Method of Dua",
    content: "The method of making Dua is to raise one's hands and ask with sincerity, humility, and firm belief...",
    reference: "Tirmidhi 3479",
  },
  // Add more sections as needed
];

export const DuaPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {sections.map((section, index) => (
        <div key={index} className="relative bg-white p-6 rounded-lg shadow-md mb-6">
          {/* Title and Content */}
          <h2 className="text-xl font-semibold text-[#2b927f]">
            <Image src={al} alt="Logo" width={30} height={30} className="inline-block mr-2" />
            {index + 1}. {section.title}
          </h2>
          <p className="mt-2 text-gray-600">{section.content}</p>

          <div className="mt-4">
            <p className="font-semibold text-green-500">Reference:</p>
            <p className="text-gray-500">{section.reference}</p>
          </div>

          {/* Icons in the Bottom Right Corner */}
          <div className="absolute bottom-4 right-4 flex space-x-3">
            
            <Image src={hints} alt="Hints" width={15} height={15} className="cursor-pointer" />
            <Image src={bookmark} alt="Bookmark" width={15} height={15} className="cursor-pointer" />
            <Image src={share} alt="Share" width={15} height={15} className="cursor-pointer" />
            <Image src={copy} alt="Copy" width={15} height={15} className="cursor-pointer" />
           </div>
        </div>
      ))}
    </div>
  );
};