import Image from "next/image";
import React from "react";
import logo from "../public/img/logo.webp";
import Container from "./Container";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("nav");

  return (
    <footer className="bg-[#151515] py-[38px]">
      <Container>
        <div className="flex items-center justify-center lg:justify-between">
          <Link href={"#"}>
            <Image alt="Karina Sevinyan logo" src={logo} width={146} height={26} />
          </Link>
          <nav className="hidden lg:block">
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
          <div className="hidden lg:block"></div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
