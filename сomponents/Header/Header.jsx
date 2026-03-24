"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../../public/img/logo.png'
import Container from "../Container";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
const Header = () => {
  const t = useTranslations("nav");

  return (
    <Container>
      <header className="relative z-1 mt-[50px] mb-[300px] flex items-center">
        <Link className="mr-[358px]" href={"#"}>
          <Image alt="logo" src={logo} />
        </Link>
        <nav>
          <ul className="flex gap-[85px] [&>li]:text-primary [&>li]:hover:text-secondary [&>li]:duration-200 [&>li]:ease-in-out [&>li]:text-[25px]">
            <li>
              <Link href={"#"}>{t("me")}</Link>
            </li>
            <li>
              <Link href={"#"}>{t("cases")}</Link>
            </li>
            <li>
              <Link href={"#"}>{t("questions")}</Link>
            </li>
            <li>
              <Link href={"#"}>{t("reviews")}</Link>
            </li>
            <li>
              <Link href={"#"}>{t("contacts")}</Link>
            </li>
          </ul>
        </nav>
        <LanguageSwitcher />
      </header>
    </Container>
  );
};

export default Header;
