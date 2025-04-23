"use client";
import { CheckCircle2 } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

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
  const [directions, setDirections] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = (index: number) => {
    setDirections(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const goToNextSlide = () => {
    const nextIndex =
      activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
    setDirections(1);
    setActiveIndex(nextIndex);
  };

  // const goToPrevSlide = () => {
  //   const prevIndex =
  //     activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
  //   setDirections(-1);
  //   setActiveIndex(prevIndex);
  // };

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
  }, [autoScroll, autoScrollInterval, activeIndex]);

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
    <motion.div
      className="relative w-full overflow-hidden max-w-[1200px] mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
      }}
    >
      <div className="flex flex-col gap-10 w-full">
        <div
          className={`flex flex-col md:flex-${direction} gap-5 justify-center md:gap-10 w-full ${customClassName}`}
        >
          <div className="flex-1 flex flex-col gap-5 justify-center md:gap-10 w-full">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.p
                key={activeIndex}
                custom={direction}
                initial={{
                  x: directions > 0 ? 100 : -100,
                  opacity: 0
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 120,
                    damping: 20
                  }
                }}
                exit={{
                  x: directions > 0 ? -100 : 100,
                  opacity: 0,
                  transition: {
                    type: "spring",
                    stiffness: 120,
                    damping: 20
                  }
                }}
                className="w-full md:max-w-[515px] text-2xl text-center md:text-left text-[#040320]"
              >
                <sup>&quot;</sup>
                {testimonials[activeIndex].quote}
                <sub>&quot;</sub>
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="flex-1 relative flex flex-col gap-3 justify-center w-full items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className={`bg-white rounded-xl shadow-lg p-6 mb-8 relative w-full ${cardClassName}`}
                initial={{ y: 20, opacity: 0, scale: 0.95 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                    delay: 0.2
                  }
                }}
                exit={{
                  y: -20,
                  opacity: 0,
                  scale: 0.95,
                  transition: {
                    duration: 0.3
                  }
                }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                  }
                }}
              >
                <div className="flex justify-between items-center relative gap-4 w-full">
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      transition: { delay: 0.4, type: "spring" }
                    }}
                  >
                    <Image
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      height={60}
                      width={60}
                      className="rounded-full"
                    />
                  </motion.span>
                  <div className="flex-1 ml-2">
                    <motion.h4
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.5 }
                      }}
                      className="text-[#040320] text-xl font-semibold"
                    >
                      {testimonials[activeIndex].amount}
                    </motion.h4>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.6 }
                      }}
                      className="text-[#040320] text-sm"
                    >
                      {testimonials[activeIndex].name}
                    </motion.p>
                  </div>
                  <motion.div
                    className="bg-green-100 p-2 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{
                      scale: 1,
                      transition: {
                        delay: 0.7,
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                      }
                    }}
                  >
                    <CheckCircle2 className="text-green-500 h-6 w-6" />
                  </motion.div>
                </div>

                <motion.div
                  className="absolute -bottom-3 left-4 right-4 h-20 shadow-md rounded-b-xl -z-10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: 0.2,
                    scale: 1,
                    transition: {
                      delay: 0.3
                    }
                  }}
                ></motion.div>
                <motion.div
                  className="absolute -bottom-6 left-8 right-8 h-20 shadow-md rounded-b-xl -z-10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: 0.2,
                    scale: 1,
                    transition: {
                      delay: 0.3
                    }
                  }}
                  transition={{ delay: 0.4 }}
                ></motion.div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  initial={{ scale: 0.8, opacity: 0.6 }}
                  animate={
                    activeIndex === index ? { scale: 1, opacity: 1 } : "initial"
                  }
                  whileHover={{ scale: 1.2 }}
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
    </motion.div>
  );
};

export default Testimonial;
