import React from "react";
import ContactCard, { ContactCardData } from "./ContactCard";

interface ContactCardsContainerProps {
  cards: ContactCardData[];
  className?: string;
}

const ContactCardsContainer = ({
  cards,
  className
}: ContactCardsContainerProps) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${className}`}>
      {cards.map((card, index) => (
        <ContactCard key={index} data={card} />
      ))}
    </div>
  );
};

export default ContactCardsContainer;
