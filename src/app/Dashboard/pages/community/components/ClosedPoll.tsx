import React from "react";
import PollOption from "./PollOption";

interface PollOptions {
  percentage: string;
  optionText: string;
}

const ClosedPoll = () => {
  const filledOptions: PollOptions[] = [
    {
      optionText: "Option 1",
      percentage: "5",
    },
    {
      optionText: "Option 2",
      percentage: "10",
    },
    {
      optionText: "Option 3",
      percentage: "7",
    },
    {
      optionText: "Option 4",
      percentage: "77",
    },
  ];

  return (
    <div className="border-app-gray-1100 flex w-full flex-col space-y-4 rounded-lg border p-6">
      {filledOptions.map((item, index) => (
        <PollOption
          key={index}
          optionText={item?.optionText}
          percentage={item?.percentage}
        />
      ))}
      <span className="text-base text-app-gray-200">
        1,367 votes * Poll closed
      </span>
    </div>
  );
};

export default ClosedPoll;
