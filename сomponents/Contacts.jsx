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
        <div className="flex gap-[21px]">
          {links.map((link) => (
            <Link
              key={link.id}
              className="w-[100%] max-w-[566px] border border-[#363636] rounded-[20px] hover:border-secondary transition-all duration-300"
              href={link.link}
            >
              <div className="bg-[#151515]  gap-[40px] rounded-[inherit] p-[60px] flex flex-col items-center ">
                <div className="p-[40px] rounded-[100px] bg-secondary max-w-[165px]">
                  <Image src={link.icon} alt="inst" />
                </div>
                <h4 className=" font-semibold text-[36px]">{link.text}</h4>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Contacts;
