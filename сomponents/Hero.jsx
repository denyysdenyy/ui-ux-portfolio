"use client";
import React from "react";
import Image from "next/image";
import Header from "./Header/Header";
import Link from "next/link";
import imgTelegram from "../public/social/telegram.svg";
import imgInstagram from "../public/social/insta.svg";
import imgPhone from "../public/social/phone.svg";
import Container from "./Container";
import { useTranslations } from "next-intl";
import Button from "./UI/Button";
import imgBg from '../public/img/bg-hero.png'

const socials = [
  { id: 0, img: imgTelegram, alt: "Telegram", href: "#" },
  { id: 1, img: imgInstagram, alt: "Instagram", href: "#" },
  { id: 2, img: imgPhone, alt: "Phone", href: "#" },
];

const Hero = () => {
  const t = useTranslations("hero");
  return (
    <section className="relative bg-black overflow-hidden flex flex-col">
      <div className="absolute inset-0 top-[120px] z-0 pointer-events-none">
        <Image
          src={imgBg}
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <Header />
      <Container>
        <div className="flex items-center justify-center relative z-10">
          <div className="flex flex-col items-center">
            <h1 className="font-extrabold mb-[30px] text-[clamp(40px,8vw,120px)] z-10 leading-[1.2] tracking-[-0.05em] text-center text-primary">
              {t("title1")} <br />
              {t("title2")}
            </h1>
            <p className="mb-[clamp(40px,7vw,118px)] font-[500] mw-[1336px] text-center text-[clamp(18px,2.5vw,38px)] tracking-tighter">
              {t("subtitle1")} <br />
              {t("subtitle2")}
            </p>
            <Button />
          </div>
          <div className="hidden lg:flex flex-col gap-[30px] absolute right-0 top-[100px]">
            {socials.map((social) => (
              <Link
                className="bg-black p-[20px]   border-2 border-transparent rounded-[100px] border- hover:border-secondary duration-300 transition-all"
                key={social.id}
                href={"#"}
              >
                <Image
                  width={30}
                  height={30}
                  alt={social.alt}
                  src={social.img}
                ></Image>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
