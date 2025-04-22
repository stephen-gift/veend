"use client";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import Image from "next/image";

export interface Testimonial {
  id: number;
  name: string;
  quote: string;
  amount: string;
  image: string;
}

interface TestimonialProps {
  testimonials?: Testimonial[];
  autoScroll?: boolean;
  autoScrollInterval?: number;
  direction?: "row" | "row-reverse";
  customClassName?: string;
  cardClassName?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "S. Garba",
    quote:
      "I am able to get different kinds of loans, and choose a comfortable way to repay. This has helped my finances. Thank you Veend.",
    amount: "₦200,000",
    image: "/testifier1.png"
  },
  {
    id: 2,
    name: "A. Mohammed",
    quote:
      "The team gives very good assistance when I have any issues and these loans have really helped me and my business. It is a service I can depend on anytime.",
    amount: "₦200,000",
    image: "/testifier1.png"
  },
  {
    id: 3,
    name: "C. Okafor",
    quote:
      "Fast approval and excellent customer service. The flexible repayment options made it easy to manage my finances.",
    amount: "₦150,000",
    image: "/testifier1.png"
  }
];

const Testimonial = ({
  testimonials = defaultTestimonials,
  autoScroll = true,
  autoScrollInterval = 5000,
  direction = "row",
  customClassName = "",
  cardClassName = ""
}: TestimonialProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Setup auto-scrolling
  useEffect(() => {
    if (autoScroll) {
      intervalRef.current = setInterval(() => {
        goToNextSlide();
      }, autoScrollInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoScroll, autoScrollInterval, testimonials.length]);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (autoScroll) {
      intervalRef.current = setInterval(() => {
        goToNextSlide();
      }, autoScrollInterval);
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col gap-10 w-full">
        <div
          className={`flex flex-col md:flex-${direction} gap-5 justify-center md:gap-10 w-full ${customClassName}`}
        >
          <div className="flex-1 flex flex-col gap-5 justify-center md:gap-10 w-full">
            <p className="w-full md:max-w-[515px] text-2xl text-center md:text-left text-[#040320]">
              <sup>"</sup>
              {testimonials[activeIndex].quote}
              <sub>"</sub>
            </p>
          </div>

          <div className="flex-1 relative flex flex-col gap-3 justify-center w-full items-center">
            <div
              className={`bg-white rounded-xl shadow-lg p-6 mb-8 relative w-full ${cardClassName}`}
            >
              <div className="flex justify-between items-center relative gap-4 w-full max-w-[600px]">
                <span>
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    height={60}
                    width={60}
                    className="rounded-full"
                  />
                </span>
                <div className="flex-1 ml-2">
                  <h4 className="text-[#040320] text-xl font-semibold">
                    {testimonials[activeIndex].amount}
                  </h4>
                  <p className="text-[#040320] text-sm">
                    {testimonials[activeIndex].name}
                  </p>
                </div>
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle2 className="text-green-500 h-6 w-6" />
                </div>
              </div>

              <div className="absolute -bottom-3 left-4 right-4 h-20 shadow-md rounded-b-xl -z-10"></div>
              <div className="absolute -bottom-6 left-8 right-8 h-20 shadow-md rounded-b-xl -z-10"></div>
            </div>

            <div className="flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === index
                      ? "bg-gray-700 w-6"
                      : "bg-gray-300 w-2"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <button
        onClick={() => {
          setActiveIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
          );
        }}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow-lg hidden md:block"
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goToNextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow-lg hidden md:block"
        aria-label="Next testimonial"
      >
        <ChevronRight size={24} />
      </button> */}
    </div>
  );
};

export default Testimonial;
