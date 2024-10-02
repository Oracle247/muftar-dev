import React from "react";
import ImageComp from "./Image";

interface ModalCardHeaderProps {
  title: string;
  closeHandler?: () => void;
}

const ModalCardHeader = ({ title, closeHandler }: ModalCardHeaderProps) => {
  return (
    <div className="relative flex flex-none items-center justify-center border-b border-app-gray-bg py-5">
      <p className="mt-auto text-center text-2xl font-semibold text-app-gray-500">
        {title}
      </p>
      <ImageComp
        image="/images/close-search.svg"
        styles="flex justify-end cursor-pointer absolute right-[2rem]"
        handleClick={closeHandler}
      />
    </div>
  );
};

export default ModalCardHeader;
