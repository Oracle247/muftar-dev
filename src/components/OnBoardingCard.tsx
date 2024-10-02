import React from "react";
import ImageComp from "./Image";

interface CardProps {
  title: string;
  subtitle?: string;
  image: string;
  percentage: string;
  children: React.ReactNode;
  style?: string;
}

const OnBoardingCard = ({
  title,
  subtitle,
  percentage,
  image,
  children,
  style,
}: CardProps) => {
  return (
    <div
      className="xs:p-10 max-w-[500px] rounded-lg bg-white p-4"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="mb-10">
        <p
          className={`${subtitle && "mb-2"} text-2xl font-semibold leading-[30px] text-app-gray-100`}
        >
          {title}
        </p>
        <p className="text-base text-app-gray-300">{subtitle}</p>
      </div>
      <ImageComp image={image} styles="rounded-xl mb-10" />
      <div className="mb-10 w-full">
        <div className="mb-2 h-2 w-full rounded-lg bg-[#EAECF0]">
          <div className={`${style} bg-app-blue-100 h-full rounded-lg`}></div>
        </div>
        <p className="flex justify-end text-sm font-medium text-app-gray-300">
          {`${percentage}`}
        </p>
      </div>
      {children}
    </div>
  );
};

export default OnBoardingCard;
