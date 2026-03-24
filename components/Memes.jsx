"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import Container from "./Container";
import Title, { Pink } from "./UI/Title";
import Button from "./UI/Button";
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
    video: "/memes/happykid.mp4",
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
  const videoRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const changeVideo = useCallback((index) => {
    const video = videoRef.current;
    if (!video) return;
    const newSrc = cards[index].video;
    if (video.src.endsWith(newSrc)) return;
    video.src = newSrc;
    video.load();
    video.play();
  }, []);

  useEffect(() => {
    changeVideo(activeIndex);
  }, [activeIndex, changeVideo]);

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
          <div className="flex flex-col md:flex-row-reverse md:gap-[90px] gap-[40px]">
            <div className="flex flex-col gap-[clamp(30px,4vw,60px)] min-w-0 flex-1">
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
                    <div className="max-w-[595px] flex flex-col gap-[clamp(24px,3.5vw,54px)]">
                      <h3 className="font-semibold text-[clamp(28px,3.5vw,48px)]">
                        {card.title}
                      </h3>
                      <p className="font-medium text-[clamp(18px,2vw,28px)]">
                        {card.subtitle}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <video
              ref={videoRef}
              className="rounded-[25px] object-cover w-full md:w-[400px] h-[clamp(284px,40vw,627px)] shrink-0 self-center"
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              src={cards[0].video}
            />
          </div>

          <div className="flex justify-center mt-[clamp(30px,4vw,60px)]">
            <Button />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Memes;
