import React from "react";
import Badge from "../../../../../components/Badge";
import ImageComp from "../../../../../components/Image";

interface PollCard {
  children: React.ReactNode;
}

const PollCard = ({ children }: PollCard) => {
  return (
    <div className="flex w-full flex-grow flex-col">
      <div className="flex w-full flex-col gap-4 rounded-2xl bg-white p-6">
        <div className="flex items-start gap-4">
          <ImageComp image="/images/feed-avatar.svg" width={40} height={40} />
          <div className="flex flex-col gap-1">
            <span className="text-xl font-semibold leading-[30px] text-app-gray-400">
              Emmanuel Titan
            </span>
            <span className="forn-medium text-app-gray-200">27 mins ago</span>
          </div>
          <Badge text="Admin" />
        </div>
        <span className="text-app-3xl block font-semibold text-app-gray-400">
          How to monetize your skills ( find drivers easily and make money).
        </span>
        <div className="flex flex-col gap-2">
          <span className="block text-base text-app-gray-200">
            ed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium
          </span>
          <span className="block cursor-pointer text-sm font-semibold text-app-gray-200">
            See more
          </span>
        </div>
        {children}
        <div className="border-app-gray-1000 w-full border-t"></div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1">
              <ImageComp image="/images/thumbs.svg" styles="cursor-pointer" />
              <span className="text-sm text-app-gray-placeholder">Like</span>
            </div>
            <div className="flex items-center gap-1">
              <ImageComp image="/images/comment.svg" styles="cursor-pointer" />
              <span className="text-sm text-app-gray-placeholder">Comment</span>
            </div>
          </div>
          <span className="text-sm font-semibold text-app-gray-placeholder">
            1 Comment
          </span>
        </div>
      </div>
    </div>
  );
};

export default PollCard;
