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
    <Link href={link || "#"} target="_blank">
      <div className="bg-white flex flex-col gap-[30px] h-[590px] overflow-hidden pb-[30px] pt-[20px] px-[20px] rounded-[20px] cursor-pointer hover:bg-secondary transition-all duration-200">
        {/* Картинка */}
        <div className="relative flex-1 rounded-[10px] overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        {/* Текст */}
        <p className="font-semibold text-[#151515] text-[32px] leading-[1.2]">
          {title}
        </p>
        <p className="font-medium text-[#151515] text-[16px]">
          {categoryLabels[category] || category}
        </p>
      </div>
    </Link>
  );
};

export default WorkCard;