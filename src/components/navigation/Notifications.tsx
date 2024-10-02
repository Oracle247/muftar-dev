import { CustomButton } from "../ActionBtn";
import ImageComp from "../Image";
import Notification from "./Notification";

interface NotificationsProps {
  handleClose: () => void;
}

const Notifications = ({ handleClose }: NotificationsProps) => {
  return (
    <div className="shadow-custom-shadow-3xl w-[560px] rounded-2xl bg-white">
      <div className="flex items-center justify-between border-b border-muftar-gray-200 px-8 py-4">
        <div className="flex items-center gap-3">
          <span className="text-xl font-semibold text-muftar-gray-900">
            User Notifications
          </span>
          <span className="rounded bg-muftar-gray-100 px-3 py-1 text-muftar-gray-700">
            3
          </span>
        </div>
        <div className="flex items-center gap-6">
          <ImageComp image="/images/expand.svg" styles="cursor-pointer" />
          <ImageComp
            image="/images/close-square.svg"
            styles="cursor-pointer"
            handleClick={() => handleClose()}
          />
        </div>
      </div>
      <div className="scroller max-h-[560px] overflow-y-auto 2xl:max-h-[660px]">
        <div className="flex flex-col">
          <Notification
            pinned={true}
            last={false}
            text="A new shipment has been created and assigned to your organization. Please review the details and ensure all necessary preparations are made."
          />
          <Notification
            pinned={false}
            last={false}
            text="A new shipment has been created and assigned to your organization. Please review the details and ensure all necessary preparations are made."
          />
          <Notification
            pinned={false}
            last={true}
            text="A new shipment has been created and assigned to your organization. Please review the details and ensure all necessary preparations are made."
          />
        </div>
        <div className="flex justify-center py-4">
          <CustomButton
            text="View more"
            className="border-muftar-gray-300 border bg-white text-muftar-gray-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
