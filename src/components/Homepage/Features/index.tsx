import Image from "next/image";
import React from "react";

const VFeatures = () => {
  return (
    <section>
      <div>
        <div className="max-w-[610px] w-full mx-auto text-center">
          <h3 className="text-2xl font-bold">
            Customized Loan Products just for you
          </h3>
          <p className="font-normal text-2xl">
            Veend offers a range of specialised loan products designed to cater
            specifically to your credit needs.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-0 p-0">
          <div className="flex flex-col md:flex-row justify-center items-center w-full">
            <div className="flex-1 flex justify-center items-center flex-col text-left w-full">
              <div className="flex flex-col  justify-center items-center gap-3 max-w-[450px] w-full mx-auto text-center md:text-left">
                <h3 className="text-lg md:text-4xl font-bold text-center md:text-left ">
                  Federal Government Worker Loan
                </h3>

                <p className="text-[14px] md:text-2xl text-center md:text-left">
                  Veend offers instant loans for federal government workers to
                  address the distinctive needs of government employees,
                  providing tailored financial solutions to civil servants in
                  Nigeria.
                </p>
              </div>
            </div>
            <div className="flex-1 col-start-2 row-start-1 relative ">
              <Image
                src={"/feat1.png"}
                alt=""
                height={825}
                width={720}
                objectFit="cover"
                className="object-cover h-full "
              />
              <div
                className="w-full p-2 gap-2 rounded-[4px] border 
              border-[#FFFFFF80] shadow-[0px_8.684px_43.422px_0px_rgba(0,0,0,0.10)]
              backdrop-blur-[6.475563px] bg-[linear-gradient(119deg,_#FDFCFC99_-3.52%,_#FDFCFC80_103.29%)]
              md:max-w-[488px] max-w-[242px] flex flex-row items-center justify-center
              absolute bottom-[20%] left-[50%] -translate-[50%] translate-y-[50%] md:bottom-[30%] md:-left-[10%]"
              >
                <div className="bg-[#0600891A] p-1 rounded h-fit ">
                  <Image src={"/logo.svg"} alt="logo" width={55} height={55} />
                </div>
                <p>
                  Your loan request of ₦200,000 has been approved and disbursed.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse justify-center items-center w-full">
            <div className="flex-1 flex justify-center items-center flex-col text-left">
              <div className="flex flex-col justify-center items-center gap-3 max-w-[450px] w-full mx-auto">
                <h3 className="text-lg md:text-4xl font-bold text-center md:text-left ">
                  Remita Payroll and IPPIS Loans
                </h3>

                <p className="text-[14px] md:text-2xl text-center md:text-left">
                  Veend's Remita Payroll and IPPIS Loans for federal and state
                  government workers in Nigeria, provides on-demand instant
                  credit tailored for the unique needs of salary earners in
                  Nigeria.
                </p>
              </div>
            </div>
            <div className="flex-1 relative">
              <Image
                src={"/feat2.png"}
                alt=""
                height={825}
                width={720}
                objectFit="cover"
                className="object-cover h-full"
              />
              <div
                className="w-full p-2 gap-2 rounded-[4px] border border-[#FFFFFF80] shadow-[0px_8.684px_43.422px_0px_rgba(0,0,0,0.10)] 
              backdrop-blur-[6.475563px] bg-[linear-gradient(119deg,_#FDFCFC99_-3.52%,_#FDFCFC80_103.29%)]
              md:max-w-[488px] max-w-[242px] flex flex-row items-center justify-center 
              absolute bottom-[20%] left-[50%] -translate-[50%]   md:bottom-[20%] md:left-[80%]"
              >
                <div className="bg-[#0600891A] p-1 rounded">
                  <Image src={"/logo.svg"} alt="logo" width={55} height={55} />
                </div>
                <p>
                  Your loan request of ₦150,000 has been approved and disbursed.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center w-full">
            <div className="flex-1 flex justify-center items-center flex-col text-left">
              <div className="max-w-[450px] w-flex flex-col justify-center items-center gap-3 full mx-auto">
                <h3 className="text-lg md:text-4xl font-bold text-center md:text-left ">
                  Buy Now, Pay Later
                </h3>

                <p className="text-[14px] md:text-2xl text-center md:text-left">
                  Enjoy the flexibility and convenience of Veend’s Buy Now Pay
                  Later loan options, allowing you to enjoy your purchases and
                  manage repayment confidently.
                </p>
              </div>
            </div>
            <div className="flex-1 relative">
              <Image
                src={"/feat3.png"}
                alt=""
                height={825}
                width={720}
                objectFit="cover"
                className="object-cover h-full"
              />
              <div className="w-full p-2 gap-2 rounded-[4px] border border-[#FFFFFF80] shadow-[0px_8.684px_43.422px_0px_rgba(0,0,0,0.10)] backdrop-blur-[6.475563px] bg-[linear-gradient(119deg,_#FDFCFC99_-3.52%,_#FDFCFC80_103.29%)] md:max-w-[488px] max-w-[242px] flex flex-row items-center justify-center absolute bottom-[20%] left-[50%] -translate-[50%] md:bottom-[30%] md:-left-[10%]">
                <div className="bg-[#0600891A] p-1 rounded">
                  <Image src={"/logo.svg"} alt="logo" width={55} height={55} />
                </div>
                <p>Your requested “iPhone 13 pro” is ready for pickup.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse justify-center items-center w-full">
            <div className="flex-1 flex justify-center items-center flex-col text-left">
              <div className="max-w-[450px] flex flex-col justify-center items-center gap-3 full mx-auto">
                <h3 className="text-lg md:text-4xl font-bold text-center md:text-left ">
                  Solar Energy Finance
                </h3>

                <p className="text-[14px] md:text-2xl text-center md:text-left">
                  Power up your life with Veend's Solar Energy loan. Enjoy clean
                  energy, comfort and productivity in your home and office space
                  by securing instant loans for solar products and equipment.
                </p>
              </div>
            </div>
            <div className="flex-1 relative">
              <Image
                src={"/feat4.png"}
                alt=""
                height={825}
                width={720}
                objectFit="cover"
                className="object-cover h-full"
              />
              <div
                className="w-full p-2 gap-2 rounded-[4px] border border-[#FFFFFF80] shadow-[0px_8.684px_43.422px_0px_rgba(0,0,0,0.10)] 
              backdrop-blur-[6.475563px] bg-[linear-gradient(119deg,_#FDFCFC99_-3.52%,_#FDFCFC80_103.29%)]
              md:max-w-[488px] max-w-[242px] flex flex-row items-center justify-center absolute bottom-[20%]
              left-[50%] -translate-[50%] md:bottom-[20%] md:left-[80%]"
              >
                <div className="bg-[#0600891A] p-1 rounded">
                  <Image src={"/logo.svg"} alt="logo" width={55} height={55} />
                </div>
                <p>Your requested “10kW solar panel” is ready for pickup.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center w-full">
            <div className="flex-1 flex justify-center items-center flex-col text-left">
              <div className="flex flex-col justify-center items-center gap-3 max-w-[450px] w-full mx-auto">
                <h3 className="text-lg md:text-4xl font-bold text-center md:text-left ">
                  Salary Backed Venture Loans for Civil Servant
                </h3>

                <p className="text-[14px] md:text-2xl text-center md:text-left">
                  Veend provides Venture Loans for civil servants to fuel their
                  business aspirations. We provide salary backed loans to
                  enterprising government workers in Nigeria to kick start their
                  entrepreneurial journey.
                </p>
              </div>
            </div>
            <div className="flex-1 relative">
              <Image
                src={"/feat5.png"}
                alt=""
                height={825}
                width={720}
                objectFit="cover"
                className="object-cover h-full"
              />
              <div
                className="w-full p-2 gap-2 rounded-[4px] border border-[#FFFFFF80] shadow-[0px_8.684px_43.422px_0px_rgba(0,0,0,0.10)] 
              backdrop-blur-[6.475563px] bg-[linear-gradient(119deg,_#FDFCFC99_-3.52%,_#FDFCFC80_103.29%)]
              md:max-w-[488px] max-w-[242px] flex flex-row items-center justify-center absolute bottom-[20%]
              left-[50%] -translate-[50%]  md:bottom-[30%] md:-left-[10%]"
              >
                <div className="bg-[#0600891A] p-1 rounded">
                  <Image src={"/logo.svg"} alt="logo" width={55} height={55} />
                </div>
                <p>
                  Your requested venture loan of ₦5,000,000 for “bakery” has
                  been approved and disbursed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VFeatures;
