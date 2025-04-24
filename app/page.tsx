import { Category } from "@/app/components/Category";
import { Hero } from "@/app/components/Hero";
import { Navbar } from "@/app/components/Navbar";
import { ScrollView } from "@/app/components/ScrollView";
import { Settings } from "@/app/components/Settings";

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
