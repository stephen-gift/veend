import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import React from "react";

const VTestimonials = () => {
  return (
    <section>
      <div className="flex items-center justify-center mt-15 ">
        <h2 className="relative max-w-[600px] text-5xl text-center ">
          We are fast, convenient and reliable
          <Image
            src={"/testimonialCircle.png"}
            alt="hero"
            height={300}
            width={500}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1"
          />
        </h2>
      </div>
      <div className="flex items-center justify-center mt-10 flex-col gap-10">
        <div className="flex flex-col gap-5 justify-center md:flex-row md:gap-10 w-full">
          <div>
            <p className="wfull md:max-w-[515px] text-2xl text-center md:text-left text-[#040320]">
              <sup>“</sup>I am able to get different kinds of loans, and choose
              a comfortable way to repay. This has helped my finances. Thank you
              Veend.
              <sub>”</sub>
            </p>
          </div>
          <div className="flex-1 relative  flex flex-col gap-3 justify-center w-full items-center">
            <div className="flex justify-between items-center relative gap-4 w-full max-w-[350px]">
              <span>
                <Image
                  src={"/testifier1.png"}
                  alt="hero"
                  height={60}
                  width={60}
                />
              </span>
              <div>
                <h4 className="text-[#040320] text-lg font-semibold">
                  ₦200,000
                </h4>
                <p className="text-[#040320] text-sm">S. Garba</p>
              </div>
              <CheckCircle2 />
            </div>
            <div className="max-w-[320px] w-full h-10  top-0 bg-green-500"></div>
            <div className="max-w-[300px] w-full h-10  top-0 bg-green-500"></div>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-center md:flex-row-reverse md:gap-10 w-full">
          <div>
            <p className="wfull md:max-w-[515px] text-2xl text-center md:text-left text-[#040320]">
              <sup>“</sup>I am able to get different kinds of loans, and choose
              a comfortable way to repay. This has helped my finances. Thank you
              Veend.
              <sub>”</sub>
            </p>
          </div>
          <div className="flex-1 relative  flex flex-col gap-3 justify-center w-full items-center">
            <div className="flex justify-between items-center relative gap-4 w-full max-w-[350px]">
              <span>
                <Image
                  src={"/testifier1.png"}
                  alt="hero"
                  height={60}
                  width={60}
                />
              </span>
              <div>
                <h4 className="text-[#040320] text-lg font-semibold">
                  ₦200,000
                </h4>
                <p className="text-[#040320] text-sm">S. Garba</p>
              </div>
              <CheckCircle2 />
            </div>
            <div className="max-w-[320px] w-full h-10  top-0 bg-green-500"></div>
            <div className="max-w-[300px] w-full h-10  top-0 bg-green-500"></div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default VTestimonials;
