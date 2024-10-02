import React from "react";
import ImageComp from "../Image";

interface CardCoverProps {
  title?: string;
  children: React.ReactNode;
  button?: React.ReactElement;
  image?: string;
}
const CardCover = ({ children, button, image, title }: CardCoverProps) => {
  return (
    <div
      className="flex flex-col gap-4 rounded-xl p-6"
      style={{
        boxShadow: "0px 1px 2px 0px #1018280F, 0px 1px 3px 0px #1018281A",
      }}
    >
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold text-app-gray-500">{title}</p>
        {image && <ImageComp image={image} />}
      </div>
      {children}
      <div className="flex justify-end">{button}</div>
    </div>
  );
};

export default CardCover;
