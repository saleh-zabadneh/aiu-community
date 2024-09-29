import React from "react";
import styles from "./bubble.module.css";

const BubbleTextDemo = () => {
  return (
    <div className="grid h-screen bg-black place-content-center">
      <BubbleText />
    </div>
  );
};

const BubbleText = () => {
  return (
    <h2 className="text-5xl font-thin text-center text-indigo-300">
      {"لعيون طارق الملك وماريا text".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default BubbleTextDemo;
