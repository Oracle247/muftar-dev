import React from "react";

interface ScaleProps {
  baseBackground: string;
  secondaryBackground: string;
  count?: string;
}

const Scale = ({ baseBackground, secondaryBackground, count }: ScaleProps) => {
  return (
    <div className="flex w-full items-center gap-3 py-2.5">
      <div className={`h-2 w-full rounded-lg ${baseBackground}`}>
        <div
          className={`h-full w-[70%] rounded-lg ${secondaryBackground}`}
        ></div>
      </div>
      <p className="text-lg font-medium text-app-gray-300">{count}</p>
    </div>
  );
};

export default Scale;
