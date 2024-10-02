import ImageComp from "../Image";
import React from "react";

interface SentImageProps {
  media: string;
  message: string;
  time: string;
}
const SentImage = ({ media, message, time }: SentImageProps) => {
  return (
    <div className="flex justify-end">
      <div className="flex flex-col rounded-xl bg-app-blue-100 px-3 py-2">
        <ImageComp image={media} styles="mb-2" />
        <div className="flex items-end justify-between">
          <span className="max-w-[250px] text-white">{message}</span>
          <span className="flex items-center justify-end gap-1 text-[10px] text-white">
            {time}
            <ImageComp image="/images/read.svg" width={13} height={8} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SentImage;
