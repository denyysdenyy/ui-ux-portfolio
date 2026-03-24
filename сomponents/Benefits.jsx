"use client";
import React, { useRef, useState, useEffect } from "react";
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

const useScale = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setScale(0.42);
      else if (w < 768) setScale(0.55);
      else if (w < 1024) setScale(0.7);
      else setScale(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return scale;
};

const getPositionStyle = (pos, s) => ({
  x: pos * 18 * s,
  y: pos * -10 * s,
  rotate: pos * 4,
  scale: 1 - pos * 0.05,
  zIndex: TOTAL - pos,
});

const BenefitCard = ({ card, cardIndex, scrollYProgress, scale }) => {
  const inputRange = [];
  const xVals = [], yVals = [], rotateVals = [];
  const scaleVals = [], zVals = [];

  const addPoint = (progress, pos) => {
    if (inputRange.includes(progress)) return;
    const st = getPositionStyle(pos, scale);
    inputRange.push(progress);
    xVals.push(st.x);
    yVals.push(st.y);
    rotateVals.push(st.rotate);
    scaleVals.push(st.scale);
    zVals.push(st.zIndex);
  };

  const addArc = (progress) => {
    if (inputRange.includes(progress)) return;
    inputRange.push(progress);
    xVals.push(-280 * scale);
    yVals.push(-150 * scale);
    rotateVals.push(-18);
    scaleVals.push(0.82);
    zVals.push(TOTAL + 1);
  };

  addPoint(0, cardIndex);

  for (let j = 0; j <= cardIndex; j++) {
    addPoint(j / TOTAL, cardIndex - j);
  }

  addArc((cardIndex + 0.5) / TOTAL);
  addPoint((cardIndex + 1) / TOTAL, TOTAL - 1);

  for (let j = cardIndex + 2; j <= TOTAL; j++) {
    addPoint(j / TOTAL, TOTAL - 1 - (j - cardIndex - 1));
  }

  addPoint(1, cardIndex);

  const x = useTransform(scrollYProgress, inputRange, xVals);
  const y = useTransform(scrollYProgress, inputRange, yVals);
  const rotate = useTransform(scrollYProgress, inputRange, rotateVals);
  const motionScale = useTransform(scrollYProgress, inputRange, scaleVals);
  const zIndex = useTransform(scrollYProgress, inputRange, zVals);

  return (
    <motion.div
      style={{
        x, y, rotate, scale: motionScale, zIndex,
        opacity: 1,
        position: "absolute",
        top: 0,
        left: 0,
      }}
      className="border-[#363636] bg-[#151515] rounded-[20px] border-2 w-full p-[clamp(25px,4vw,60px)]"
    >
      <div className="bg-secondary p-[clamp(16px,2.5vw,32.5px)] inline-flex rounded-full mb-[clamp(20px,3vw,40px)]">
        <Image src={card.svg} alt={card.alt} />
      </div>
      <h3 className="text-[clamp(22px,3.2vw,43px)] font-semibold">{card.text}</h3>
    </motion.div>
  );
};

const Benefits = () => {
  const containerRef = useRef(null);
  const scale = useScale();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const cardWidth = Math.round(700 * scale);
  const cardHeight = Math.round(500 * scale);
  const containerHeight = Math.round(700 * scale);

  return (
    <section ref={containerRef} style={{ height: `calc(100vh + ${TOTAL * 50}vh)` }}>
      <div className="sticky top-0 h-screen flex items-center">
        <Container>
          <div
            className="flex flex-col lg:flex-row justify-between items-center relative gap-[clamp(30px,4vw,0px)]"
            style={{ height: `${containerHeight}px` }}
          >
            <Title maxWidth={580}><Pink>Чому клієнти</Pink> обирають мене</Title>

            <div className="relative shrink-0" style={{ width: `${cardWidth}px`, height: `${cardHeight}px` }}>
              {cards.map((card, index) => (
                <BenefitCard
                  key={card.id}
                  card={card}
                  cardIndex={index}
                  scrollYProgress={scrollYProgress}
                  scale={scale}
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
