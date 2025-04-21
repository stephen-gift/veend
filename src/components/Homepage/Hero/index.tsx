import { Button } from "@/components/ui/button";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const VHero = () => {
  return (
    <section
      className="min-h-[calc(100vh-144px)] bg-[#040320] bg-[length:120%_auto] bg-center justify-center items-center "
      style={{
        backgroundImage: "url('/heroGrid.png')"
      }}
    >
      <div className="flex flex-col items-center gap-8 justify-center h-full">
        <div className="rounded flex items-center justify-center gap-4 p-2 bg-[#f4c16133]">
          <div className="rounded bg-[#F9AB21]">New Feature</div>
          <p className="text-[#F9AB21]">
            Earn more by joining our referral programme
          </p>
          <MoveRightIcon color="#F9AB21" size={20} />
        </div>
        <div className="flex flex-col items-center md:flex-row justify-center gap-y-4 text-white">
          <div className="flex flex-col flex-1">
            <h2 className="text-5xl text-[#F9AB21] font-semibold">
              Get Instant Credit Direct into Your Account
            </h2>
            <p>
              Access instant loan online from Veend, anytime, anywhere. Meet
              urgent personal needs with quick cash loans in less than 5 minutes
              without collateral with 24/7 support.
            </p>

            <Button className="w-fit">Get Started</Button>
          </div>
          <div className="flex-1 flex justify-center items-center w-full relative">
            <Image src={"/hero.png"} alt="hero" width={500} height={500} />
          </div>
        </div>
      </div>
      <div className="bg-[#334] flex justify-center items-center p-3 gap-3">
        <div className="bg-[#FF3F3F] p-1 rounded-xl text-white ">New</div>
        <p className="text-white">
          Big news!!! VeendHQ is now backed by Techstars 🎉
        </p>
      </div>
    </section>
  );
};

export default VHero;
