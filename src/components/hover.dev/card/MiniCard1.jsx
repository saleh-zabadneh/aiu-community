import { BubbleButton } from "../button/BubbleButton";
import { CalloutChip } from "../utils/CalloutChip";
import { Card } from "../utils/Card";
import { motion } from "framer-motion";
import { FiLink } from "react-icons/fi";

export const MiniCard1 = () => {
  return (
    <div className="col-span-2 h-[375px] md:col-span-1">
      <Card>
        <div className="mx-auto w-fit">
          <CalloutChip>CALLOUT #2</CalloutChip>
        </div>
        <p className="mb-1.5 text-center text-2xl">Share Your Thoughts</p>
        <p className="mb-6 text-center text-zinc-400">
          The AIU social community is a safe place to share your problems and
          thoughts.
        </p>
        <BubbleButton className="mx-auto">Start Sharing</BubbleButton>

        <Ping />
      </Card>
    </div>
  );
};

const LOOP_DURATION = 6;

const Ping = () => {
  return (
    <div className="absolute bottom-0 -translate-x-1/2 translate-y-1/2 left-1/2 w-fit">
      <FiLink className="relative z-10 text-blue-200 text-7xl" />
      <Band delay={0} />
      <Band delay={LOOP_DURATION * 0.25} />
      <Band delay={LOOP_DURATION * 0.5} />
      <Band delay={LOOP_DURATION * 0.75} />
    </div>
  );
};

const Band = ({ delay }) => {
  return (
    <motion.span
      style={{
        translateX: "-50%",
        translateY: "-50%",
      }}
      initial={{
        opacity: 0,
        scale: 0.25,
      }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: 1,
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        times: [0, 0.5, 0.75, 1],
        duration: LOOP_DURATION,
        ease: "linear",
        delay,
      }}
      className="absolute left-[50%] top-[50%] z-0 size-80 rounded-full border border-blue-600 bg-gradient-to-br from-blue-600/50 to-blue-950/20"
    />
  );
};
