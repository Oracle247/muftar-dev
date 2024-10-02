import ImageComp from "../../../../../components/Image";
import Scale from "../../../../../components/Scale";

interface AchievementCardProps {
  title: string;
}

const AchievementCard = ({ title }: AchievementCardProps) => {
  return (
    <div className="flex w-full items-start gap-2">
      <ImageComp image="/images/badge.svg" />
      <div className="flex w-full flex-col gap-2">
        <p className="font-semibold text-app-gray-500">20 Muftar Credits</p>
        <p className="text-app-gray-200">Complete your profile information.</p>
        <Scale
          baseBackground="bg-muftar-gray-200"
          secondaryBackground="bg-muftar-brown-100"
          count="7/10"
        />
      </div>
    </div>
  );
};

export default AchievementCard;
