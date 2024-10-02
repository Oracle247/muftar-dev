import ImageComp from "../Image";
import React from "react";

interface SentImageProps {
  media: string;
  message: string;
  time: string;
}

const ReceiveImage = ({ media, message, time }: SentImageProps) => {
  return (
    <div className="flex justify-end">
      <div className="flex flex-col rounded-xl bg-[#F2F4F7] px-3 py-2">
        <ImageComp image={media} styles="mb-2" />
        <div className="flex items-end justify-between">
          <span className="max-w-[250px] text-app-gray-300">{message}</span>
          <span className="flex items-center justify-end gap-1 text-[10px] text-app-gray-200">
            {time}
            <ImageComp image="/images/read.svg" width={13} height={8} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReceiveImage;
