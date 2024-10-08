"use client";

import { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";

const WavyText = ({
  word,
  className,
  variant,
  duration = 0.5,
  delay = 0.05,
}) => {
  const defaultVariants = {
    hidden: { y: 10 },
    visible: { y: -10 },
  };
  const combinedVariants = variant || defaultVariants;
  const characters = useMemo(() => word.split(""), [word]);
  return (
    <div className="flex justify-center p-3 space-x-2 overflow-hidden">
      <AnimatePresence>
        {characters.map((char, i) => (
          <motion.h1
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={combinedVariants}
            transition={{
              yoyo: Infinity,
              duration: duration,
              delay: i * delay,
            }}
            className={cn(
              className,
              "font-display text-center text-2xl font-bold tracking-[-0.15em] md:text-7xl"
            )}
          >
            {char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default WavyText;
