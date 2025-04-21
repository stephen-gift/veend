"use client";
import { Button } from "@/components/ui/button";
import { ChevronDown, Headset, MailIcon, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const VHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = [
    { label: "Lending Partners", href: "/" },
    { label: "For Employers", href: "/" },
    { label: "For Businesses", href: "/" },
    { label: "About us", href: "/" },
    { label: "Blog", href: "/" },
    { label: "Check loan repayment", href: "/" },
    { label: "Login", href: "/" }
  ];
  return (
    <header>
      <div className="flex justify-center lg:justify-between  item-center p-3">
        <div className="hidden gap-4 justify-between lg:justify-start items-center w-full sm:flex">
          <div className="flex item-center">
            <Headset />
            Reach Us Via:
          </div>
          <div className="flex item-center">
            <Phone /> +2348013306078
          </div>
          <div className="flex item-center">
            <MailIcon /> support@veendhq.com
          </div>
        </div>
        <div className="hidden lg:flex gap-x-4">
          <Button>Check Loan Eligibility</Button>
        </div>
      </div>
      <div className="bg-[#040320] h-24 w-full flex justify-between items-center">
        <div>
          <Image src="/logoText.svg" alt="veend logo" width={100} height={50} />
        </div>

        <nav className="text-white">
          <div className="hidden lg:flex items-center space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 focus:outline-none">
                <span>Products</span>
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white text-black">
                <DropdownMenuItem>Product 1</DropdownMenuItem>
                <DropdownMenuItem>Product 2</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </nav>
      </div>
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0921] text-white px-6 py-4 space-y-3">
          <div className="space-y-2">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="products">
                <AccordionTrigger className="text-white">
                  Products
                </AccordionTrigger>
                <AccordionContent className="pl-4 space-y-2">
                  <Link href="#" className="block hover:underline">
                    Product 1
                  </Link>
                  <Link href="#" className="block hover:underline">
                    Product 2
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block hover:underline"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default VHeader;
