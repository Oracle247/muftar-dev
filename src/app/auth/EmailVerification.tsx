import React from "react";
import { FormInput } from "../../components/Input";
import ImageComp from "../../components/Image";
import ActionBtn from "../../components/ActionBtn";
import { Link, useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton";

const EmailVerification = () => {
  const navigate = useNavigate();
  const email = sessionStorage.getItem("muftar-email");
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
        <form className="mb-8 w-full">
          <ActionBtn
            text="Enter code manually"
            className="mb-4"
            onClick={() => navigate("/email-code")}
          />
        </form>
        {/* <p className="mb-8 text-sm text-app-gray-200">
          Didn’t receive the email?{" "}
          <span className="text-app-blue-100 cursor-pointer font-semibold">
            Click to resend
          </span>
        </p> */}
        <BackButton path="/register" text="Back to sign up" />
      </div>
    </div>
  );
};

export default EmailVerification;
