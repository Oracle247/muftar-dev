import ImageComp from "../../../../../components/Image";
import React from "react";

const TrendCard = () => {
  return (
    <div className="flex items-center gap-4">
      <ImageComp image="/images/feed-avatar.svg" />
      <div className="flex flex-col">
        <span className="text-xl font-semibold leading-[30px] text-app-gray-300">
          Site Performance update
        </span>
        <span className="text-base text-app-gray-200">Joseph Emmanuel</span>
      </div>
    </div>
  );
};

export default TrendCard;
