import React from "react";
import Container from "./Container";
import Image from "next/image";
import svgInstagram from "../public/social/insta.svg";
import svgTelegram from "../public/social/telegram.svg";
import svgPhone from "../public/social/phone.svg";
import Title, { Pink } from "./UI/Title";
import Link from "next/link";

const links = [
  { id: 0, icon: svgInstagram, link: "#", text: "Instagram" },
  { id: 1, icon: svgTelegram, link: "#", text: "Telegram" },
  { id: 2, icon: svgPhone, link: "#", text: "Номер телефону" },
];

const Contacts = () => {
  return (
    <section>
      <Container>
        <Title>
          <Pink>Контакти</Pink>
        </Title>
        <div className="flex flex-col sm:flex-row gap-[21px]">
          {links.map((link) => (
            <Link
              key={link.id}
              className="w-full sm:max-w-[566px] border border-[#363636] rounded-[20px] hover:border-secondary transition-all duration-300"
              href={link.link}
            >
              <div className="bg-[#151515] gap-[clamp(20px,3vw,40px)] rounded-[inherit] p-[clamp(30px,4vw,60px)] flex flex-col items-center">
                <div className="p-[clamp(20px,3vw,40px)] rounded-[100px] bg-secondary">
                  <Image src={link.icon} alt="inst" className="w-[clamp(50px,5vw,85px)] h-[clamp(50px,5vw,85px)]" />
                </div>
                <h4 className="font-semibold text-[clamp(20px,2.5vw,36px)]">{link.text}</h4>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Contacts;
