"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Container from "./Container";
import Title, { Pink } from "./UI/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { useScroll, useMotionValueEvent } from "framer-motion";

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
    video: "/memes/catcountingmoney.mp4",
  },
  {
    id: 2,
    title: "Логіка понад усе",
    subtitle:
      "Проєктую все так чітко, що навіть дідусь знайде кнопку «Купити» з першого разу.",
    video: "/memes/rageMan.mp4",
  },
  {
    id: 3,
    title: "Адаптивність — база",
    subtitle:
      "Твій сайт буде «літати» і на величезному моніторі, і на старенькому смартфоні.",
    video: "/memes/happyKid.mp4",
  },
  {
    id: 4,
    title: "Любов до деталей",
    subtitle: "Кожна кнопка, відступ та шрифт на своєму місці.",
    video: "/memes/catwatching.mp4",
  },
];

const Memes = () => {
  const containerRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (!swiperInstance) return;
    const maxIndex = cards.length - 1;
    const index = Math.min(Math.round(progress * maxIndex), maxIndex);
    swiperInstance.slideTo(index);
    setActiveIndex(index);
  });

  return (
    <section
      ref={containerRef}
      style={{ height: `calc(100vh + ${(cards.length - 1) * 100}vh)` }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-x-clip">
        <Container>
          <div className="flex gap-[90px] flex-row-reverse">
            <div className="flex flex-col gap-[60px] min-w-0 flex-1">
              <Title>
                Зі мною створювати цікаві рішення — <Pink>легше</Pink>
              </Title>

              <Swiper
                slidesPerView={1}
                spaceBetween={80}
                allowTouchMove={false}
                speed={600}
                observer={true}
                observeParents={true}
                onSwiper={setSwiperInstance}
                className="memes-swiper"
              >
                {cards.map((card) => (
                  <SwiperSlide key={card.id}>
                    <div className="max-w-[595px] flex flex-col gap-[54px]">
                      <h4 className="font-semibold text-[48px]">
                        {card.title}
                      </h4>
                      <p className="font-medium text-[28px]">
                        {card.subtitle}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <video
              key={activeIndex}
              className="rounded-[25px] object-cover h-[627px] w-[400px] shrink-0"
              autoPlay
              loop
              muted
              playsInline
              src={cards[activeIndex].video}
            />
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
      </div>
    </section>
  );
};

export default Memes;
