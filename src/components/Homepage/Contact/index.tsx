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
    <section className="max-w-[1200px] w-full mx-auto mb-10">
      <div className="flex flex-col gap-6">
        <div className="max-w-[1000px] text-center">
          <h3 className="text-[18px] md:text-5xl font-semibold text-[#334] text-center md:text-left">
            Need any assistance?
            <br /> Our dedicated customer service team is available around the
            clock to assist you.
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
