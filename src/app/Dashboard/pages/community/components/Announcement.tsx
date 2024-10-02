import ImageComp from "../../../../../components/Image";
import React from "react";

const Announcement = () => {
  return (
    <div className="flex items-center gap-3">
      <ImageComp image="/images/lightning.svg" />
      <span className="text-xl font-medium text-app-gray-300">
        Site Performance Update
      </span>
    </div>
  );
};

export default Announcement;
