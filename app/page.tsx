import { Category } from "@/components/Category";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ScrollView } from "@/components/ScrollView";
import { Settings } from "@/components/Settings";
import Image from "next/image";

export default function Home() {
  return (
    
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center">
    <Navbar />
    <Hero />
    <Category />
    <Settings />
    <ScrollView />
    </div>
  );
}
