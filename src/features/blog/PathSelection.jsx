import { DeviceMobile, Robot } from "@phosphor-icons/react";
import { MobileIcon } from "@radix-ui/react-icons";
import { IconBook } from "@tabler/icons-react";
import { useAnimate, useInView } from "framer-motion";
import { Database } from "lucide-react";
import React, { useEffect } from "react";
import { FiCode, FiDollarSign, FiGift, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

const iconMapping = {
  Frontend: FiCode,
  Backend: Database,
  Mobile: DeviceMobile,
  AI: Robot,
  "University Courses": IconBook, // You can choose a different icon if desired
};

export const PathSelection = ({ STEPS }) => {
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

  if (!STEPS || !Array.isArray(STEPS)) {
    return <div>No paths available</div>;
  }

  return (
    <div
      ref={scope}
      className="flex flex-wrap items-center justify-center max-w-3xl gap-3 mx-auto mt-12"
    >
      {STEPS.map((s, i) => {
        const Icon = iconMapping[s.name];
        return (
          <React.Fragment key={i}>
            <Link
              to={`/blog/it/paths/${s.id}`}
              className="flex flex-col items-center gap-1.5 sm:gap-3"
            >
              <span
                data-iconid={`icon-${i}`}
                className="relative z-10 block p-5 text-xs rounded-md shadow-md opacity-25 bg-gradient-to-br from-zinc-800 to-zinc-950 shadow-blue-900 sm:text-lg md:text-xl"
              >
                <Icon />
              </span>
              <span className="text-xl text-zinc-400">{s.name}</span>
            </Link>
            {i !== STEPS.length - 1 && (
              <Link
                to={`/blog/it/paths/${s.id}`}
                className="relative h-[1px] w-12 -translate-y-2 overflow-hidden rounded bg-zinc-800"
              >
                <div
                  data-lineid={`line-${i}`}
                  className="absolute inset-0 z-50 origin-left scale-x-0 bg-blue-600"
                />
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
