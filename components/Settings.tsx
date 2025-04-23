"use client";

import React, { useState } from "react";
import { LuLanguages, LuSettings } from "react-icons/lu";

export const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isFontSettingsOpen, setIsFontSettingsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("English");
  const [translationFontSize, setTranslationFontSize] = useState(16);
  const [arabicFontSize, setArabicFontSize] = useState(18);
  const [arabicScript, setArabicScript] = useState("Uthmani");
  const [arabicFont, setArabicFont] = useState("Me Quran");
  const [isAppearanceSettingsOpen, setIsAppearanceSettingsOpen] = useState(false);
  const [isNightMode, setIsNightMode] = useState(false);


  const [settings, setSettings] = useState({
    arabic: false,
    translation: false,
    transliteration: false,
    reference: false,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const closeAllExcept = (except: string) => {
    setIsOpen(except === "language");
    setIsSettingsOpen(except === "general");
    setIsFontSettingsOpen(except === "font");
  };

  return (
    <div className="fixed sm:w-[330px] sm:h-[834px] sm:top-[100px] sm:left-[1175px] sm:gap-[2px] bg-white rounded-2xl shadow-lg z-50 overflow-y-auto">
      <div className="container mx-auto mt-4 p-4">
        <h1 className="text-[20px] font-bold text-black text-center">Settings</h1>

        {/* Language Settings Button */}
        <div className="relative px-4 mt-6">
          <button
            onClick={() => closeAllExcept(isOpen ? "" : "language")}
            className={`w-full flex items-center font-medium rounded-lg text-sm px-5 py-2.5 bg-gray-100 relative ${
              isOpen ? "pl-4" : ""
            }`}
          >
            {isOpen && <div className="absolute left-0 top-0 h-full w-1 bg-green-500 rounded-l-lg" />}
            <div className="bg-gray-200 p-1 rounded-full mr-2">
              <LuLanguages className={`w-4 h-4 ${isOpen ? "text-green-500" : "text-black"}`} />
            </div>
            <span className={`${isOpen ? "text-green-500" : "text-black"}`}>Language Settings</span>
          </button>

          {isOpen && (
            <div className="mt-2 w-full bg-gray-200 border rounded-lg shadow-lg z-10">
              <div className="flex gap-2 px-2 py-2">
                <button
                  className={`flex-1 px-4 py-2 text-center text-black rounded-l-lg ${
                    currentLanguage === "English" ? "bg-green-400 text-white" : ""
                  }`}
                  onClick={() => {
                    setCurrentLanguage("English");
                    setIsOpen(false);
                  }}
                >
                  English
                </button>
                <button
                  className={`flex-1 px-4 py-2 text-center text-black rounded-r-lg ${
                    currentLanguage === "বাংলা" ? "bg-green-400 text-white" : ""
                  }`}
                  onClick={() => {
                    setCurrentLanguage("বাংলা");
                    setIsOpen(false);
                  }}
                >
                  বাংলা
                </button>
              </div>
            </div>
          )}
        </div>

        {/* General Settings Button */}
        <div className="relative px-4 mt-4">
          <button
            onClick={() => closeAllExcept(isSettingsOpen ? "" : "general")}
            className={`w-full flex items-center font-medium text-sm px-5 py-2.5 relative bg-gray-100 rounded-lg shadow-sm overflow-hidden ${
              isSettingsOpen ? "text-green-600" : "text-black"
            }`}
          >
            {isSettingsOpen && <div className="absolute left-0 top-0 h-full w-1 bg-green-500 rounded-l-lg" />}
            <div className="bg-gray-200 p-1 rounded-full mr-2">
              <LuSettings className={`w-4 h-4 ${isSettingsOpen ? "text-green-500" : "text-black"}`} />
            </div>
            <span className={`${isSettingsOpen ? "text-green-500" : "text-black"}`}>General Settings</span>
          </button>

          {isSettingsOpen && (
            <div className="w-full bg-white border rounded-b-xl shadow-md z-10 p-4 mt-2">
              {["arabic", "translation", "transliteration", "reference"].map((key) => (
                <div key={key} className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-800 capitalize">Show {key}</span>
                  <input
                    type="checkbox"
                    checked={settings[key as keyof typeof settings]}
                    onChange={() => toggleSetting(key as keyof typeof settings)}
                    className="accent-green-500 w-4 h-4 border-green-600"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Font Settings Button */}
        <div className="relative px-4 mt-4">
          <button
            onClick={() => closeAllExcept(isFontSettingsOpen ? "" : "font")}
            className={`w-full flex items-center font-medium text-sm px-5 py-2.5 relative bg-gray-100 rounded-lg shadow-sm overflow-hidden ${
              isFontSettingsOpen ? "text-green-600" : "text-black"
            }`}
          >
            {isFontSettingsOpen && <div className="absolute left-0 top-0 h-full w-1 bg-green-500 rounded-l-lg" />}
            <div className="bg-gray-200 p-1 rounded-full mr-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <span className={`${isFontSettingsOpen ? "text-green-500" : "text-black"}`}>Font Settings</span>
          </button>

          {isFontSettingsOpen && (
            <div className="w-full bg-white border rounded-b-xl shadow-md z-10 p-4 mt-2 space-y-4">
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

              {/* Arabic Script */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">Select Arabic Script</label>
                <select
                  value={arabicScript}
                  onChange={(e) => setArabicScript(e.target.value)}
                  className="w-full p-2 text-sm border rounded bg-gray-50"
                >
                  <option>Uthmani</option>
                  <option>IndoPak</option>
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

        {/* Appearance Settings Button */}
        <div>
          <button
            onClick={() => setIsAppearanceSettingsOpen(!isAppearanceSettingsOpen)}
            className="w-full flex items-center text-black bg-gray-100 rounded-lg font-medium text-sm px-5 py-2.5 shadow-sm"
          >
            <div className="bg-gray-200 p-1 rounded-full mr-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2m6.364 1.636l-1.414 1.414M21 12h-2M17.364 18.364l-1.414-1.414M12 21v-2M6.636 18.364l1.414-1.414M3 12h2M6.636 5.636l1.414 1.414" />
              </svg>
            </div>
            Appearance Settings
          </button>

          {isAppearanceSettingsOpen && (
            <div className="w-full bg-white border rounded-b-xl shadow-md z-10 p-4 space-y-4 mt-2">
              {/* Night Mode Toggle */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Night Mode</span>
                <label className="inline-flex relative items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isNightMode}
                    onChange={() => setIsNightMode(!isNightMode)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-500 rounded-full peer peer-checked:bg-green-500 transition-all"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900"></span>
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
