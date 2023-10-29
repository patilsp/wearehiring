import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative  flex h-full w-full flex-col" id="about-me">
      <HeroContent />
      <video
        autoPlay
        muted
        loop
        className=" opacity-1 absolute left-0 top-[-430px] z-[1] hidden h-full w-full rotate-180 object-cover opacity-[0.9] md:flex "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>

    </div>
  );
};

export default Hero;
