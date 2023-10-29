import Image from "next/image";
import HeroContent from "@/components/sub/HeroContent";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <HeroContent />
      </div>
    </main>
  );
}
