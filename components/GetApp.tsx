import React from "react";
import Button from "./Button";
import Image from "next/image";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-center justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px] text-center">
            Connect with us!
          </h2>
          <p className="regular-16 text-gray-10">
            Let's Start a Conversation and Craft Your Perfect Experience
          </p>
          <div className="flex flex-col w-full gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="WhatsApp"
              icon="/whatsapp-contact.svg"
              variant="btn_white"
              full
            />
            <Button
              type="button"
              title="Instagram"
              icon="/instagram-contact.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetApp;
