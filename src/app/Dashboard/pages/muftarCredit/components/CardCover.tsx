import React from "react";

interface CardCoverProps {
  children: React.ReactNode;
}
const CardCover = ({ children }: CardCoverProps) => {
  return <div className="flex flex-col gap-4 rounded-xl">{children}</div>;
};

export default CardCover;
