import React from "react";
import { cn } from "@/lib/utils";

const AnimatedBorder = ({
  shimmerColor = "#ffffff",
  shimmerSize = "0.05em",
  shimmerDuration = "3s",
  borderRadius = "100px",
  className,
  ...props
}) => {
  return (
    <div
      style={{
        "--spread": "90deg",
        "--shimmer-color": shimmerColor,
        "--radius": borderRadius,
        "--speed": shimmerDuration,
        "--cut": shimmerSize,
      }}
      className={cn(
        "-z-30 blur-[2px]",
        "absolute inset-0 overflow-visible [container-type:size]",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
        <div className="animate-spin-around absolute inset-[-100%] w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
      </div>
    </div>
  );
};

export default AnimatedBorder;
