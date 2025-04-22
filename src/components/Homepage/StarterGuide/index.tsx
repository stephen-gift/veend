"use client";
import { Button } from "@/components/ui/button";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tabs } from "@radix-ui/react-tabs";
import Image from "next/image";
import React from "react";
import VerticalSteps from "./VerticalSteps";

const VStarterGuide = () => {
  const [activeTab, setActiveTab] = React.useState("ussd");

  const ussdSteps = [
    {
      title: "Dial *347*780#",
      description:
        "Simply dial the USSD to get started conveniently from your mobile phone."
    },
    {
      title: "Enter your salary phone number",
      description:
        "To begin the application process, enter your salary phone number when prompted."
    },
    {
      title: "Choose your preferred loan option",
      description:
        "Select from a range of amount and terms of your choice and confirm your application to complete the application."
    },
    {
      title: "Loan disbursed",
      description: "Your loan will be instantly disbursed to your account."
    }
  ];
  const mobileSteps = [
    {
      title: "Download the Veend mobile app",
      description:
        "Get started by downloading the Veend mobile app available on iOS and Android."
    },
    {
      title: "Enter your salary phone number",
      description:
        "Sign up by entering your salary phone number and get verified."
    },
    {
      title: "Apply for loan",
      description:
        'Click on the "Apply" button on this app and select your preferred loan amount and terms.'
    },
    {
      title: "Loan disbursed",
      description:
        "Your loan will be instantly disbursed to your Veend account."
    }
  ];
  const webSteps = [
    {
      title: 'Click on "Get an instant loan"',
      description: "Click on this button to begin your loan application."
    },
    {
      title: "Enter your salary phone number",
      description: "Provide your salary phone number and follow the prompts."
    },
    {
      title: "Choose your preferred loan option",
      description: "Select the loan amount and tenor of your choice."
    },
    {
      title: "Loan disbursed",
      description: "Your loan will be instantly disbursed to your account."
    }
  ];
  return (
    <section>
      <div className="max-w-6xl w-full mx-auto">
        <div className="text-center mb-8 max-w-[630px] w-full mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-12">
            Embark on your financial journey with Veend. Get a quick loan in
            less than 5 minutes!
          </h3>
        </div>

        <Tabs
          defaultValue="account"
          className="flex justify-center items-center flex-col w-full "
        >
          <TabsList className="mb-12 bg-[#FEF2DE] flex gap-10">
            <TabsTrigger
              className="data-[state=active]:bg-[#F9AB21]"
              value="ussd"
            >
              USSD
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-[#F9AB21]"
              value="mobile"
            >
              Mobile App
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-[#F9AB21]"
              value="web"
            >
              Web
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ussd" className="w-full">
            {/* USSD Content */}
            <div className=" flex flex-col md:flex-row w-full justify-between items-center gap-3 md:gap-8">
              <div className="flex-1 flex flex-col justify-center items-center w-full">
                <VerticalSteps steps={ussdSteps} currentStep={5} />
              </div>
              <div className="flex-1 w-full">
                <Image
                  src={"/ussd.png"}
                  alt="USSD"
                  width={400}
                  height={400}
                  objectFit="cover"
                  className="object-cover h-full w-full"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 justify-center items-center w-full">
              <Image src={"arrow.svg"} alt="arrow" width={55} height={67} />
              <div className="bg-[#F9AB21] p-4 rounded-[100px]">
                Dial *347*780#
              </div>
            </div>
          </TabsContent>

          <TabsContent value="mobile" className="w-full">
            {/* Mobile Content */}
            <div className=" flex flex-col md:flex-row w-full justify-between items-center gap-3 md:gap-8">
              <div className="flex-1 flex flex-col justify-center items-center w-full">
                <VerticalSteps steps={mobileSteps} currentStep={5} />
              </div>
              <div className="flex-1 w-full">
                <Image
                  src={"/mobile.svg"}
                  alt="USSD"
                  width={400}
                  height={400}
                  objectFit="cover"
                  className="object-cover h-full w-full"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 justify-center items-center w-full">
              <Image src={"arrow.svg"} alt="arrow" width={55} height={67} />
              <div className="bg-[#F9AB21] p-4 rounded-[100px]">
                Dial *347*780#
              </div>
            </div>
          </TabsContent>

          <TabsContent value="web" className="w-full">
            {/* Web Content */}
            <div className=" flex flex-col md:flex-row w-full justify-between items-center gap-3 md:gap-8 ">
              <div className="flex-1 flex flex-col justify-center items-center w-full">
                <VerticalSteps steps={webSteps} currentStep={5} />
              </div>
              <div className="flex-1 w-full">
                <Image
                  src={"/web.svg"}
                  alt="USSD"
                  width={400}
                  height={400}
                  objectFit="cover"
                  className="object-cover h-full w-full"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 justify-center items-center w-full">
              <Image src={"arrow.svg"} alt="arrow" width={55} height={67} />
              <div className="bg-[#F9AB21] p-4 rounded-[100px]">
                Get Started
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default VStarterGuide;
