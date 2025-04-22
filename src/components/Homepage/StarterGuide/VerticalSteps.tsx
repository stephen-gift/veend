import React from "react";

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
  steps,
  currentStep,
  completedColor = "green",
  activeColor = "blue",
  pendingColor = "gray"
}: VerticalStepsProps) => {
  return (
    <div className="w-full">
      <div className="flex flex-col w-full">
        {steps.map((step, index) => {
          // Determine step status
          const isCompleted = index + 1 < currentStep;
          const isActive = index + 1 === currentStep;
          const isLast = index === steps.length - 1;

          // Set colors based on status
          const circleColor = isCompleted
            ? `bg-${completedColor}-500 border-${completedColor}-500 text-white`
            : isActive
            ? `bg-${activeColor}-500 border-${activeColor}-500 text-white`
            : `bg-white border-${pendingColor}-300 text-${pendingColor}-500`;

          const lineColor = isCompleted
            ? `bg-${completedColor}-500`
            : `bg-${pendingColor}-300`;

          return (
            <div
              key={index}
              className={`flex relative ${!isLast ? "mb-8" : ""}`}
            >
              {/* Step number */}
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full font-bold flex items-center justify-center z-10 border-2 ${circleColor}`}
              >
                {index + 1}
              </div>

              {/* Vertical line */}
              {!isLast && (
                <div
                  className={`absolute h-full w-0.5 ${lineColor} left-4 top-8 -ml-px`}
                ></div>
              )}

              {/* Step content */}
              <div className="ml-4">
                <h2 className="text-lg font-bold text-gray-800">
                  {step.title}
                </h2>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VerticalSteps;
