import React, { ReactHTMLElement } from "react";
import ImageComp from "./Image";

interface BadgeProps {
  text: string | React.ReactElement;
  background?: string;
  color?: string;
}

interface TagProps {
  text: React.ReactNode;
  background?: string;
  color?: string;
}

const Badge = ({
  text,
  background = "bg-app-blue-300",
  color = "text-app-blue-200",
}: BadgeProps) => {
  return (
    <div
      className={`${color} ${background} rounded-2xl px-2.5 py-0.5 text-sm font-medium`}
    >
      {text}
    </div>
  );
};

export default Badge;

export const Tag = ({
  text,
  background = "bg-muftar-gray-100",
  color = "text-muftar-gray-900",
}: TagProps) => {
  return (
    <button
      className={`${color} ${background} cursor-none rounded-full px-2.5 py-0.5 text-sm font-medium`}
    >
      {text}
    </button>
  );
};

export const StatusTag = ({
  text,
  background = "bg-muftar-gray-100",
  color = "text-muftar-gray-900",
}: TagProps) => {
  return (
    <button
      className={`${color} ${background} cursor-none rounded-full px-3 py-1 text-sm font-medium capitalize`}
    >
      {text}
    </button>
  );
};

interface ProgessStatusProps {
  text: string;
  background?: string;
  color?: string;
}

export const ProgessStatus = ({ text }: ProgessStatusProps) => {
  return (
    <button
      className={`${text.toLocaleLowerCase() === "planned" && "bg-muftar-blue-50 text-muftar-blue-700"} ${text.toLocaleLowerCase() === "in progress" && "bg-muftar-warning-50 text-muftar-warning-700"} ${text.toLocaleLowerCase() === "completed" && "bg-muftar-success-50 text-muftar-success-700"} flex items-center gap-1 rounded-2xl px-2 py-0.5 capitalize`}
    >
      {text.toLocaleLowerCase() === "planned" && (
        <ImageComp image="/images/planned-dot.svg" />
      )}
      {text.toLocaleLowerCase() === "in progress" && (
        <ImageComp image="/images/in-progress-dot.svg" />
      )}
      {text.toLocaleLowerCase() === "completed" && (
        <ImageComp image="/images/completed-dot.svg" />
      )}
      {text}
    </button>
  );
};

export const BrokerProgessStatus = ({ text }: ProgessStatusProps) => {
  return (
    <button
      className={`${text.toLocaleLowerCase() === "failed" && "bg-muftar-warning-50 text-muftar-warning-700"} ${text.toLocaleLowerCase() === "completed" && "bg-muftar-success-50 text-muftar-success-700"} flex items-center gap-1 rounded-2xl px-2 py-0.5 capitalize`}
    >
      {text.toLocaleLowerCase() === "failed" && (
        <ImageComp image="/images/in-progress-dot.svg" />
      )}
      {text.toLocaleLowerCase() === "completed" && (
        <ImageComp image="/images/completed-dot.svg" />
      )}
      {text}
    </button>
  );
};

export const CarrierProgessStatus = ({ text }: ProgessStatusProps) => {
  return (
    <button
      className={`${text.toLocaleLowerCase() === "in use" && "bg-muftar-blue-50 text-muftar-blue-700"} ${text.toLocaleLowerCase() === "available" && "bg-muftar-success-50 text-muftar-success-700"} flex items-center gap-1 rounded-2xl px-2 py-0.5 capitalize`}
    >
      {text.toLocaleLowerCase() === "in use" && (
        <ImageComp image="/images/in-use-dot.svg" />
      )}
      {text.toLocaleLowerCase() === "available" && (
        <ImageComp image="/images/completed-dot.svg" />
      )}
      {text}
    </button>
  );
};
