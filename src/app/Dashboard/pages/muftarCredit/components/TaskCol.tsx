import DailyTaskCard from "./DailyTaskCard";
import CardCover from "./CardCover";

const TaskCol = () => {
  return (
    <CardCover>
      <div className="flex w-full flex-col gap-6 rounded-2xl bg-white p-6">
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-semibold text-muftar-gray-800">
            Daily Tasks
          </span>
          <span className="text-base text-muftar-gray-600">
            Action-based challenges to engage users (80 credit per completion -
            user does not get reward unless all tasks are completed)
          </span>
        </div>
        <div className="flex w-full flex-col gap-4">
          <DailyTaskCard title="login" />
          <DailyTaskCard title="Refer a friend" />
          <DailyTaskCard title="Answer a poll" />
          <DailyTaskCard title="Send a message" />
        </div>
      </div>
    </CardCover>
  );
};

export default TaskCol;
