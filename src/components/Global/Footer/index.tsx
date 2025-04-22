import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DownloadButtons from "../Download/DownloadButtons";
import FooterLinks from "./FooterLinks";

const VFooter = () => {
  return (
    <footer className="bg-[#040320] text-white p-2 md:p-10 py-7">
      <div className="flex flex-col w-full max-w-[1440px] mx-auto gap-4">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-start w-full">
          <div className="flex  flex-col h-full gap-3">
            <div className="flex items-center">
              <Image
                src="/logoText.svg"
                alt="Aend Logo"
                width={100}
                height={32}
                className="mr-2"
              />
            </div>

            <div>
              <Link href="mailto:support@veendhq.com">support@veendhq.com</Link>

              <address>1309 Coffeen Ave. Suite 1200 Sheridan WY, 82801</address>
            </div>
            <div className="flex items-center gap-4">
              <Link href={"/"}>
                <Linkedin />
              </Link>
              <Link href={"/"}>
                <Twitter />
              </Link>
              <Link href={"/"}>
                <Instagram />
              </Link>
              <Link href={"/"}>
                <Facebook />
              </Link>
            </div>

            <div>{/* Backed by teckstars */}</div>
          </div>
          <div className="flex flex-col md:flex-col-reverse gap-4 justify-center items-center w-full">
            <div className="flex  flex-col lg:flex-row justify-center items-center w-full gap-4">
              <div className="flex-1 flex flex-col w-full gap-2">
                <p>Available on</p>
                <div className="flex gap-4  items-center justify-around w-full">
                  <DownloadButtons
                    icon="/playStore.png"
                    topText="GET IT ON"
                    bottomText="Google Play"
                    href="/"
                    variant="google"
                  />

                  <DownloadButtons
                    icon="/apple.png"
                    topText="Download on the"
                    bottomText="Apple Store"
                    href="/"
                    variant="apple"
                  />
                </div>
              </div>
              <div className="flex-1 flex justify-between items-center gap-4 w-full">
                <div className="bg-white p-1 flex justify-center items-center">
                  <Image
                    src={"/npdr.png"}
                    alt="NPDR"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="bg-white p-1 flex justify-center items-center">
                  <Image
                    src={"/fccpc.png"}
                    alt="NPDR"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="bg-white p-1 flex justify-center items-center">
                  <Image src={"/dss.png"} alt="NPDR" width={100} height={100} />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-8 w-full">
              {/* Products Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-medium mb-4">Products</h3>
                <div className="flex flex-col space-y-3">
                  <Link href="/" className="hover:text-gray-300 transition">
                    Buy Now, Pay Later
                  </Link>
                  <Link href="/" className="hover:text-gray-300 transition">
                    Federal Government Worker Loan
                  </Link>
                  <Link href="/" className="hover:text-gray-300 transition">
                    Remita Payroll Loan
                  </Link>
                </div>
              </div>

              {/* Middle Section - More Links/Useful Links */}
              <div className="space-y-4">
                <h3 className="text-xl font-medium mb-4">More links</h3>
                <nav className="flex flex-col space-y-3">
                  <>
                    <Link href="/" className="hover:text-gray-300 transition">
                      For Employers
                    </Link>
                    <Link href="/" className="hover:text-gray-300 transition">
                      For Businesses
                    </Link>
                  </>
                </nav>
              </div>

              {/* Legal Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-medium mb-4">Legal</h3>
                <nav className="flex flex-col space-y-3">
                  <Link href="/" className="hover:text-gray-300 transition">
                    Privacy Policy
                  </Link>
                  <Link href="/" className="hover:text-gray-300 transition">
                    Terms and Conditions
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  justify-center items-center w-full">
          <small>
            ©{new Date().getFullYear()} Veend Ltd. All rights reserved.
          </small>
        </div>
      </div>
      <div className="border-t border-gray-700">
        <FooterLinks />
      </div>
    </footer>
  );
};

export default VFooter;
