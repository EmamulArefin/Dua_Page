"use client";
import Image from "next/image";
import React from "react";
import Logo from "@/app/assets/logo.png";
import HomeImage from "@/app/assets/Home.png";
import All_Dua from "@/app/assets/All-Duas.png";
import memo from "@/app/assets/Memorize.png";
import Bookmark from "@/app/assets/Bookmark.png";
import Ruqyah from "@/app/assets/Ruqyah.png";
import dua_qa from "@/app/assets/Dua_Q&A.png";
import Book from "@/app/assets/Book.png";
import Support from "@/app/assets/want-support.png";
import Link from "next/link";

export const Navbar = () => {
    return (
        <div className="fixed hidden sm:block sm:w-[100px] sm:h-[927px] top-[40px] sm:left-[30px] rounded-2xl bg-white shadow-sm">
            {/* Logo */}
            <div className="fixed sm:w-[73px] sm:h-[73px] sm:top-[50px] sm:left-[40px]">
                <Image
                    src={Logo}
                    alt="Logo"
                    width={80}
                />
            </div>

            {/* Navbar Links */}
            <div className="fixed sm:w-[38px] sm:h-[428px] sm:top-[200px] sm:left-[58px] sm:gap-[27px] flex flex-col">
                <ul className="flex flex-col gap-[27px]">
                    <li className="w-[38px] h-[38px] rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer transition duration-300 ease-in-out">
                        <Link href="#Home">
                            <Image src={HomeImage} alt="Home" width={20} height={20} />
                        </Link>
                    </li>
                    <li className="w-[38px] h-[38px] rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer transition duration-300 ease-in-out">
                        <Link href="#All-Dua">
                            <Image src={All_Dua} alt="All Duas" width={20} height={20} />
                        </Link>
                    </li>
                    <li className="w-[38px] h-[38px] rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer transition duration-300 ease-in-out">
                        <Link href="#Memorize">
                            <Image src={memo} alt="Memorize" width={20} height={20} />
                        </Link>
                    </li>
                    <li className="w-[38px] h-[38px] rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer transition duration-300 ease-in-out">
                        <Link href="#Bookmark">
                            <Image src={Bookmark} alt="Bookmark" width={20} height={20} />
                        </Link>
                    </li>
                    <li className="w-[38px] h-[38px] rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer transition duration-300 ease-in-out">
                        <Link href="#Ruqyah">
                            <Image src={Ruqyah} alt="Ruqyah" width={20} height={20} />
                        </Link>
                    </li>
                    <li className="w-[38px] h-[38px] rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer transition duration-300 ease-in-out">
                        <Link href="#Dua-QA">
                            <Image src={dua_qa} alt="Dua Q&A" width={20} height={20} />
                        </Link>
                    </li>
                    <li className="w-[38px] h-[38px] rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer transition duration-300 ease-in-out">
                        <Link href="#Book">
                            <Image src={Book} alt="Book" width={20} height={20} />
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Support Icon */}
            <div className="fixed sm:w-[73px] sm:h-[73px] sm:top-[680px] sm:left-[40px]">
                <Image
                    src={Support}
                    alt="Support"
                    width={80}
                />
            </div>
        </div>
    );
};
