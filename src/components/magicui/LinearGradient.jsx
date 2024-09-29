import { CSSProperties } from "react";

const LinearGradient = ({
  from = "#00000000",
  to = "rgba(120,119,198,0.3)",
  width = "100%",
  height = "100%",
  transitionPoint = "50%",
  direction = "bottom",
  className,
}) => {
  const styles = {
    position: "absolute",
    pointerEvents: "none",
    inset: 0,
    width: width,
    height: height,
    background: `linear-gradient(to ${direction}, ${from}, ${transitionPoint}, ${to})`,
  };
  return <div className={className} style={styles} />;
};

export default LinearGradient;
