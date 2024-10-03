import ImageComp from "../Image";
import React from "react";

interface SentMessageProps {
  message: string;
  time: string;
  seen: boolean;
}

const SentMessage = ({ message, time, seen }: SentMessageProps) => {
  return (
    <div className="flex justify-end text-white">
      <div className="flex max-w-[21rem] flex-col space-x-6 rounded-xl bg-app-blue-100 px-3 py-2 text-white">
        <span className="text-base">{message} </span>
        <span className="flex justify-end gap-1 text-[10px] text-white">
          {time}
          {seen && <ImageComp image="/images/read.svg" />}
        </span>
      </div>
    </div>
  );
};

export default SentMessage;
