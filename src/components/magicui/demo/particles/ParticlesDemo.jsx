"use client";

import Particles from "@/components/magicui/Particles";
import { useEffect, useState } from "react";

const ParticlesDemo = () => {
  const [color, setColor] = useState("#000");

  useEffect(() => {
    setColor("#000");
  }, []);

  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-4 md:shadow-xl">
      <span className="z-10 font-semibold leading-none text-center text-transparent whitespace-pre-wrap pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-7xl dark:from-white dark:to-black md:text-9xl">
        Particles
      </span>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
};

export default ParticlesDemo;
