import React from "react";

const OpenPoll = () => {
  const options: string[] = ["Option 1", "Option 2", "Option 3", "Option 4"];

  return (
    <div className="border-app-gray-1100 flex w-full flex-col space-y-4 rounded-lg border p-6">
      {options.map((option, index) => (
        <div
          key={index}
          className="border-app-blue-100-10% flex w-full cursor-pointer items-center justify-center rounded-[40px] border py-2.5 text-app-blue-100"
        >
          <span>{option}</span>
        </div>
      ))}
    </div>
  );
};

export default OpenPoll;
