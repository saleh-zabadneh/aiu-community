import React, { useEffect, useRef } from "react";

export const ScreenFitText = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    resizeText();

    window.addEventListener("resize", resizeText);

    return () => {
      window.removeEventListener("resize", resizeText);
    };
  }, []);

  const resizeText = () => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) {
      return;
    }

    const containerWidth = container.offsetWidth;
    let min = 1;
    let max = 2500;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      text.style.fontSize = mid + "px";

      if (text.offsetWidth <= containerWidth) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    text.style.fontSize = max + "px";
  };

  return (
    <div
      className="flex items-center w-full h-screen overflow-hidden bg-slate-950"
      ref={containerRef}
    >
      <span
        className="absolute bottom-0 left-0 mx-auto font-bold text-center uppercase whitespace-nowrap text-slate-700"
        ref={textRef}
      >
        Fit text to container
      </span>
    </div>
  );
};
