import ImageComp from "../../components/Image";
import ActionBtn from "../../components/ActionBtn";
import { Link, useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton";

interface SignInProps {
  email: string;
  password: string;
}

const EmailVerifySuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto mt-24 w-full max-w-[360px]">
      <div className="flex w-full flex-col items-center">
        <ImageComp
          image="/images/reset-success.svg"
          alt="icon"
          width={56}
          height={56}
          styles="mb-6"
        />
        <div className="mb-8 flex flex-col items-center gap-3">
          <p className="text-3xl font-semibold text-app-gray-100">
            Email verified
          </p>
          <p className="text-center text-base text-app-gray-200">
            Your email has been successfully verified. Click below to log in
            magically.
          </p>
        </div>
        <form className="mb-8 w-full">
          <ActionBtn
            text="Continue"
            className="mb-4"
            onClick={() => navigate("/")}
          />
        </form>
        <BackButton path="/" text="Back to log in" />
      </div>
    </div>
  );
};

export default EmailVerifySuccess;
