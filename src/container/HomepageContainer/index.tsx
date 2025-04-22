import {
  VContact,
  VFeatures,
  VGetStarted,
  VHero,
  VStarterGuide,
  VTestimonials,
  VWhyChoose
} from "@/components/Homepage";
import React from "react";

const VHomepageContainer = () => {
  return (
    <main>
      <VHero />
      <VTestimonials />
      {/* <VPartners /> */}
      <VWhyChoose />
      <VFeatures />
      <VStarterGuide />
      <VGetStarted />
      <VContact />
    </main>
  );
};

export default VHomepageContainer;
