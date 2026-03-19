"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleSwitch = (newLocale) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="ml-auto  relative">
      {/* Кнопка с текстом и стрелкой */}
      <button
        onClick={toggleOpen}
        className="group flex items-center gap-[10px] px-[20px] py-[10px] rounded-[100px] text-[18px] text-primary cursor-pointer hover:text-secondary transition-colors duration-200"
      >
        {locale === "ua" ? "Укр" : "Eng"}
        <svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
        >
          <path
            d="M1 1L7 7L13 1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Дропдаун список */}
      {isOpen && (
        <div className="absolute z-[3] right-0 top-full mt-1 flex flex-col bg-dark border  rounded-[20px] overflow-hidden">
          <button
            onClick={() => handleSwitch("ua")}
            className={`px-[20px] py-[10px] text-[18px] text-left cursor-pointer transition-colors duration-200 hover:text-secondary ${locale === "ua" ? "text-secondary" : "text-primary"}`}
          >
            Укр
          </button>
          <button
            onClick={() => handleSwitch("en")}
            className={`px-[20px] py-[10px] text-[18px] text-left cursor-pointer transition-colors duration-200 hover:text-secondary ${locale === "en" ? "text-secondary" : "text-primary"}`}
          >
            Eng
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
