import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface DownloadButtonProps {
  icon: string;
  topText: string;
  bottomText: string;
  href: string;
  variant?: "google" | "apple" | "custom";
  bgColor?: string;
  textColor?: string;
  className?: string;
}

const DownloadButtons = ({
  bottomText,
  href,
  icon,
  topText,
  variant = "custom",
  bgColor,
  textColor,
  className
}: DownloadButtonProps) => {
  const variants = {
    google: {
      bg: "bg-gray-900",
      text: "text-white",
      border: "border-gray-700"
    },
    apple: {
      bg: "bg-gray-900",
      text: "text-white",
      border: "border-gray-700"
    },
    custom: {
      bg: bgColor || "bg-gray-900",
      text: textColor || "text-white",
      border: "border-gray-700"
    }
  };

  const selectedVariant = variants[variant];
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center p-2 md:p-3 rounded-[100px]",
        "transition-all duration-200",
        "hover:opacity-90 active:scale-95",
        selectedVariant.bg,
        selectedVariant.text,
        "border",
        selectedVariant.border,
        className
      )}
    >
      <div className="flex items-center gap-2">
        <div className=" w-8 h-8">
          <Image
            src={icon}
            alt={`${bottomText} logo`}
            width={24}
            height={24}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] md:text-[12px] font-medium">
            {topText}
          </span>
          <span className="text-[12px] md:text-[14px] font-bold leading-tight">
            {bottomText}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default DownloadButtons;
