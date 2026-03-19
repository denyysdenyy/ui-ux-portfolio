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
    <div className="flex items-center gap-2">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onChange(filter.value)}
          className={`px-[26px] py-[14px] rounded-full text-[20px] font-semibold transition-colors duration-200 cursor-pointer
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