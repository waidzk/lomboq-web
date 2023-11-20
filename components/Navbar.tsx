"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    // Menerapkan overflow-hidden pada elemen body saat isNavOpen aktif
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = ""; // Mengembalikan overflow ke nilai default
    }

    // Membersihkan effect
    return () => {
      document.body.style.overflow = ""; // Pastikan untuk mengembalikan overflow saat komponen di-unmount
    };
  }, [isNavOpen]);

  return (
    <>
      <nav
        className={`flexBetween max-container padding-container relative z-30 py-5`}
      >
        <Link href="/">
          <Image src="/lomboq-logo.svg" alt="logo" width={74} height={29} />
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="lg:flexCenter hidden">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>
        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
          onClick={() => setIsNavOpen((prev) => !prev)}
        />
      </nav>
      <div
        className={`fixed z-50 right-0 overflow-x-hidden w-full bg-green-50 h-[87vh] flex justify-end items-center p-20 lg:hidden transition-all duration-500 ${
          isNavOpen ? "mr-0" : "mr-[-500px]"
        }`}
      >
        <div className="flex flex-col gap-5 w-fit text-white transition-all duration-75">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              onClick={() => setIsNavOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
