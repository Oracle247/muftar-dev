import React from "react";
import { FormInput } from "src/components/Input";
import ImageComp from "src/components/Image";
import ActionBtn from "src/components/ActionBtn";
import { Link, useNavigate } from "react-router-dom";
import BackButton from "src/components/BackButton";

const ConfrimMail = () => {
  const navigate = useNavigate();
  const email = sessionStorage.getItem("muftar-forgetPassword-email");
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
            We sent a password reset link to <br></br>
            <span className="font-semibold">{email}</span>
          </p>
        </div>
        <form className="mb-8 w-full">
          <ActionBtn
            text="Open email app"
            className="mb-4"
            // onClick={() => navigate("/new-password")}
          />
        </form>
        <p className="mb-8 text-sm text-app-gray-200">
          Didn’t receive the email?
          <Link to="/forget-password">
            {" "}
            <span className="cursor-pointer font-semibold text-app-blue-100">
              Click to resend
            </span>
          </Link>
        </p>
        <BackButton path="/login" text="Back to log in" />
      </div>
    </div>
  );
};

export default ConfrimMail;
