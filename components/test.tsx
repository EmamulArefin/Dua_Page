'use client';

import { useState } from 'react';

export const FontSettings = () => {
  const [translationFontSize, setTranslationFontSize] = useState(20);
  const [arabicFontSize, setArabicFontSize] = useState(20);
  const [arabicScript, setArabicScript] = useState("Uthmani");
  const [arabicFont, setArabicFont] = useState("Me Quran");
  const [isFontSettingsOpen, setIsFontSettingsOpen] = useState(false);

  return (
    <div className="relative px-4 top-9">
      {/* Button */}
      <button
        onClick={() => setIsFontSettingsOpen(!isFontSettingsOpen)}
        className="w-full flex items-center text-black bg-gray-100 rounded-lg font-medium text-sm px-5 py-2.5 shadow-sm"
      >
        <div className="bg-gray-200 p-1 rounded-full mr-2">
          {/* Replace with your icon */}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </div>
        Font Settings
      </button>

      {/* Dropdown Panel */}
      {isFontSettingsOpen && (
        <div className="w-full bg-white border rounded-b-xl shadow-md z-10 p-4 space-y-4 mt-2">
          {/* Translation Font Size */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">Translation Font Size</label>
            <div className="flex items-center">
              <input
                type="range"
                min={10}
                max={30}
                value={translationFontSize}
                onChange={(e) => setTranslationFontSize(Number(e.target.value))}
                className="w-full accent-green-500"
              />
              <span className="ml-2 text-sm">{translationFontSize}</span>
            </div>
          </div>

          {/* Select Arabic Script */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">Select Arabic Script</label>
            <select
              value={arabicScript}
              onChange={(e) => setArabicScript(e.target.value)}
              className="w-full p-2 text-sm border rounded bg-gray-50"
            >
              <option>Uthmani</option>
              <option>IndoPak</option>
              {/* Add more if needed */}
            </select>
          </div>

          {/* Arabic Font */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">Arabic Font</label>
            <select
              value={arabicFont}
              onChange={(e) => setArabicFont(e.target.value)}
              className="w-full p-2 text-sm border rounded bg-gray-50"
            >
              <option>Me Quran</option>
              <option>Amiri</option>
              <option>Lateef</option>
              {/* Add more if needed */}
            </select>
          </div>

          {/* Arabic Font Size */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">Arabic Font Size</label>
            <div className="flex items-center">
              <input
                type="range"
                min={10}
                max={30}
                value={arabicFontSize}
                onChange={(e) => setArabicFontSize(Number(e.target.value))}
                className="w-full accent-green-500"
              />
              <span className="ml-2 text-sm">{arabicFontSize}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
