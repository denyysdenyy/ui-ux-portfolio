"use client";
import React, { useRef } from "react";
import Title, { Pink } from "./UI/Title";
import Container from "./Container";
import Image from "next/image";
import starSvg from "../public/benefits/Star.svg";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
  { id: 0, svg: starSvg, alt: "", text: "Не зникаю з радаров і працюю над проєктом, поки ти не скажеш: «Вау, це воно!»." },
  { id: 1, svg: starSvg, alt: "", text: "Передаю чисті макети в Figma, які розробники обожнюють відкривати." },
  { id: 2, svg: starSvg, alt: "", text: "Дизайню інтерфейси, які ідеально лягають під великий палець." },
  { id: 3, svg: starSvg, alt: "", text: "Навіть на великих порталах твій користувач ніколи не заплутається." },
  { id: 4, svg: starSvg, alt: "", text: "Роблю шопінг приємним: логічна структура та мінімум зайвих кліків." },
];

const TOTAL = cards.length;

const getPositionStyle = (pos) => ({
  x: pos * 18,
  y: pos * -10,
  rotate: pos * 4,
  scale: 1 - pos * 0.05,
  zIndex: TOTAL - pos,
});

const BenefitCard = ({ card, cardIndex, scrollYProgress }) => {
  const inputRange = [];
  const xVals = [], yVals = [], rotateVals = [];
  const scaleVals = [], zVals = [];

  const addPoint = (progress, pos) => {
    // Не дублюємо однакові точки
    if (inputRange.includes(progress)) return;
    const s = getPositionStyle(pos);
    inputRange.push(progress);
    xVals.push(s.x);
    yVals.push(s.y);
    rotateVals.push(s.rotate);
    scaleVals.push(s.scale);
    zVals.push(s.zIndex);
  };

  const addArc = (progress) => {
    if (inputRange.includes(progress)) return;
    inputRange.push(progress);
    xVals.push(-280);
    yVals.push(-150);
    rotateVals.push(-18);
    scaleVals.push(0.82);
    zVals.push(TOTAL + 1);
  };

  // Явно починаємо з 0
  addPoint(0, cardIndex);

  // Фаза 1: картка рухається вперед поки виходять попередні
  for (let j = 0; j <= cardIndex; j++) {
    addPoint(j / TOTAL, cardIndex - j);
  }

  // Дуга — вихід
  addArc((cardIndex + 0.5) / TOTAL);

  // Приземлення ззаду
  addPoint((cardIndex + 1) / TOTAL, TOTAL - 1);

  // Фаза 2: знову рухається вперед поки виходять наступні
  for (let j = cardIndex + 2; j <= TOTAL; j++) {
    addPoint(j / TOTAL, TOTAL - 1 - (j - cardIndex - 1));
  }

  // Явно закінчуємо на 1
  addPoint(1, cardIndex);

  const x = useTransform(scrollYProgress, inputRange, xVals);
  const y = useTransform(scrollYProgress, inputRange, yVals);
  const rotate = useTransform(scrollYProgress, inputRange, rotateVals);
  const scale = useTransform(scrollYProgress, inputRange, scaleVals);
  const zIndex = useTransform(scrollYProgress, inputRange, zVals);

  return (
    <motion.div
      style={{
        x, y, rotate, scale, zIndex,
        opacity: 1, // статичний — useTransform не торкається
        position: "absolute",
        top: 0,
        left: 0,
      }}
      className="border-[#363636] bg-[#151515] rounded-[20px] border-2 w-[700px] p-[60px]"
    >
      <div className="bg-secondary p-[32.5px] inline-flex rounded-full mb-[40px]">
        <Image src={card.svg} alt={card.alt} />
      </div>
      <h3 className="text-[43px] font-semibold">{card.text}</h3>
    </motion.div>
  );
};

const Benefits = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} style={{ height: `calc(100vh + ${TOTAL * 50}vh)` }}>
      <div className="sticky top-0 h-screen flex items-center">
        <Container>
          <div
            className="flex justify-between items-center relative"
            style={{ height: "700px" }}
          >
            <Title maxWidth={580}><Pink>Чому</Pink> обирають мене</Title>

            <div className="relative" style={{ width: "700px", height: "500px" }}>
              {cards.map((card, index) => (
                <BenefitCard
                  key={card.id}
                  card={card}
                  cardIndex={index}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Benefits;