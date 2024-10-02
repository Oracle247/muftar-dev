import React from "react";
import ImageComp from "../../../../../components/Image";

interface PollOptionProps {
  optionText: string;
  percentage: string;
}

const PollOption = ({ optionText, percentage }: PollOptionProps) => {
  return (
    <div className="relative flex items-center justify-between overflow-hidden rounded-[40px] px-4 py-2">
      <div
        className="bg-app-blue-400 absolute inset-0 rounded-[40px] transition-transform"
        style={{ width: `${percentage}%` }}
      ></div>
      <div className="z-10 flex items-center space-x-4">
        <span className="text-base font-semibold text-app-gray-300">
          {optionText}
        </span>
        <ImageComp image="/images/check.svg" />
      </div>
      <span className="z-10 text-base text-app-blue-100">{percentage}%</span>
    </div>
  );
};

export default PollOption;
