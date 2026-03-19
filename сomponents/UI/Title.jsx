import React from "react";

const Title = ({ title, pinkWord, maxWidth }) => {
  return (
    <h2 className={"font-[800] text-[96px]"} style={{maxWidth:`${maxWidth}px`}}>
      <span className="text-[#f259ba]">{pinkWord}</span> {title}
    </h2>
  );
};

export default Title;
