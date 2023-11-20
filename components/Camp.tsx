"use client";

import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface CampSiteProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampSiteProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat bg-bottom lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section id="destination" className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="mySwiper hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]"
      >
        <SwiperSlide>
          <CampSite
            backgroundImage="bg-bg-img-1"
            title="Mt. Rinjani"
            subtitle="Lombok Timur, Lombok Tengah, and Lombok Utara."
            peopleJoined="10000+ Joined"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CampSite
            backgroundImage="bg-bg-img-2"
            title="Gili Trawangan"
            subtitle="Lombok Utara, Pemenang"
            peopleJoined="1000+ Joined"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CampSite
            backgroundImage="bg-bg-img-3"
            title="Pink Beach Lombok"
            subtitle="Lombok Timur, Jerowaru"
            peopleJoined="1000+ Joined"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CampSite
            backgroundImage="bg-bg-img-4"
            title="Gili Meno"
            subtitle="Lombok Utara"
            peopleJoined="1000+ Joined"
          />
        </SwiperSlide>
      </Swiper>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-60 z-[1000]">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden">
          <h2 className="regular-14 md:regular-32 2xl:regular-64 capitalize text-white">
            Inspired to <strong>Explore the Beauty</strong> of Lombok Island?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Embark on an unforgettable adventure in this exotic destination.
            From white sandy beaches to rich cultural traditions, Lombok Island
            offers an extraordinary holiday experience. Embrace the wonders of
            nature and our vibrant culture! Don't miss out on unforgettable
            moments; let's vacation on Lombok Island now!
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
