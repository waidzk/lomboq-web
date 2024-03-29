import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section id="guidance" className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          This is for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            The Enjoy Journey
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            In exploring the beauty of Lombok Island, we provide comprehensive
            guidance to ensure your vacation experience is unforgettable. From
            well-known tourist spots to hidden gems, we offer detailed
            information, local culinary recommendations, and exciting activity
            suggestions. With our guide, you'll discover the wonders of Lombok
            Island more easily, ensuring a satisfying travel adventure. Enjoy
            the unique natural and cultural charms of Lombok Island!
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          src="/rinjanimt.jpg"
          alt="mountain"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">4 days 3 nights</p>
              </div>
              <p className="bold-20 mt-2">the peak of Mount Rinjani</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start track</p>
              <p className="bold-16 text-green-50">Pelawangan Sembalun</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
