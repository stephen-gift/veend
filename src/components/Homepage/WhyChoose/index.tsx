import Image from "next/image";
import React from "react";

const VWhyChoose = () => {
  return (
    <section className="p-4 md:p-10 ">
      <div className="bg-[#040320] rounded-4xl p-4 md:p-12 text-white flex flex-col justify-center items-center text-center gap-20">
        <div className="max-w-[600px] w-full flex flex-col gap-4">
          <h2 className="text-4xl font-semibold text-center">
            Why choose Veend?
          </h2>
          <p className="font-normal text-center text-2xl">
            Veend enables fast, easy and convenient online access to credit
            on-demand.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full ">
          <div
            className=" items-start justify-center text-left gap-4 p-4 md:p-6 flex flex-col rounded-[12px] bg-[#0F0F2B] w-full col-span-1 lg:col-span-7 "
            style={{
              backgroundImage: "url('/bg1.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "left 105% top 70%"
            }}
          >
            <div>
              <Image src={"/reciept.png"} alt="hero" height={48} width={48} />
            </div>
            <h2 className="text-2xl font-semibold text-white">
              Easy Loan Application Process
            </h2>
            <p className="font-normal text-white text-base">
              Applying for online loans has never been this easy. Veend loan
              application process is simple, fast, and designed with your
              convenience in mind.
            </p>
          </div>
          <div
            className=" items-start justify-center text-left gap-4 p-4 md:p-6 flex flex-col rounded-[12px] bg-[#0E1424] w-full col-span-1 lg:col-span-5"
            style={{
              backgroundImage: "url('/bg1.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center"
            }}
          >
            <div>
              <Image src={"/star.png"} alt="hero" height={48} width={48} />
            </div>
            <h2 className="text-2xl font-semibold text-white">
              Instant Loan Disbursement, No Collateral
            </h2>
            <p className="font-normal text-white text-base">
              Get an instant loan when you need it. Apply with no collateral, no
              guarantor and get your loan disbursed in less than 5 minutes with
              no delay.
            </p>
          </div>
          <div
            className=" items-start justify-center text-left gap-4 p-4 md:p-6 flex flex-col rounded-[12px] bg-[#0E1424] w-full col-span-1 lg:col-span-5"
            style={{
              backgroundImage: "url('/bg1.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center"
            }}
          >
            <div>
              <Image src={"/user.png"} alt="hero" height={48} width={48} />
            </div>
            <h2 className="text-2xl font-semibold text-white">
              Customised Personal Loan Offer
            </h2>
            <p className="font-normal text-white text-base">
              Enjoy personal loan offers that align with your unique preference
              and financial goals. Up to 12 months tenure.
            </p>
          </div>
          <div
            className=" items-start justify-center text-left gap-4 p-4 md:p-6 flex flex-col rounded-[12px] bg-[#0F0F2B] w-full col-span-1 lg:col-span-7"
            style={{
              backgroundImage: "url('/bg1.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "left 105% top 70%"
            }}
          >
            <div>
              <Image
                src={"/moneyChange.png"}
                alt="hero"
                height={48}
                width={48}
              />
            </div>
            <h2 className="text-2xl font-semibold text-white">
              Flexible Repayment and Loan TopUp Options
            </h2>
            <p className="font-normal text-white text-base">
              Enjoy flexible repayment directly from source of income. Also, you
              can unlock the Veend loan top up option by consistently repaying
              all outstanding loans.
            </p>
          </div>
          <div
            className=" items-start justify-center text-left gap-4 p-4 md:p-6 flex flex-col rounded-[12px] bg-[#0F0F2B] w-full col-span-1 lg:col-span-7"
            style={{
              backgroundImage: "url('/bg1.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "left 105% top 70%"
            }}
          >
            <div>
              <Image src={"/flash.png"} alt="hero" height={48} width={48} />
            </div>
            <h2 className="text-2xl font-semibold text-white">
              Instant Eligibility and Loan Balance Check
            </h2>
            <p>
              Check your loan balance and eligibility stat
              className="font-normal text-white text-base"us effortlessly.
            </p>
          </div>
          <div
            className=" items-start justify-center text-left gap-4 p-4 md:p-6 flex flex-col rounded-[12px] bg-[#0E1424] w-full col-span-1 lg:col-span-5"
            style={{
              backgroundImage: "url('/bg1.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center"
            }}
          >
            <div>
              <Image src={"/support.png"} alt="hero" height={48} width={48} />
            </div>
            <h2 className="text-2xl font-semibold text-white">
              24/7 Customer Support
            </h2>
            <p>
              We are available 24/7 to provide the support you need for
              successful loan application and repayment className="font-normal
              text-white text-base".
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VWhyChoose;
