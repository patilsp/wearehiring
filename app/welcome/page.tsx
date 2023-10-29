
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Welcome from "@/components/welcome"; 
import Pricing from "@/components/main/Pricing"; 

import Image from "next/image";

export default function Page() {
  return (
    <main className="h-full w-full bg-[#040015]">
      <div className="flex flex-col gap-20">
        <Hero />
        <Welcome />
        <Pricing />

        {/* <Projects /> */}
      </div>
    </main>
  );
}
