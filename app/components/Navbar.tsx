"use client";
import Image from "next/image";
import React, { useState } from "react";
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
        <div className="fixed w-[80px] sm:w-[100px] h-[600px] sm:h-[927px] top-[20px] sm:top-[40px] left-[20px] sm:left-[30px] rounded-2xl bg-white shadow-sm">
            <div className="fixed w-[60px] h-[60px] top-[35px] left-[28px] sm:w-[73px] sm:h-[73px] sm:top-[50px] sm:left-[40px]">
            <Image
                src={Logo}
                alt="Logo"
                width={80}
            />
            </div>

            <div className="fixed w-[30px] h-[300px] top-[150px] left-[40px] gap-[15px] sm:w-[38px] sm:h-[428px] sm:top-[200px] sm:left-[58px] sm:gap-[27px]  flex flex-col">
                <ul className="flex flex-col gap-[15px] sm:gap-[27px]">
                    <li className="w-[30px] h-[30px] sm:w-[38px] sm:h-[38px] rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer transition duration-300 ease-in-out">
                        <Link href="#Home">
                        <Image src={HomeImage} alt="Logo" width={20} height={20} />
                        </Link>
                    </li>
                    <li className="w-[30px] h-[30px] sm:w-[38px] sm:h-[38px]  rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer transition duration-300 ease-in-out">
                        <Link href="#All-Dua">
                        <Image src={All_Dua} alt="Logo" width={20} height={20} />
                        </Link>
                    </li>
                    <li className="w-[30px] h-[30px] sm:w-[38px] sm:h-[38px]  rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer transition duration-300 ease-in-out">
                        <Link href="#Memorize">
                        <Image src={memo} alt="Logo" width={20} height={20} />
                        </Link>
                    </li>
                    <li className="w-[30px] h-[30px] sm:w-[38px] sm:h-[38px] rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer transition duration-300 ease-in-out">
                        <Link href="#Bookmark">
                        <Image src={Bookmark} alt="Logo" width={20} height={20} />
                        </Link>
                    </li>
                    <li className="w-[30px] h-[30px] sm:w-[38px] sm:h-[38px] rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer transition duration-300 ease-in-out">
                       <Link href="#Ruqyah">
                       <Image src={Ruqyah} alt="Logo" width={20} height={20} />
                        </Link>
                    </li>
                    <li className="w-[30px] h-[30px] sm:w-[38px] sm:h-[38px] rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer transition duration-300 ease-in-out">
                        <Link href="#Dua-QA">
                        <Image src={dua_qa} alt="Logo" width={20} height={20} />
                        </Link>
                    </li>
                    <li className="w-[30px] h-[30px] sm:w-[38px] sm:h-[38px] rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer transition duration-300 ease-in-out">
                        <Link href="#Book">
                        <Image src={Book} alt="Logo" width={20} height={20} />
                        </Link>
                    </li>
                </ul>
            </div>

         <div className="fixed w-[60px] h-[60px] top-[500px] left-[28px] sm:w-[73px] sm:h-[73px] sm:top-[680px] sm:left-[40px]">
            <Image
                src={Support}
                alt="Logo"
                width={80}
            />
         </div>
        </div>

    );
}
