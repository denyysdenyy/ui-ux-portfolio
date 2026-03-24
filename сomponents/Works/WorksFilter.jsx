"use client";

const filters = [
  { label: "Всі", value: "all" },
  { label: "Односторінкові", value: "landing" },
  { label: "Інтернет-магазини", value: "shop" },
  { label: "Багатосторінкові", value: "multipage" },
  { label: "Мобільні додатки", value: "mobile" },
];

const WorksFilter = ({ active, onChange }) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onChange(filter.value)}
          className={`px-[clamp(16px,2vw,26px)] py-[clamp(10px,1.2vw,14px)] rounded-full text-[clamp(14px,1.5vw,20px)] font-semibold transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0
            ${active === filter.value
              ? "bg-secondary text-white"
              : "text-primary hover:text-secondary"
            }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default WorksFilter;