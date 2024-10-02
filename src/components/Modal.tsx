import React from "react";

interface ModalProps {
  closeModal?: () => void;
  isOpen?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const Modal = ({ isOpen, closeModal, children, className }: ModalProps) => {
  return (
    <div
      className={`${isOpen ? "fixed" : "hidden"} left-0 top-0 z-50 h-screen w-full bg-[#00000080] ${className}`}
      onClick={closeModal}
    >
      <div className={`h-full w-full ${className}`}>{children}</div>
    </div>
  );
};

export default Modal;
