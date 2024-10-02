import React, { useState } from "react";
import { ActionBtnSecondary } from "../../../../../components/ActionBtn";
import ImageComp from "../../../../../components/Image";

interface FilterTabProps {
  title: string;
  openModal: () => void;
}

const FilterTab = ({ title, openModal }: FilterTabProps) => {
  const [activeFilter, setActiveFilter] = useState<string>("latest");
  const [showFilterMenu, setShowFilterMenu] = useState<Boolean>(false);

  const handleFilter = (value: string) => {
    setActiveFilter(value.toLocaleLowerCase());
  };
  const filterMenu: string[] = [
    "Latest",
    "New Activity",
    "Oldest",
    "Popular",
    "Likes",
    "Alphabetically",
  ];
  return (
    <div className="mb-[27px] flex w-full items-center justify-between">
      <span className="font-smeibold text-app-3xl text-app-gray-400">
        {title}
      </span>
      <div className="relative flex items-center gap-6">
        <div className="flex cursor-pointer items-center gap-2.5">
          <span
            className="text-lg font-semibold capitalize text-app-gray-400"
            onClick={() => setShowFilterMenu(!showFilterMenu)}
          >
            {activeFilter}
          </span>
          <ImageComp image="/images/arrow-down.svg" styles="" />
        </div>
        <ActionBtnSecondary text="New Post" onClick={() => openModal()} />
        {showFilterMenu && (
          <div className="absolute top-[3rem] w-full max-w-[320px] rounded-lg border border-app-border bg-white p-1.5 shadow-custom-shadow-100">
            <ul className="flex flex-col space-y-0.5">
              {filterMenu.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleFilter(item)}
                  className={`${item?.toLocaleLowerCase() === activeFilter ? "bg-app-gray-700" : "bg-white"} flex cursor-pointer items-center justify-between rounded-md px-2 py-2.5 text-base font-medium text-app-gray-100 transition-colors hover:bg-app-gray-700`}
                >
                  {item}
                  {item?.toLocaleLowerCase() === activeFilter && (
                    <ImageComp image="/images/mark.svg" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterTab;
