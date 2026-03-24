"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../../public/img/logo.webp'
import Container from "../Container";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
const Header = () => {
  const t = useTranslations("nav");

  return (
    <Container>
      <header className="relative z-10 mt-[clamp(20px,3vw,50px)] mb-[clamp(80px,15vw,300px)] flex items-center">
        <Link className="shrink-0" href={"#"}>
          <Image alt="logo" src={logo} />
        </Link>
        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex gap-[clamp(30px,4vw,85px)] [&>li]:text-primary [&>li]:hover:text-secondary [&>li]:duration-200 [&>li]:ease-in-out [&>li]:text-[clamp(16px,1.5vw,25px)]">
            <li>
              <Link href={"#about"}>{t("me")}</Link>
            </li>
            <li>
              <Link href={"#cases"}>{t("cases")}</Link>
            </li>
            <li>
              <Link href={"#questions"}>{t("questions")}</Link>
            </li>
            <li>
              <Link href={"#reviews"}>{t("reviews")}</Link>
            </li>
            <li>
              <Link href={"#contacts"}>{t("contacts")}</Link>
            </li>
          </ul>
        </nav>
        <LanguageSwitcher />
      </header>
    </Container>
  );
};

export default Header;
