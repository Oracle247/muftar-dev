import ImageComp from "../../../../../components/Image";

interface MonthsProps {
  months: string;
  checked: boolean;
}

const Months = ({ months, checked }: MonthsProps) => {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center gap-1">
        {/* <input type="radio" checked /> */}
        <label className="flex cursor-pointer">
          <input type="radio" checked={checked} className="hidden" />
          <span
            className={`flex h-6 w-6 items-center justify-center rounded-full border-4 ${
              checked
                ? "border-app-blue-100 bg-app-blue-100"
                : "border-muftar-gray-100 bg-white"
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full bg-white ${checked ? "" : "opacity-0"}`}
            ></span>
          </span>
        </label>
        <ImageComp image="/images/connector.svg" />
      </div>
      <span
        className={`text-sm font-semibold ${checked ? "text-app-blue-100" : "text-muftar-gray-700"}`}
      >
        {months}
      </span>
    </div>
  );
};

export default Months;
