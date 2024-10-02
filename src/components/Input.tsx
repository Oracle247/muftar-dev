import React, { ChangeEvent, ReactNode } from "react";

interface ErrorProps {
  error: string;
}

export const Error = ({ error }: ErrorProps) => {
  return <p className="text-sm text-app-error">{error}</p>;
};

interface FormInputProps {
  error?: string | undefined;
  touched?: boolean | undefined;
  name?: string;
  id?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  style?: string;
  type?: "text" | "number" | "date" | "password" | "email";
  value?: string;
  placeholder?: string;
  labelStyle?: string;
  required?: boolean;
  disabled?: boolean;
  header?: boolean;
  description?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  name,
  id,
  onChange,
  style,
  type,
  value,
  placeholder,
  labelStyle,
  required,
  disabled,
  error,
  touched,
  description,
  header = true,
}) => {
  return (
    <div>
      {header && (
        <label
          htmlFor={id}
          className={`${labelStyle} mb-2 block text-sm font-medium text-app-gray-200`}
        >
          {name}
        </label>
      )}
      <input
        id={id}
        name={id}
        type={type}
        className={`${style} ${error && touched ? "border-2 border-app-error" : "border-1 border-[#D0D5DD]"} block w-full rounded-lg border bg-white px-3.5 py-2.5 text-app-gray-300 placeholder:text-base placeholder:font-normal placeholder:text-app-gray-placeholder focus:ring-1 focus:ring-[#3A54B4]`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
      />
      {description && (
        <p className="mt-1.5 text-sm text-muftar-gray-600">{description}</p>
      )}
      {error && touched ? <Error error={error} /> : null}
    </div>
  );
};

interface FormTextAreaProps {
  error?: string | undefined;
  touched?: boolean | undefined;
  name?: string;
  id: string;
  onChange?: any;
  style?: string;
  value?: string;
  placeholder?: string;
  labelStyle?: string;
  wordsLimit?: string;
  header?: boolean;
  height?: string;
}

export const FormTextArea: React.FC<FormTextAreaProps> = ({
  name,
  id,
  onChange,
  style,
  value,
  placeholder,
  labelStyle,
  wordsLimit,
  error,
  touched,
  header = true,
  height = "h-[300px]",
}) => {
  return (
    <div>
      {header && (
        <label
          htmlFor={id}
          className={`${labelStyle} mb-2 flex w-full items-center justify-between text-sm text-app-gray-300 focus:ring-1 focus:ring-[#3A54B4] 2xl:text-base`}
        >
          <p>{name}</p>
          <p className="text-[#29020266]">{wordsLimit}</p>
        </label>
      )}
      <textarea
        id={id}
        name={id}
        rows={4}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${style} ${height} ${error && touched ? "border-2 border-app-error" : "border-1 border-app-gray-1100"} w-full resize-none rounded-lg border bg-white px-3.5 py-3 placeholder:text-base placeholder:text-app-gray-placeholder`}
      ></textarea>
      {error && touched ? <Error error={error} /> : null}
    </div>
  );
};

interface Option {
  value: any;
  label: string;
}

interface FormSelectProps {
  options: Option[];
  optionsLabel?: string;
  error?: string | undefined;
  touched?: boolean | undefined;
  name?: string;
  id?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLSelectElement>) => void;
  style?: string;
  value?: string;
  labelStyle?: string;
  required?: boolean;
  disabled?: boolean;
}

export const FormSelect: React.FC<FormSelectProps> = ({
  options,
  optionsLabel,
  name,
  id,
  onChange,
  style,
  value,
  labelStyle,
  required,
  disabled,
  error,
  touched,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className={`${labelStyle} mb-2 block text-sm font-medium text-app-gray-200`}
      >
        {name}
      </label>

      <div className="relative w-full">
        <img
          src="/images/select-icon.svg"
          className="absolute bottom-[1rem] right-[1rem]"
          alt="icon"
        />
        <select
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className={`${style} ${error && touched ? "border-2 border-app-error" : "border-1 border-[#D0D5DD]"} block w-full rounded-lg border bg-white px-3.5 py-2.5 text-app-gray-300 focus:ring-1 focus:ring-[#3A54B4]`}
        >
          {/* <option selected>{optionsLabel}</option> */}
          {options?.map((option: any, index) => (
            <option
              selected={index === 0}
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {/* {error && touched ? <Error error={error} /> : null} */}
    </div>
  );
};

interface FileInputButtonProps {
  onFileChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FileInputButton: React.FC<FileInputButtonProps> = ({
  onFileChange,
}) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleDivClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className="flex cursor-pointer flex-col items-center gap-4 rounded-xl border border-[#EAECF0] px-6 py-4"
      onClick={handleDivClick}
    >
      <img
        src="/images/upload-icon.svg"
        alt="Upload Icon"
        className="h-10 w-10"
      />
      <div className="flex flex-col items-center gap-1">
        <p className="text-sm font-semibold text-[#6941C6]">
          Click to upload{" "}
          <span className="font-normal text-app-gray-200">
            or drag and drop
          </span>
        </p>
        <p className="text-xs leading-[18px] text-app-gray-200">
          SVG, PNG, JPG or GIF (max. 800x400px)
        </p>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={onFileChange}
      />
    </div>
  );
};

interface RadioProps {
  label?: string;
  value?: string;
  checked: boolean;
  onChange?: () => void;
}

export const CustomRadioButton = ({
  label,
  value,
  checked,
  onChange,
}: RadioProps) => {
  return (
    <label className="flex cursor-pointer">
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full border-4 ${
          checked
            ? "border-app-blue-100 bg-app-blue-100"
            : "border-gray-300 bg-app-gray-100"
        }`}
      >
        <span
          className={`h-2 w-2 rounded-full bg-white ${checked ? "" : "opacity-0"}`}
        ></span>
      </span>
      <span
        className={`text-base font-medium ${checked ? "text-app-blue-500" : "text-gray-700"}`}
      >
        {label}
      </span>
    </label>
  );
};

interface FormToggleProps {
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  label: string;
  id: string;
}

export const FormToggle = ({
  handleChange,
  checked,
  label,
  id,
}: FormToggleProps) => {
  return (
    <label className="inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        value=""
        className="peer sr-only"
        checked={checked}
        id={id}
        onChange={handleChange}
      />
      <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full"></div>
      <span className="ms-3 text-base font-medium text-muftar-gray-700">
        {label}
      </span>
    </label>
  );
};

interface FormCheckBoxProps {
  checked?: boolean;
  name?: string;
}
export const FormCheckBox = ({ checked = true, name }: FormCheckBoxProps) => {
  return (
    <div className="flex items-center">
      <input
        checked={checked}
        id="checked-checkbox"
        type="checkbox"
        value=""
        className="h-4 w-4 rounded border-app-blue-100 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
      />
      <label
        htmlFor="checked-checkbox"
        className="ms-2 text-sm font-medium text-muftar-gray-700"
      >
        {name}
      </label>
    </div>
  );
};
