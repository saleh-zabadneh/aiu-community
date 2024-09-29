"use client";

import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/GridPattern";

export const GridPatternLinearGradient = ({ children }) => {
  return (
    <div className="relative flex items-center justify-center w-full h-full p-20 overflow-hidden border rounded-lg bg-background md:shadow-xl">
      <p className="z-10 text-5xl font-medium tracking-tighter text-center text-black whitespace-pre-wrap dark:text-white">
        {children}
      </p>
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
    </div>
  );
};
