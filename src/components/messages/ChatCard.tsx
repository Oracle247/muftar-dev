import ImageComp from "../Image";
import React from "react";

interface ChatCardProps {
  online: boolean;
  name: string;
  lastMessage: string;
  lastSeen: string;
  unRead: number;
  onClick: () => void;
  image: string;
}

const ChatCard = ({
  online,
  name,
  lastMessage,
  lastSeen,
  unRead,
  onClick,
  image,
}: ChatCardProps) => {
  return (
    <li
      className="flex w-full cursor-pointer justify-between px-6 py-2 hover:bg-[#F2F4F7]"
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        <div className="relative">
          <ImageComp
            image={image}
            styles="rounded-full"
            width={56}
            height={56}
          />
          {online && (
            <ImageComp
              image="/images/online-indicator.svg"
              styles="rounded-full absolute right-[0.2rem] bottom-[0.3rem]"
              width={6}
              height={6}
            />
          )}
        </div>
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-app-gray-300">{name}</p>
            <div className="flex gap-1">
              <ImageComp image="/images/read.svg" />
              <p className="text-sm text-app-gray-placeholder">{lastMessage}</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-sm text-[#3A54B4]">{lastSeen}</p>

      <div
        className={`${unRead >= 1 ? "flex" : "hidden"} h-6 w-6 items-center justify-center rounded-full bg-app-blue-100 text-white`}
      >
        <span className="text-sm">{unRead}</span>
      </div>
    </li>
  );
};

export default ChatCard;
