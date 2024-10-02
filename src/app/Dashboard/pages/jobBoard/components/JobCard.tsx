import { CustomButton } from "../../../../../components/ActionBtn";
import Badge from "../../../../../components/Badge";
import ImageComp from "../../../../../components/Image";
import React from "react";

const JobCard = () => {
  return (
    <div className="border-muftar-gray-400 flex w-[460px] flex-col gap-4 rounded-2xl border bg-white p-6">
      <div className="flex w-full items-center justify-between">
        <span className="text-muftar-gray-600 text-base font-medium">
          Muftar
        </span>
        <span className="text-muftar-gray-700 text-base font-medium">
          4 days ago
        </span>
      </div>
      <span className="text-muftar-gray-800 text-xl font-semibold">
        UI/UX Designer Figma
      </span>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ImageComp image="/images/location.svg" />
          <span className="text-muftar-gray-500 text-base font-medium">
            Atlanta, Georgia, United States
          </span>
        </div>
        <Badge
          text={
            <div className="flex items-center gap-2">
              <ImageComp image="/images/job-dot.svg" />
              <span>Full time</span>
            </div>
          }
          background="bg-muftar-blue-light-50"
          color="text-muftar-blue-light-700"
        />
      </div>
      <div className="flex">
        <CustomButton
          text="Easily Apply"
          className="text-muftar-gray-700 bg-white"
        />
      </div>
    </div>
  );
};

export default JobCard;
