"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCircleProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  color?: string;
}

const AnimatedCircle = ({
  className,
  width = "100%",
  height = "100%",
  color = "#F9AB21"
}: AnimatedCircleProps) => {
  return (
    <div className={cn("absolute inset-0 -z-10", className)}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 550 205"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full"
      >
        <motion.path
          d="M276.471 4.3657C94.4693 1.44812 3.66104 43.7648 2.79568 97.7468C1.93031 151.729 95.984 197.009 273.337 199.852C450.69 202.695 546.147 160.453 547.012 106.471C547.844 54.5801 451.604 -4.07018 231.854 35.4252"
          stroke={color}
          strokeWidth="4"
          initial={{
            pathLength: 0,
            opacity: 0
          }}
          whileInView={{
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: {
                duration: 3,
                ease: "easeInOut"
              },
              opacity: {
                duration: 0.5,
                ease: "easeIn"
              }
            }
          }}
          viewport={{ once: false, amount: 0.5 }}
        />
      </svg>
    </div>
  );
};

export default AnimatedCircle;
