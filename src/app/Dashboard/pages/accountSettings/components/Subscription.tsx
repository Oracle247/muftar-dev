import { CustomButton } from "../../../../../components/ActionBtn";
import ImageComp from "../../../../../components/Image";

interface SubscriptionProps {
  SubscriptionBenefit: string[];
  currentPlan: boolean;
  title: string;
  plan: string;
  billing: string;
}

const Subscription = ({
  SubscriptionBenefit,
  currentPlan,
  title,
  plan,
  billing,
}: SubscriptionProps) => {
  return (
    <div className="shadow-custom-shadow-lg relative rounded-2xl border border-gray-200 px-8 py-10">
      {currentPlan && (
        <ImageComp
          image="/images/current-plan.svg"
          styles="absolute top-[-2rem] left-[50%]"
        />
      )}
      <div className="flex flex-col items-center gap-4">
        <p className="text-app-5xl text-center font-semibold text-muftar-gray-900">
          {title}
        </p>
        <div className="flex flex-col items-center gap-1">
          <p className="text-app-xl font-semibold text-muftar-gray-900">
            {plan}
          </p>
          <p className="text-base text-muftar-gray-600">{billing}</p>
        </div>
        <div className="flex flex-col gap-4 pb-10 pt-8">
          {SubscriptionBenefit?.map((sub, index: number) => (
            <div className="flex items-center gap-3" key={index}>
              <ImageComp image="/images/subscription-check.svg" />
              <span>{sub}</span>
            </div>
          ))}
        </div>
        {currentPlan ? (
          <div className="flex w-full flex-col gap-3">
            <CustomButton
              className="w-full border-none bg-[#E4E8F6] py-3 text-base font-semibold text-app-blue-100"
              text="Current Plan"
            />
            <CustomButton
              className="w-full border-none bg-white text-muftar-gray-600"
              text="Cancel Plan"
            />
          </div>
        ) : (
          <div className="flex w-full flex-col gap-3">
            <CustomButton
              className="w-full border-none bg-app-blue-100 py-3 text-base font-semibold text-white"
              text="Upgrade"
            />
            <CustomButton
              className="w-full border-none bg-white py-3"
              text="Chat to sales"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Subscription;
