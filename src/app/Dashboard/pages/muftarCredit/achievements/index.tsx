import NavBar from "../../../../../components/navigation/NavBar";
import CreditCard from "../components/CreditCard";
import AchievementsCol from "../components/AchievementsCol";
import TaskCol from "../components/TaskCol";
import { Skeleton } from "@mui/material";
import useAuth from "src/hooks/useAuth";
import { useGetWalletBalanceQuery } from "src/api/creditSlice";

const Achievements = () => {
  const { user } = useAuth();
  const { data: walletData, isLoading: walletIsLoading } =
    useGetWalletBalanceQuery(user?.id);
  return (
    <NavBar>
      <section className="w-full bg-muftar-pri-50">
        <section className="px-4 py-10 md:px-16">
          {walletIsLoading ? (
            <div className="mb-10 flex w-full items-center gap-6 overflow-x-scroll no-scrollbar md:justify-start">
              <Skeleton variant="rounded" width={421} height={114} />
              <Skeleton variant="rounded" width={421} height={114} />
              <Skeleton variant="rounded" width={421} height={114} />
            </div>
          ) : (
            <div className="mb-10 flex w-full items-center gap-6 overflow-x-scroll no-scrollbar md:justify-start">
              <CreditCard
                percentage="10"
                coin={true}
                title="Total Muftar Credits"
                amount={walletData?.data?.Credit_balance}
              />
              <CreditCard
                percentage="10"
                coin={true}
                title="Today Muftar Credits"
                amount={walletData?.data?.today_credits}
              />
              <CreditCard
                percentage="10"
                coin={false}
                title="Daily streak"
                amount="3 days"
              />
            </div>
          )}

          <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <AchievementsCol />
            <TaskCol />
          </div>
        </section>
      </section>
    </NavBar>
  );
};

export default Achievements;
