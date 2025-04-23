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
import { motion } from "motion/react";

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
    <>
      <header className="fixed w-full top-0 z-50 bg-white">
        <div className="flex justify-center lg:justify-between item-center px-5 py-2 max-w-[1200px] mx-auto w-full">
          <motion.div
            className="flex flex-wrap gap-4 justify-between lg:justify-start items-center w-full sm:flex"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                delay: 0.1
              }}
              viewport={{ once: true }}
            >
              <motion.span
                className="text-primary"
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1
                }}
                viewport={{ once: true }}
              >
                <Headset size={20} />
              </motion.span>
              <span>Reach Us Via:</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                delay: 0.3
              }}
              viewport={{ once: true }}
            >
              <motion.span
                className="text-primary"
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.3
                }}
                viewport={{ once: true }}
              >
                <Phone size={20} />
              </motion.span>
              <Link
                href="tel:+2348013306078"
                className="hover:text-primary transition-colors"
              >
                +2348013306078
              </Link>
            </motion.div>

            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                delay: 0.5
              }}
              viewport={{ once: true }}
            >
              <motion.span
                className="text-primary"
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.5
                }}
                viewport={{ once: true }}
              >
                <MailIcon size={20} />
              </motion.span>
              <Link
                href="mailto:support@veendhq.com"
                className="hover:text-primary transition-colors"
              >
                support@veendhq.com
              </Link>
            </motion.div>
          </motion.div>
          <div className="hidden lg:flex gap-x-4">
            <Button>Check Loan Eligibility</Button>
          </div>
        </div>
        <div className="bg-[#040320] h-24 w-full flex justify-between items-center">
          <div className="max-w-[1200px] mx-auto w-full flex justify-between items-center p-5">
            <div>
              <Image
                src="/logoText.svg"
                alt="veend logo"
                width={100}
                height={50}
              />
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

              {/* Mobile Menu Toggle Button */}
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
        </div>
      </header>

      {/* Mobile Menu - Now positioned relative to viewport, not within header */}
      {mobileMenuOpen && (
        <div className="fixed top-0 h-full left-0 right-0 bg-[#0A0921] text-white z-50 overflow-y-auto">
          <div className="p-5 flex justify-between items-center bg-[#040320]">
            <div>
              <Image
                src="/logoText.svg"
                alt="veend logo"
                width={100}
                height={50}
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X />
            </Button>
          </div>

          <div className="px-6 py-4 space-y-3">
            <div className="space-y-2">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="products">
                  <AccordionTrigger className="text-white">
                    Products
                  </AccordionTrigger>
                  <AccordionContent className="pl-4 space-y-2">
                    <Link href="#" className="block hover:underline py-2">
                      Product 1
                    </Link>
                    <Link href="#" className="block hover:underline py-2">
                      Product 2
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block hover:underline py-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-4">
                <Button className="w-full">Check Loan Eligibility</Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-[104px]"></div>
    </>
  );
};

export default VHeader;
