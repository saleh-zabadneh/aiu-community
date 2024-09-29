import { useMotionValue } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export const BlogSecondPathCard = ({ text, className, icon: Icon, link }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(1500);
    setRandomString(str);
  }

  return (
    <Link to={link} className={cn("  w-[16rem] h-[16rem]", className)}>
      <div
        className={cn(
          "p-0.5  bg-transparent  aspect-square  flex items-center justify-center w-[16rem] h-[16rem] relative",
          className
        )}
      >
        <div
          onMouseMove={onMouseMove}
          className="relative flex items-center justify-center w-[16rem] h-[16rem] overflow-hidden bg-transparent group/card rounded-3xl"
        >
          <CardPattern
            mouseX={mouseX}
            mouseY={mouseY}
            randomString={randomString}
          />
          <div className="relative z-10 flex items-center justify-center">
            <div className="relative flex items-center justify-center text-4xl font-bold text-white rounded-full h-44 w-44">
              <div className="absolute w-full h-full rounded-full blur-sm" />
              <span className="z-20 dark:text-white">{text}</span>
            </div>
          </div>
          <div className="absolute text-white top-4 right-4">
            <Icon className="w-8 h-8" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export function CardPattern({ mouseX, mouseY, randomString }) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl  [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 transition duration-500 opacity-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 group-hover/card:opacity-100 backdrop-blur-xl"
        style={style}
      />
      <motion.div
        className="absolute inset-0 opacity-0 rounded-2xl mix-blend-overlay group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 h-full font-mono text-xs font-bold text-white break-words whitespace-pre-wrap transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
