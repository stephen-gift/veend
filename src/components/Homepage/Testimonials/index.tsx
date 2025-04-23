"use client";
import React from "react";
import Testimonial, { Testimonial as TestimonialType } from "./Testimonial";
import { motion } from "motion/react";
import AnimatedCircle from "./AnimatedCircle";

const VTestimonials = () => {
  const defaultTestimonials2: TestimonialType[] = [
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
  return (
    <section className="p-5 md:p-20">
      <motion.div
        className="flex items-center justify-center mt-15 mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="relative text-3xl md:text-5xl font-bold text-center mx-auto max-w-[600px] py-6">
          <span className="relative z-10">
            We are fast, convenient and reliable
          </span>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute inset-0 -top-1/4 -bottom-1/4 flex items-center justify-center"
          >
            <AnimatedCircle />
          </motion.div>
        </h2>
      </motion.div>

      <motion.div
        className="flex flex-col gap-10 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <Testimonial autoScroll autoScrollInterval={3000} direction="row" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <Testimonial
            testimonials={defaultTestimonials2}
            autoScroll
            autoScrollInterval={3000}
            direction="row-reverse"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default VTestimonials;
