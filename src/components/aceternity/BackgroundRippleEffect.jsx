import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";
import { WavyTextDemo } from "../magicui/demo/wavyTextDemo/WavyTextDemo";

const BackgroundCellAnimation = ({ children }) => {
  return (
    <section className="relative flex justify-center h-[90vh] overflow-hidden bg-background">
      <BackgroundCellCore />
      {children}
    </section>
  );
};

const BackgroundCellCore = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const ref = useRef(null);

  const handleMouseMove = (event) => {
    const rect = ref.current && ref.current.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const size = 300;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="absolute inset-0 h-full"
    >
      <div className="absolute h-[90%] inset-y-0  overflow-hidden">
        <div
          className="absolute z-40 w-full h-full pointer-events-none -bottom-2 bg-background"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, black)",
          }}
        ></div>
        <div
          className="absolute inset-0 z-20 bg-transparent"
          style={{
            maskImage: `radial-gradient(${size / 4}px circle at center, white, transparent)`,
            WebkitMaskImage: `radial-gradient(${size / 4}px circle at center, white, transparent)`,
            WebkitMaskPosition: `${mousePosition.x - size / 2}px ${mousePosition.y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
            maskSize: `${size}px`,
            pointerEvents: "none",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          <Pattern cellClassName="border-blue-600 relative z-[100]" />
        </div>
        <Pattern className="opacity-[0.8]" cellClassName="border-neutral-700" />
      </div>
    </div>
  );
};

const Pattern = ({ className, cellClassName }) => {
  const x = new Array(47).fill(0);
  const y = new Array(30).fill(0);
  const matrix = x.map((_, i) => y.map((_, j) => [i, j]));
  const [clickedCell, setClickedCell] = useState(null);

  return (
    <div className={cn("flex flex-row  relative z-30", className)}>
      {matrix.map((row, rowIdx) => (
        <div
          key={`matrix-row-${rowIdx}`}
          className="relative z-20 flex flex-col border-b"
        >
          {row.map((column, colIdx) => (
            <MatrixCell
              key={`matrix-col-${colIdx}`}
              rowIdx={rowIdx}
              colIdx={colIdx}
              cellClassName={cellClassName}
              clickedCell={clickedCell}
              setClickedCell={setClickedCell}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const MatrixCell = ({
  rowIdx,
  colIdx,
  cellClassName,
  clickedCell,
  setClickedCell,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    if (clickedCell) {
      const distance = Math.sqrt(
        Math.pow(clickedCell[0] - rowIdx, 2) +
          Math.pow(clickedCell[1] - colIdx, 2)
      );
      controls.start({
        opacity: [0, 1 - distance * 0.1, 0],
        transition: { duration: distance * 0.2 },
      });
    }
  }, [clickedCell, controls, rowIdx, colIdx]);

  return (
    <div
      className={cn(
        "bg-transparent border-l border-b border-neutral-600",
        cellClassName
      )}
      onClick={() => setClickedCell([rowIdx, colIdx])}
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileHover={{
          opacity: [0, 1, 0.5],
        }}
        transition={{
          duration: 0.5,
          ease: "backOut",
        }}
        animate={controls}
        className="bg-[#0f0f0f] h-12 w-12"
      ></motion.div>
    </div>
  );
};

export { BackgroundCellAnimation, BackgroundCellCore, Pattern };
