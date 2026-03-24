import React from "react";

export const Pink = ({ children }) => (
  <span className="text-[#f259ba]">{children}</span>
);

const Title = ({ children, maxWidth, className }) => {
  return (
    <h2
      className={`font-[800] italic text-[clamp(35px,6vw,96px)] ${className || ""}`}
      style={{ maxWidth: maxWidth ? `${maxWidth}px` : undefined }}
    >
      {children}
    </h2>
  );
};

export default Title;
