import { ContactCardData } from "@/components/Global/Download/ContactCard";
import ContactCardsContainer from "@/components/Global/Download/ContactCardsContainer";
import React from "react";

const VContact = () => {
  const contactCards: ContactCardData[] = [
    {
      type: "call",
      title: "Give us a call",
      description:
        "For direct assistance and support, contact us via phone call on +234 901 330 6078. Our team of experts are at your service, ready to support you.",
      buttonText: "Give us a call",
      actionUrl: "tel:+2349011330678",
      src: "/phone.png"
    },
    {
      type: "mail",
      title: "Send us a mail",
      description:
        "Email us your queries or requests at support@veendhq.com, and the team will respond promptly",
      buttonText: "Send mail",
      actionUrl: "mailto:support@veendhq.com",
      src: "/mail.png"
    }
  ];
  return (
    <section>
      <div className="flex flex-col gap-6">
        <div className="max-w-[1035px] text-center">
          <h3 className="text-5xl font-bold text-center md:text-left">
            Need any assistance? Our dedicated customer service team is
            available around the clock to assist you.
          </h3>
        </div>
        <div>
          <ContactCardsContainer cards={contactCards} />
        </div>
      </div>
    </section>
  );
};

export default VContact;
