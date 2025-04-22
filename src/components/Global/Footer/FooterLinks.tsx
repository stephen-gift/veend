import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const FooterLinks = () => {
  const links = [
    "Instant Loan In Nigeria",
    "Loans In Nigeria",
    "Ippis Emergency Loan",
    "Ippis Loan App",
    "Ippis Loan Codes For Government Employees",
    "Ippis Loan Companies",
    "Ippis Loan Form",
    "Ippis Loan in Nigeria",
    "Ippis Salary Loan",
    "Where To Loan 50k",
    "Loan Eligibility Check",
    "Quick Loans For Civil Servants",
    "Loan For Federal Government Workers",
    "Mito Ippis Loan Contact Number",
    "Best Ippis Loan In Nigeria",
    "Ippis Remita Loan",
    "Loan Through Ippis",
    "Loan With Ippis Number",
    "Ippis Loan For Federal Government Employees",
    "Ippis Loan Application Form",
    "Remita Loan Used Code",
    "Loan Interest Calculator",
    "Which Loan App Gives 5000 Naira",
    "Remita Loan Code",
    "Loan Calculator Nigeria",
    "Salary Loan Calculator",
    "Which Loan App Is The Best",
    "Which Loan App Is Legit In Nigeria",
    "Payday Loan Calculator",
    "Payday Loan Eligibility Checker",
    "Easy Loans Online",
    "Loan Repayment Calculator",
    "Loan Code in Nigeria",
    "Payday Loan App In Nigeria",
    "Payroll Loans For Employees",
    "Loan Like Remmoney IPRS Loan",
    "Where To Loan 20k",
    "Remita Loans For Civil Servants",
    "Loan App Like Laps Ippis Loan",
    "Payday Loan Phone Number",
    "Payday Loan Quick Payout App",
    "Where To Loan 200k",
    "How Loan Eligibility Is Calculated"
  ];
  return (
    <div className="px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {links.map((link, index) => (
          <Link
            key={index}
            href="/"
            className={cn(
              "text-sm md:text-xs lg:text-sm text-muted-foreground hover:text-primary transition-colors",
              "line-clamp-1"
            )}
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;
