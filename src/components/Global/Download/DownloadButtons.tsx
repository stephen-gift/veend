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
        "inline-flex items-center px-4 py-2 rounded-[100px]",
        "transition-all duration-200",
        "hover:opacity-90 active:scale-95",
        selectedVariant.bg,
        selectedVariant.text,
        "border",
        selectedVariant.border,
        className
      )}
    >
      <div className="flex items-center">
        <div className="flex-shrink-0 w-8 h-8 mr-3">
          <Image
            src={icon}
            alt={`${bottomText} logo`}
            width={32}
            height={32}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-medium">{topText}</span>
          <span className="text-lg font-bold leading-tight">{bottomText}</span>
        </div>
      </div>
    </Link>
  );
};

export default DownloadButtons;
