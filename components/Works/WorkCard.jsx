import Image from "next/image";
import Link from "next/link";

const categoryLabels = {
  landing: "Односторінковий",
  shop: "Інтернет-магазин",
  multipage: "Багатосторінковий",
  mobile: "Мобільний додаток",
};

const WorkCard = ({ title, category, image, link }) => {
  return (
    <Link href={link || "#"} target="_blank" rel="noopener noreferrer">
      <div className="bg-white flex flex-col gap-[clamp(15px,2vw,30px)] h-[clamp(400px,40vw,590px)] overflow-hidden pb-[clamp(15px,2vw,30px)] pt-[clamp(10px,1.5vw,20px)] px-[clamp(10px,1.5vw,20px)] rounded-[20px] cursor-pointer hover:bg-secondary transition-all duration-200">
        {/* Картинка */}
        <div className="relative flex-1 rounded-[10px] overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        {/* Текст */}
        <p className="font-semibold text-[#151515] text-[clamp(20px,2.5vw,32px)] leading-[1.2]">
          {title}
        </p>
        <p className="font-medium text-[#151515] text-[clamp(14px,1.2vw,16px)]">
          {categoryLabels[category] || category}
        </p>
      </div>
    </Link>
  );
};

export default WorkCard;