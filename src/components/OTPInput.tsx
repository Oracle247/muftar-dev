import React, { useState, useRef } from "react";

interface OTPInputProps {
  length: number;
  onChange: (otp: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ length, onChange }) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { value } = e.target;
    const newOtp = [...otp];
    newOtp[index] = value.slice(value.length - 1);
    setOtp(newOtp);
    onChange(newOtp.join(""));

    // Focus next input
    if (value && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex space-x-4">
      {Array(length)
        .fill(0)
        .map((_, i) => (
          <input
            key={i}
            type="text"
            maxLength={1}
            value={otp[i]}
            onChange={(e) => handleChange(e, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            ref={(ref) => (inputs.current[i] = ref)}
            className="border-app-blue-100 text-app-blue-100 h-20 w-20 rounded-lg border-2 text-center text-5xl font-medium focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        ))}
    </div>
  );
};

export default OTPInput;
