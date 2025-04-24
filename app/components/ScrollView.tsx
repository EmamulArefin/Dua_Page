"use client"; 
import React from "react";
import Image from "next/image";
import al from "@/app/assets/allah.png"; // Make sure to adjust the image path
import hints from "@/app/assets/hints.png"; // Add your hints image path here
import bookmark from "@/app/assets/bmark.png"; // Add your bookmark image path here
import share from "@/app/assets/share.png"; // Add your share image path here
import copy from "@/app/assets/copy.png"; // Add your copy image path here
import report from "@/app/assets/report.png"; // Add your report image path here

export const ScrollView = () => {
  // Sample data for sections with multiple contents per category
  const sections = [
    {
      Category: "Servant of Allah", // Category name
      contents: [ // Multiple contents under this category
        {
          title: "The servant is dependent on his Lord",
          content:
            "All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy.",
          reference: "Surah Al-Fatir 35:15",
        },
        {
          title: "Conditions for Dua to be successful",
          content:
            "Prophet (ﷺ) used to say after every compulsory prayer, The servant will ask his Lord for all his religiously and worldly needs...",
          reference: "Bukhari 844",
        },
      ],
    },
    {
      Category: "Successful Dua",
      contents: [
        {
          title: "The Method of Dua",
          content:
            "The method of making Dua is to raise one's hands and ask with sincerity, humility, and firm belief.",
          reference: "Tirmidhi 3479",
        },
        {
          title: "Before Dua",
          content: "Preparation before making Dua includes ensuring cleanliness, facing the Qibla, and raising your hands with full sincerity.",
          reference: "Sahih Muslim 870",
        },
      ],
    },
  ];

  return (
    <div className="
        sm:w-[600px] sm:h-[800px] sm:top-[100px] sm:left-[1132px] sm:gap-[8px] sm:ml-28
        overflow-y-auto rounded-2xl scrollable scrollbar-hide"
    >
      {/* Scrollable Content Section*/}
      <div className="flex p-4 mt-15">
        <div className=" rounded-4xl w-full">
          {/* Mapping over the sections */}
          {sections.map((section, index) => (
            <div key={index} className=" p-6 rounded-lg mb-3">
              {/* Category Name */}
              <div className="bg-white p-4 rounded-xl mb-3">
                <h3 className="text-xl font-semibold text-[#2b927f] inline mr-2">Section:</h3>
                <p className="inline text-black"> {section.Category} </p>
              </div>

              {/* Mapping over contents within each category */}
              {section.contents.map((content, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-md mb-4">
                  {/* Title and Logo */}
                  <h2 className="text-xl font-semibold text-[#2b927f]">
                    <Image
                      src={al}
                      alt="Logo"
                      width={30}
                      height={30}
                      className="inline-block mr-2"
                    />
                    {idx + 1}. {content.title}
                  </h2>
                  <p className="mt-2 text-gray-600">{content.content}</p>

                  <div className="mt-4">
                    <p className="font-semibold text-green-500">Reference:</p>
                    <p className="text-gray-500">{content.reference}</p>

                    <div className="ml-85 bottom-4 right-4 flex space-x-3">
                    <Image
                      src={copy}
                      alt="Copy"
                      width={16}
                      height={16}
                      className="cursor-pointer"
                    />
                    <Image
                      src={bookmark}
                      alt="Bookmark"
                      width={16}
                      height={16}
                      className="cursor-pointer"
                    />
                    <Image
                      src={hints}
                      alt="Hints"
                      width={16}
                      height={16}
                      className="cursor-pointer"
                    />
                    <Image
                      src={share}
                      alt="Share"
                      width={16}
                      height={16}
                      className="cursor-pointer"
                    />
                    <Image
                      src={report}
                      alt="Report"
                      width={16}
                      height={16}
                      className="cursor-pointer"
                    />
                  </div>
                  </div>

                  {/* Icons in the Bottom Right Corner */}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
