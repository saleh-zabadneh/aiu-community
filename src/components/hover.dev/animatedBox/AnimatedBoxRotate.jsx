import { motion } from "framer-motion";

const AnimatedBoxRotate = ({ text, one, two, three, four }) => {
  return (
    <div className="grid px-4 py-12 place-content-center ">
      <SpinningBoxText
        text={text}
        one={one}
        two={two}
        three={three}
        four={four}
      />
    </div>
  );
};

const SpinningBoxText = ({ text, one, two, three, four }) => {
  return (
    <span className="flex flex-col items-center justify-center gap-6 text-5xl font-semibold text-white md:flex-row md:gap-4">
      {text} <Box front={one} bottom={two} back={three} top={four} />
    </span>
  );
};

const Box = ({ front, bottom, back, top }) => {
  return (
    <motion.span
      className="relative h-20 font-black uppercase w-72"
      style={{
        transformStyle: "preserve-3d",
        transformOrigin: "center center -40px",
      }}
      initial={{ rotateX: "0deg" }}
      animate={{
        rotateX: [
          "0deg",
          "90deg",
          "90deg",
          "180deg",
          "180deg",
          "270deg",
          "270deg",
          "360deg",
        ],
      }}
      transition={{
        repeat: Infinity,
        duration: 10,
        ease: "backInOut",
        times: [0, 0.2, 0.25, 0.45, 0.5, 0.7, 0.75, 1],
      }}
    >
      {/* FRONT */}
      <span className="absolute flex items-center justify-center w-full h-full text-white bg-indigo-600 border-2 border-indigo-400">
        {front}
      </span>

      {/* BOTTOM */}
      <span
        style={{ transform: "translateY(5rem) rotateX(-90deg)" }}
        className="absolute flex items-center justify-center w-full h-full text-white origin-top bg-indigo-600 border-2 border-indigo-400"
      >
        {bottom}
      </span>

      {/* TOP */}
      <span
        style={{ transform: "translateY(-5rem) rotateX(90deg)" }}
        className="absolute flex items-center justify-center w-full h-full text-white origin-bottom bg-indigo-600 border-2 border-indigo-400"
      >
        {top}
      </span>

      {/* BACK */}
      <span
        style={{
          transform: "translateZ(-5rem) rotateZ(-180deg) rotateY(180deg)",
        }}
        className="absolute flex items-center justify-center w-full h-full text-white origin-center bg-indigo-600 border-2 border-indigo-400"
      >
        {back}
      </span>
    </motion.span>
  );
};

export default AnimatedBoxRotate;
