import { CustomButton } from "../ActionBtn";
import ImageComp from "../Image";

interface NotificationProps {
  pinned: boolean;
  last: boolean;
  text: string;
}

const Notification = ({ pinned, last, text }: NotificationProps) => {
  return (
    <div
      className={`flex items-start gap-4 ${!last && "border-b"} border-app-gray-1000 px-6 py-4`}
    >
      <ImageComp image="/images/circle-lightning.svg" styles="cursor-pointer" />
      <div className="flex flex-col">
        <span className="mb-2 text-base text-muftar-gray-900">{text}</span>
        <div className="border-muftar-gray-300 mb-5 flex max-w-[115px] items-center gap-2 rounded-3xl border p-0.5">
          <ImageComp image="/images/timer.svg" styles="cursor-pointer" />
          <span>3 hrs ago</span>
        </div>
        <div className="flex items-center gap-5">
          <CustomButton
            text="View"
            className="border-none bg-app-blue-100 text-white"
          />
          <CustomButton
            text="Mark as resolved"
            className="border-muftar-gray-300 border bg-white text-muftar-gray-700"
          />
          <div className="text-muftar-error-600 cursor-pointer px-3.5 py-2 text-sm font-semibold">
            Delete
          </div>
        </div>
      </div>
      <ImageComp
        image={`/images/${pinned ? "filled-pin" : "pin"}.svg`}
        styles="cursor-pointer"
      />
    </div>
  );
};

export default Notification;
