// import Skeleton from "react-loading-skeleton";
import ImageComp from "../Image";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
interface CardProps {
  percentage?: string;
  title?: string;
  coin: boolean;
  amount: string;
  showPercentage: boolean;
}

const DashboardCard = ({
  percentage,
  title,
  coin,
  amount,
  showPercentage,
}: CardProps) => {
  return (
    <div
      className="flex min-w-[310px] flex-col gap-2 rounded-xl border border-[#EAECF0] bg-white p-6"
      style={{
        // boxShadow: "0px 1px 2px 0px #1018280F",
        boxShadow: "0px 1px 3px 0px #1018281A",
      }}
    >
      <p className="text-sm font-medium text-app-gray-200">{title}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {coin && (
            <ImageComp image="/images/coin.svg" width={32} height={32} />
          )}
          <p className="text-[30px] font-semibold leading-[38px] text-[#1D2939]">
            {amount}
          </p>
        </div>
        {showPercentage && (
          <div className="flex rounded-2xl bg-[#ECFDF3] px-2.5 py-[2px]">
            <ImageComp image="/images/arrow-up.svg" />
            <p className="text-sm font-medium text-[#027A48]">{`${percentage}%`}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardCard;
