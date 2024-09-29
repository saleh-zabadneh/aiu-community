import { Question } from "@phosphor-icons/react";
import { useAnimate, useInView } from "framer-motion";
import { MessageSquareIcon, ShareIcon } from "lucide-react";
import React, { useEffect } from "react";
import { FiCode, FiDollarSign, FiGift, FiMail } from "react-icons/fi";

const STEPS = [
  {
    Icon: FiCode,
    text: "Code",
  },
  {
    Icon: ShareIcon,
    text: "Share",
  },
  {
    Icon: Question,
    text: "Feedback",
  },
  {
    Icon: MessageSquareIcon,
    text: "Communicate",
  },
];

export const Stepper = () => {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, { once: true });

  useEffect(() => {
    inView && handleAnimate();
  }, [inView]);

  const handleAnimate = async () => {
    for (let i = 0; i < STEPS.length; i++) {
      animate(
        `[data-iconid="icon-${i}"]`,
        {
          opacity: [0.25, 1],
        },
        {
          duration: 0.2,
          ease: "linear",
        }
      );
      if (i !== STEPS.length - 1) {
        await animate(
          `[data-lineid="line-${i}"]`,
          {
            scaleX: [0, 1],
          },
          {
            duration: 0.2,
            ease: "linear",
            delay: 0.1,
          }
        );
      }
    }
  };

  return (
    <div
      ref={scope}
      className="flex flex-wrap items-center justify-center max-w-2xl gap-3 mx-auto mt-12"
    >
      {STEPS.map((s, i) => {
        return (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center gap-1.5 sm:gap-3">
              <span
                data-iconid={`icon-${i}`}
                className="relative z-10 block p-3 text-xs rounded-md shadow-md opacity-25 bg-gradient-to-br from-zinc-800 to-zinc-950 shadow-blue-900 sm:text-lg md:text-xl"
              >
                <s.Icon />
              </span>
              <span className="text-xs text-zinc-400">{s.text}</span>
            </div>
            {i !== STEPS.length - 1 && (
              <div className="relative h-[1px] w-12 -translate-y-2 overflow-hidden rounded bg-zinc-800">
                <div
                  data-lineid={`line-${i}`}
                  className="absolute inset-0 z-50 origin-left scale-x-0 bg-blue-600"
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
