"use client";
import React from "react";
import Image from "next/image";
import Header from "./Header/Header";
import Link from "next/link";
import imgTelegram from "../public/social/telegram.png";
import imgInstagram from "../public/social/insta.png";
import imgPhone from "../public/social/phone.png";
import Container from "./Container";
import { useTranslations } from "next-intl";

const socials = [
  { id: 0, img: imgTelegram, alt: "Telegram", href: "#" },
  { id: 1, img: imgInstagram, alt: "Instagram", href: "#" },
  { id: 2, img: imgPhone, alt: "Phone", href: "#" },
];

const Hero = () => {
  const t = useTranslations("hero");
  return (
    <section className="relative bg-black overflow-hidden flex flex-col">
      <Header />
      <Container>
        <div className="flex items-center justify-center relative">
          <div className="flex flex-col items-center">
            <h1 className="font-semibold mb-[30px] text-[clamp(40px,8vw,120px)] z-10 leading-[1.2] tracking-[-0.05em] text-center text-primary">
              {t("title1")} <br />
              {t("title2")}
            </h1>
            <p className="mb-[118px] font-[500] mw-[1336px] text-center text-[38px] tracking-tighter">
              {t("subtitle1")} <br />
              {t("subtitle2")}
            </p>
            <Link
              href="#"
              className="bg-secondary block   py-[32px] px-[60.5px] text-[32px] font-[600] rounded-[100px] px-[45.5px]  border-[2px] transition-all duration-300 border-secondary hover:bg-transparent  hover:text-secondary "
            >
              Обговорити проект
            </Link>
          </div>
          <div className="flex flex-col gap-[30px] absolute right-0">
            {socials.map((social) => (
              <Link
                className="bg-black p-[20px]   border-2 border-transparent rounded-[100px] border- hover:border-secondary duration-300 transition-all"
                key={social.id}
                href={"#"}
              >
                <Image alt={social.alt} src={social.img}></Image>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
