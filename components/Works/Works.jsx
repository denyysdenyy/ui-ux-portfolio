"use client";

import { useState } from "react";
import WorkCard from "./WorkCard";
import WorksFilter from "./WorksFilter";
import Container from "../Container";

const ITEMS_PER_PAGE = 6;

const Works = ({ works = [] }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFilterChange = (filter) => {
    // Запускаем анимацию исчезновения
    setIsAnimating(true);

    setTimeout(() => {
      setActiveFilter(filter);
      setVisibleCount(ITEMS_PER_PAGE);
      // Запускаем анимацию появления
      setIsAnimating(false);
    }, 200);
  };

  const filtered = works.filter((work) =>
    activeFilter === "all" ? true : work.category === activeFilter,
  );

  const visible = filtered.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <section id="cases" className="bg-black py-[80px]">
      <Container>
        <div>
          {/* Заголовок + фильтры */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-[20px] mb-[clamp(30px,4vw,60px)]">
            <h2 className="font-extrabold italic text-[clamp(35px,5vw,72px)] text-primary leading-[0.9] tracking-[-1.44px]">
              Кейси
            </h2>
            <WorksFilter active={activeFilter} onChange={handleFilterChange} />
          </div>

          {/* Сетка карточек с анимацией */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[4px] gap-y-[20px] transition-opacity duration-200 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            {visible.map((work) => (
              <WorkCard key={work._id} {...work} />
            ))}
          </div>

          {/* Кнопка "Показати ще" */}
          {visibleCount < filtered.length && (
            <div className="flex justify-center mt-[60px]">
              <button
                onClick={handleShowMore}
                className="text-[clamp(20px,2.5vw,32px)] font-semibold text-primary/50 underline hover:text-primary transition-colors duration-200 cursor-pointer"
              >
                Показати ще
              </button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Works;
