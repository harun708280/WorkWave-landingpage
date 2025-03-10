import { BorderBeam } from "@/components/magicui/border-beam";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Hero from "./Component/Hero";

export default function Home() {
  return (
    <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
      <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />

      <div className="flex flex-col items-center justify-center pt-14 h-full">
        <button
          className="flex items-center gap-2 px-6 py-2 rounded-full lowercase relative overflow-hidden border border-gray-700 backdrop-blur-md 
  
  transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-yellow-500/50"
        >
          <Image src={"/sparkles-dark.svg"} height={16} width={16} alt="icon" />
          <span className="text-white font-medium">WorkWave Start Now</span>
          <ChevronRight className="w-4 h-4 text-white" />

          <BorderBeam
            size={40}
            initialOffset={20}
            className="from-transparent via-yellow-500 to-transparent"
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 20,
            }}
          />
        </button>
      </div>
      <Hero></Hero>
    </section>
  );
}
