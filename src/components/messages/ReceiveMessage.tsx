import React from "react";

interface ReceiveMessageProps {
  message: string;
  time: string;
}

const ReceiveMessage = ({ message, time }: ReceiveMessageProps) => {
  return (
    <div className="flex max-w-[308px] text-white">
      <div className="flex flex-col space-x-6 rounded-xl bg-[#F2F4F7] px-3 py-2 text-app-gray-300">
        <span className="text-base">{message}</span>
        <span className="flex justify-end text-[10px] text-app-gray-200">
          {time}
        </span>
      </div>
    </div>
  );
};

export default ReceiveMessage;
