import React from "react";
import { motion, useScroll } from "framer-motion";

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-0">
      <svg
        className="-rotate-90"
        width="50"
        height="50"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="20"
          className="stroke-gray-300 stroke-2 fill-light"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="20"
          className="stroke-primary stroke-[3px] fill-light"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          cx="50"
          cy="50"
          r="10"
          className="animate-pulse stroke-1 fill-primary"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;