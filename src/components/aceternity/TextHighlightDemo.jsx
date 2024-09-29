"use client";
import { motion } from "framer-motion";
import { HighlightBackground, HighlightText } from "./HighlightText";

export function HeroHighlightDemo() {
  return (
    <HighlightBackground>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="max-w-4xl px-4 mx-auto text-2xl font-bold leading-relaxed text-center md:text-4xl lg:text-5xl text-neutral-700 dark:text-white lg:leading-snug "
      >
        With insomnia, nothing&apos;s real. Everything is far away. Everything
        is a{" "}
        <HighlightText className="text-black dark:text-white">
          copy, of a copy, of a copy.
        </HighlightText>
      </motion.h1>
    </HighlightBackground>
  );
}
