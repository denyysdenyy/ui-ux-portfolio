import Image from "next/image";
import React from "react";
import logo from "../public/img/logo.png";
import Container from "./Container";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("nav");

  return (
    <footer className="bg-[#151515] py-[38px]">
      <Container>
        <Link href={'#'} className="flex items-center justify-center lg:justify-between">
          <Image alt="logo" src={logo} />
          <nav className="hidden lg:block">
            <ul className="flex gap-[clamp(30px,4vw,85px)] [&>li]:text-primary [&>li]:hover:text-secondary [&>li]:duration-200 [&>li]:ease-in-out [&>li]:text-[clamp(16px,1.5vw,25px)]">
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
          <div className="hidden lg:block"></div>
        </Link>
      </Container>
    </footer>
  );
};

export default Footer;
