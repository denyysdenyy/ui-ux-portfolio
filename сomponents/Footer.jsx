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
        <div className="flex items-center justify-between">
          <Image alt="logo" src={logo} />
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
          <div></div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
