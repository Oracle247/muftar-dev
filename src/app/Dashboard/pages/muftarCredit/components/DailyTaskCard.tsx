import ImageComp from "../../../../../components/Image";
import Scale from "../../../../../components/Scale";

interface DailyTaskCardProps {
  title: string;
}

const DailyTaskCard = ({ title }: DailyTaskCardProps) => {
  return (
    <div className="flex w-full items-start gap-2">
      <ImageComp image="/images/prize-badge.svg" />
      <div className="flex w-full flex-col gap-2">
        <p className="font-semibold text-app-gray-500">{title}</p>
        <p className="text-app-gray-200">
          Achieve on-time delivery for a certain number of shipments or maintain
          a high on-time delivery rate.
        </p>
        <Scale
          baseBackground="bg-muftar-gray-200"
          secondaryBackground="bg-app-blue-100"
          count="7/10"
        />
      </div>
    </div>
  );
};

export default DailyTaskCard;
