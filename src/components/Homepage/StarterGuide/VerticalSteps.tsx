"use client";
import React from "react";
import { motion } from "motion/react";
interface Step {
  title: string;
  description: string;
}

interface VerticalStepsProps {
  steps: Step[];
  currentStep: number;
  completedColor?: string;
  activeColor?: string;
  pendingColor?: string;
}
const VerticalSteps = ({
  steps
}: // currentStep
// completedColor = "green",
// activeColor = "blue",
// pendingColor = "gray"
VerticalStepsProps) => {
  return (
    <div className="w-full">
      <div className="flex flex-col w-full">
        {steps.map((step, index) => {
          // const isCompleted = index + 1 < currentStep;
          // const isActive = index + 1 === currentStep;
          const isLast = index === steps.length - 1;

          return (
            <div
              key={index}
              className={`flex relative ${!isLast ? "mb-8" : ""}`}
            >
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full font-bold flex items-center justify-center z-10 border border-[#040320]`}
              >
                {index + 1}
              </div>

              {!isLast && (
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                    delay: index * 0.8
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  className={`absolute h-[20px] w-0.5 bg-[#A0A0AA] left-4 top-8 -ml-px`}
                ></motion.div>
              )}

              <motion.div
                className="ml-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.8
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.h2
                  className="text-lg font-bold text-gray-800"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.8 + 0.2
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {step.title}
                </motion.h2>
                <motion.p
                  className="text-sm text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.8 + 0.4
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {step.description}
                </motion.p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VerticalSteps;
