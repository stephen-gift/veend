import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface ContactCardData {
  type: "call" | "mail";
  title: string;
  description: string;
  buttonText: string;
  actionUrl: string;
  src: string;
}

// Props for the ContactCard component
interface ContactCardProps {
  data: ContactCardData;
  className?: string;
}

const ContactCard = ({
  data: { type, title, description, buttonText, actionUrl, src },
  className
}: ContactCardProps) => {
  const styles = {
    background: type === "call" ? "bg-purple-50" : "bg-emerald-50",
    buttonColor:
      type === "call"
        ? "text-purple-700 border-purple-700 "
        : "text-emerald-500 border-emerald-500 "
  };

  return (
    <div
      className={`flex flex-col justify-center items-start rounded-lg p-6 ${styles.background} ${className}`}
    >
      <div className="flex flex-col items-start mb-4">
        <div className="relative w-6 h-6 mb-4">
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover rounded-full"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-left">{description}</p>
      </div>
      <Link href={actionUrl} className="w-full">
        <button
          className={`mt-4 py-2 px-4 border rounded-md w-full md:w-fit font-medium ${styles.buttonColor}`}
        >
          {buttonText}
        </button>
      </Link>
    </div>
  );
};

export default ContactCard;
