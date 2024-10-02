import React from "react";
import AchievementCard from "./AchievementCard";
import CardCover from "./CardCover";

const AchievementsCol = () => {
  return (
    <CardCover>
      <div className="flex w-full flex-col gap-6 rounded-2xl bg-white p-6">
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-semibold text-muftar-gray-800">
            Achievements
          </span>
          <span className="text-base text-muftar-gray-600">
            Track user milestones and accomplishments.
          </span>
        </div>
        <div className="flex w-full flex-col gap-4">
          <AchievementCard title="10 Muftar Credits" />
          <AchievementCard title="15 Muftar Credits" />
          <AchievementCard title="50 Muftar Credits" />
          <AchievementCard title="10 Muftar Credits" />
          <AchievementCard title="20 Muftar Credits" />
          <AchievementCard title="50 Muftar Credits" />
        </div>
      </div>
    </CardCover>
  );
};

export default AchievementsCol;
