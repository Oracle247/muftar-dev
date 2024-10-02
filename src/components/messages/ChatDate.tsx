import React from "react";

interface ChatDateProps {
  date: string;
}

const ChatDate = ({ date }: ChatDateProps) => {
  return (
    <div className="flex justify-center border-b border-t border-app-border">
      <span className="py-3 text-xs font-medium text-[#98A2B3]">{date}</span>
    </div>
  );
};

export default ChatDate;
