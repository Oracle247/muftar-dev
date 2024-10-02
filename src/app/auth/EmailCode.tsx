import React from "react";
import ImageComp from "../../components/Image";
import ActionBtn from "../../components/ActionBtn";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton";
import OTPInput from "../../components/OTPInput";

import {
  useEmailVerificationMutation,
  useResendOTPMutation,
} from "../../api/authApiSlice";
import { handleResponse, timeOutRedirect } from "../../helpers/helperFunction";
import Loader from "../../components/Loader";

interface VerificationProps {
  otp: string;
  email: string;
}

const EmailCode = () => {
  const email = sessionStorage.getItem("muftar-email") || "";
  const navigate = useNavigate();

  const [otp, setOtp] = React.useState("");

  const handleOtpChange = (newOtp: string) => {
    setOtp(newOtp);
    // console.log("Current OTP:", newOtp);
  };

  const [verification, verificationResult] = useEmailVerificationMutation();
  const [resendOTP, resendOTPResult] = useResendOTPMutation();

  const handleResendOTPRequest = async () => {
    try {
      const otpRespnse = await resendOTP({
        email,
      }).unwrap();
      handleResponse(otpRespnse);
    } catch (error: any) {
      handleResponse(error?.data);
    }
  };

  const handleRequest = async (value: VerificationProps) => {
    // const formData = handleFormData(value);
    const formData = value;
    try {
      const verificationresponse = await verification(formData).unwrap();
      // console.log(verificationresponse);
      if (
        verificationresponse.status === "success" &&
        verificationresponse.message === "Email verified successfully"
      ) {
        sessionStorage.setItem(
          "muftar-email",
          verificationresponse?.data?.user?.email,
        );
        timeOutRedirect("/verify-sucessful");
      }
      handleResponse(verificationresponse);
      // navigate("/dashboard");
    } catch (error: any) {
      handleResponse(error?.data);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleRequest({ email, otp });
  };

  if (resendOTPResult?.isLoading) {
    return <Loader />;
  }

  return (
    <div className="mx-auto mt-24 w-full max-w-[360px]">
      <div className="flex w-full flex-col items-center">
        <ImageComp
          image="/images/email-icon.svg"
          alt="icon"
          width={56}
          height={56}
          styles="mb-6"
        />
        <div className="mb-8 flex flex-col items-center gap-3">
          <p className="text-3xl font-semibold text-app-gray-100">
            Check your email
          </p>
          <p className="text-center text-base text-app-gray-200">
            We sent a verification link to <br></br>
            <span className="font-semibold">{email}</span>
          </p>
        </div>
        <form className="mb-8 w-full" onSubmit={handleSubmit}>
          <div className="mb-8 flex w-full justify-center">
            <OTPInput length={4} onChange={handleOtpChange} />
          </div>
          <ActionBtn
            text={"Verify email"}
            className="mb-4"
            type="submit"
            loading={verificationResult?.isLoading}
            disabled={verificationResult?.isLoading}
            // disabled={otp.length < 4}
            // onClick={() => navigate("/verify-sucessful")}
          />
        </form>
        <p className="mb-8 text-sm text-app-gray-200">
          Didn’t receive the email?{" "}
          <span
            className="cursor-pointer font-semibold text-app-blue-100"
            onClick={handleResendOTPRequest}
          >
            Click to resend
          </span>
        </p>
        <BackButton path="/register" text="Back to sign up" />
      </div>
    </div>
  );
};

export default EmailCode;
