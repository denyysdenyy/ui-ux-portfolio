import React from "react";
import Link from "next/link";
const Button = () => {
  return (
    <Link
      href="#contacts"
      className="bg-secondary inline-flex py-[clamp(18px,2vw,32px)] px-[clamp(30px,4vw,60.5px)] text-[clamp(16px,2vw,32px)] font-[600] rounded-[100px] border-[2px] transition-all duration-300 border-secondary hover:bg-transparent hover:text-secondary"
    >
      Обговорити проект
    </Link>
  );
};

export default Button;
