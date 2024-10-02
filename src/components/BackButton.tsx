import React from "react";
import { Link } from "react-router-dom";
import ImageComp from "./Image";

interface BackProps {
  path: string;
  text: string;
}

const BackButton = ({ path, text }: BackProps) => {
  return (
    <Link to={path}>
      <div className="flex items-center justify-center gap-2">
        <ImageComp
          image="/images/back-icon.svg"
          alt="icon"
          width={20}
          height={20}
        />
        <p className="text-sm font-semibold text-app-gray-200">{text}</p>
      </div>
    </Link>
  );
};

export default BackButton;
