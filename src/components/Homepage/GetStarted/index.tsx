import DownloadButtons from "@/components/Global/Download/DownloadButtons";
import React from "react";

const VGetStarted = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-8 w-full mb-10 max-[1200px] mx-auto">
      <div className="max-w-[494px] w-full mx-auto text-center">
        <h3 className="text-4xl font-bold">Ready to get instant loan?</h3>
        <p>
          Download our mobile app, available on Google Play and Apple Store, to
          get started today!
        </p>
      </div>
      <div className="flex gap-4 justify-center items-center w-full">
        <DownloadButtons
          icon="/playStore.png"
          topText="GET IT ON"
          bottomText="Google Play"
          href="/"
          variant="google"
        />

        <DownloadButtons
          icon="/apple.png"
          topText="Download on the"
          bottomText="Apple Store"
          href="/"
          variant="apple"
        />
      </div>
    </section>
  );
};

export default VGetStarted;
