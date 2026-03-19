"use client";
import React from "react";
import Link from "next/link";
import Container from "./Container";
import Title from "./UI/Title";
import { Swiper, SwiperSlide } from "swiper/react";


const cards = [
  {
    id: 0,
    title: "Без зайвих нервів",
    subtitle:
      "Я не граю в «хованки». Ти завжди знаєш, на якому етапі проєкт і коли чекати результат.",
    video: "/memes/cat.mp4",
  },
  {
    id: 1,
    title: "Дизайн, що працює",
    subtitle:
      "Не просто малюю картинки, а думаю, як твій клієнт буде клікати, гортати та купувати.",
    video: "/memes/cat.mp4",
  },
  {
    id: 2,
    title: "Логіка понад усе",
    subtitle:
      "Проєктую все так чітко, що навіть дідусь знайде кнопку «Купити» з першого разу.",
    video: "/memes/cat.mp4",
  },
  {
    id: 3,
    title: "Адаптивність — база",
    subtitle:
      "Твій сайт буде «літати» і на величезному моніторі, і на старенькому смартфоні.",
    video: "/memes/cat.mp4",
  },
  {
    id: 4,
    title: "Любов до деталей",
    subtitle: "Кожна кнопка, відступ та шрифт на своєму місці.",
    video: "/memes/cat.mp4",
  },
];

const Memes = () => {
  return (
    <section className="py-[80px] overflow-x-clip">
      <Container>
        <div className="flex gap-[90px] flex-row-reverse">
          <div className="flex flex-col gap-[60px] min-w-0 flex-1">
            <Title
              title={"Зі мною створювати цікаві рішення — "}
              pinkWord={"легше"}
            />

            <Swiper
              slidesPerView={1}
              spaceBetween={80}
              grabCursor={true}
              observer={true}
              observeParents={true}
              className="memes-swiper"
            >
              {cards.map((card) => (
                <SwiperSlide key={card.id}>
                  <div className="max-w-[595px] flex flex-col gap-[54px]">
                    <h4 className="font-semibold text-[48px]">{card.title}</h4>
                    <p className="font-medium text-[28px]">{card.subtitle}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <video
            className="rounded-[25px] object-cover h-[627px] w-[400px] shrink-0"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/memes/cat.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex justify-center mt-[60px]">
          <Link
            href="#contact"
            className="bg-secondary block py-[32px] px-[60.5px] text-[32px] font-[600] rounded-[100px] border-[2px] transition-all duration-300 border-secondary hover:bg-transparent hover:text-secondary"
          >
            Обговорити проєкт
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Memes;
