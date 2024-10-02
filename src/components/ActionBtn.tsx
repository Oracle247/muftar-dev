import React from "react";
import ImageComp from "./Image";

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: string;
  type?: "button" | "submit" | "reset";
  maxWidth?: string;
  reverse?: boolean;
  loading?: boolean;
}

const ActionBtn = ({
  text,
  onClick,
  disabled,
  className,
  icon,
  type = "button",
  loading,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-[#3A54B4] ${className} flex w-full justify-center gap-3 rounded-lg py-2.5 text-base font-semibold text-white`}
      type={type}
    >
      {icon && <ImageComp image={icon} alt="icon" />}
      {text}
      {loading && (
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline h-5 w-5 animate-spin fill-blue-600 text-gray-200"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </button>
  );
};

export const ActionBtnSecondary = ({
  text,
  onClick,
  disabled,
  className,
  icon,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-[#3A54B4] ${className} flex justify-center gap-3 rounded-lg px-[18px] py-2.5 text-base font-semibold text-white`}
      type={type}
    >
      {icon && <ImageComp image={icon} alt="icon" />}
      {text}
    </button>
  );
};

export const ActionBtnBase = ({
  text,
  onClick,
  disabled,
  className,
  icon,
  type = "button",
  maxWidth,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} text-nowrap rounded-lg bg-[#3A54B4] px-4 py-2.5 text-base font-semibold text-white`}
      type={type}
    >
      {text}
    </button>
  );
};

export const ActionGoogleBtn = ({
  text,
  onClick,
  disabled,
  className,
  icon,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} flex w-full justify-center gap-3 text-nowrap rounded-lg border border-[#D0D5DD] bg-transparent px-4 py-2.5 text-base font-semibold text-app-gray-300`}
      type={type}
    >
      {icon && <ImageComp image={icon} alt="icon" width={24} height={24} />}
      {text}
    </button>
  );
};

export const CustomButton = ({
  text,
  onClick,
  disabled,
  className,
  loading,
  icon,
  type = "button",
  reverse,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} flex items-center justify-center gap-3 text-nowrap rounded-lg border border-[#D0D5DD] px-4 py-2.5 text-sm font-semibold`}
      type={type}
    >
      {icon && <ImageComp image={icon} alt="icon" />}
      {text}
      {loading && (
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline h-5 w-5 animate-spin fill-blue-600 text-gray-200"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </button>
  );
};
export const CustomButtonReverse = ({
  text,
  onClick,
  disabled,
  className,
  icon,
  type = "button",
  reverse,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} flex items-center justify-center gap-3 text-nowrap rounded-lg border border-[#D0D5DD] px-4 py-2.5 text-sm font-semibold`}
      type={type}
    >
      {text}
      {icon && <ImageComp image={icon} alt="icon" />}
    </button>
  );
};
// export const ActionBtnBase = ({ text, onClick, disabled, height, width }) => {
// 	return (
// 		<button
// 			onClick={onClick}
// 			disabled={disabled}
// 			className="text-4 flex cursor-pointer items-center justify-center rounded-lg border border-gray-200 bg-white font-normal text-gray-700 transition-all hover:border-[#080250] hover:bg-white hover:text-[#080250]"
// 			style={{ height, width }}>
// 			{text}
// 		</button>
// 	);
// };

// export const ActionBtnSecondary = ({
// 	text,
// 	onClick,
// 	disabled,
// 	width,
// 	height,
// }) => {
// 	return (
// 		<button
// 			onClick={onClick}
// 			disabled={disabled}
// 			className="text-4 flex cursor-pointer items-center justify-center rounded-lg bg-primary-blue-500 font-normal text-white transition-all hover:border hover:border-[#080250] hover:bg-white hover:text-[#080250]"
// 			style={{ height, width }}>
// 			{text}
// 		</button>
// 	);
// };

export default ActionBtn;
