import { ActionBtnBase } from "../../../../../components/ActionBtn";
import ImageComp from "../../../../../components/Image";
import React from "react";

const SearchBox = () => {
  return (
    <div className="mx-auto flex w-full items-center gap-4 md:w-3/4">
      <div className="flex w-full gap-0">
        <div className="flex flex-grow items-center space-x-2 rounded-l-lg border border-app-border bg-white px-3.5 py-2.5">
          <ImageComp image="/images/contact-search.svg" />
          <input
            type="text"
            className="w-full text-xs text-app-gray-300 placeholder:text-base placeholder:text-app-gray-placeholder focus:outline-none"
            placeholder="Find your job in logistics industry"
          />
        </div>
        <div className="flex flex-grow items-center space-x-2 rounded-r-lg border border-app-border bg-white px-3.5 py-2.5">
          <ImageComp image="/images/location.svg" />
          <input
            type="text"
            className="w-full text-xs text-app-gray-300 placeholder:text-base placeholder:text-app-gray-placeholder focus:outline-none"
            placeholder="Find your job in logistics industry"
          />
        </div>
      </div>
      <ActionBtnBase text="Search job" />
    </div>
  );
};

export default SearchBox;
