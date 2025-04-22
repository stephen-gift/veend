"use client";
import { Button } from "@/components/ui/button";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const VHero = () => {
  return (
    <section
      className="min-h-[calc(100vh-144px)] bg-[#040320] bg-[length:120%_auto] bg-center flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url('/heroGrid.png')"
      }}
    >
      <div className="flex flex-col items-center gap-8 justify-center h-full max-w-[1080px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-[100px] flex items-center justify-center gap-2 p-1 bg-[#f4c16133] text-[10px]"
        >
          <div className="rounded-[100px] bg-[#F9AB21] font-bold p-1">
            New Feature
          </div>
          <p className="text-[#F9AB21]">
            Earn more by joining our referral programme
          </p>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <MoveRightIcon color="#F9AB21" size={20} />
          </motion.div>
        </motion.div>

        <div className="flex flex-col items-center md:flex-row justify-center gap-y-4 text-white">
          <div className="flex flex-col flex-1 items-center gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-4xl md:text-5xl text-center md:text-left text-[#F9AB21] font-semibold "
            >
              Get Instant Credit Direct into Your Account
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="text-base md:text-2xl text-center md:text-left"
            >
              Access instant loan online from Veend, anytime, anywhere. Meet
              urgent personal needs with quick cash loans in less than 5 minutes
              without collateral with 24/7 support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex justify-center items-center md:items-start"
            >
              <Button className="w-fit rounded-[100px] bg-[#F9AB21] text-[#334]">
                Get Started
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex-1 flex justify-center items-center w-full relative"
          >
            <Image src={"/hero.png"} alt="hero" width={500} height={500} />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="w-full bg-[#334] flex justify-center items-center p-1 md:p-3 gap-1 md:gap-3 text-[10px]"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="bg-[#FF3F3F] p-1 rounded-[100px] text-white"
        >
          New
        </motion.div>
        <p className="text-white">
          Big news!!! VeendHQ is now backed by Techstars 🎉
        </p>
      </motion.div>
    </section>
  );
};

export default VHero;
