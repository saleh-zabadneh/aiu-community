import React, { useState } from "react";

const MouseLinePointer = () => {
  return (
    <MouseMoveLineDrawing>
      <div className="grid h-screen place-content-center bg-neutral-200">
        <span className="text-5xl font-black text-neutral-900">Move Mouse</span>
      </div>
    </MouseMoveLineDrawing>
  );
};

const MAX_POINTS = 30;

const MouseMoveLineDrawing = ({ children }) => {
  const [points, setPoints] = useState([]);

  return (
    <div
      onMouseMove={(e) => {
        setPoints((pv) => {
          const x = e.clientX;
          const y = e.clientY;

          const pointBuffer = [...pv, `${x} ${y}`];

          if (pointBuffer.length > MAX_POINTS) {
            pointBuffer.shift();
          }

          return pointBuffer;
        });
      }}
    >
      {children}
      <svg
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        viewBox="0 0 100% 100%"
      >
        <polyline
          className="stroke-neutral-900"
          fill="none"
          strokeWidth="4"
          strokeDasharray="0"
          strokeLinecap="round"
          points={`${points.join(", ")}`}
        ></polyline>
      </svg>
    </div>
  );
};

export default MouseLinePointer;
