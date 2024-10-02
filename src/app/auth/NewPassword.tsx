import React from "react";
import { FormInput } from "../../components/Input";
import ImageComp from "../../components/Image";
import ActionBtn from "../../components/ActionBtn";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import BackButton from "../../components/BackButton";
import { useResetPasswordMutation } from "../../api/authApiSlice";
import { handleResponse, timeOutRedirect } from "../../helpers/helperFunction";
import { useFormik } from "formik";
import * as Yup from "yup";
import Loader from "../../components/Loader";

interface ForgetPasswordProps {
  password: string;
  password_confirmation: string;
}

const NewPassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  const [reset, resetResult] = useResetPasswordMutation();

  const handleRequest = async (value: ForgetPasswordProps) => {
    const formData = { ...value, token, email };
    try {
      const resetResponse = await reset(formData).unwrap();
      handleResponse(resetResponse);
      if (
        resetResponse.status === "success" ||
        resetResponse.message === "Reset Password link sent to your emaily"
      ) {
        timeOutRedirect("/reset-successful");
      }
    } catch (error: any) {
      handleResponse(error?.data);
    }
  };

  const Formik = useFormik<ForgetPasswordProps>({
    initialValues: {
      password: "",
      password_confirmation: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required("Enter password")
        .min(8, "Password must be at least 8 characters long"),
      // .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      // .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      // .matches(/[0-9]/, "Password must contain at least one number")
      // .matches(
      //   /[@$!%*?&]/,
      //   "Password must contain at least one special character",
      // ),
      password_confirmation: Yup.string()
        .required("Enter password confirmation")
        .oneOf([Yup.ref("password"), ""], "Passwords must match"),
    }),
    onSubmit: (values) => {
      console.log(values);
      handleRequest(values);
    },
  });

  // if (resetResult?.isLoading) {
  //   return <Loader />;
  // }

  return (
    <div className="mx-auto mt-24 w-full max-w-[360px]">
      <div className="flex w-full flex-col items-center">
        <ImageComp
          image="/images/password-icon.svg"
          alt="icon"
          width={56}
          height={56}
          styles="mb-6"
        />
        <div className="mb-8 flex flex-col items-center gap-3">
          <p className="text-3xl font-semibold text-app-gray-100">
            Set new password
          </p>
          <p className="text-center text-base text-app-gray-200">
            Your new password must be different to previously used passwords.
          </p>
        </div>
        <form className="mb-8 w-full" onSubmit={Formik?.handleSubmit}>
          <div className="mb-5">
            <FormInput
              name="Password"
              placeholder="••••••••"
              type="password"
              id="password"
              onChange={Formik.handleChange}
              value={Formik.values.password}
              onBlur={Formik.handleBlur}
              disabled={resetResult.isLoading}
              error={Formik.errors.password}
              touched={Formik.touched.password}
            />
            <p className="mt-1.5 text-sm text-app-gray-200">
              Must be at least 8 characters.
            </p>
          </div>
          <div className="mb-6">
            <FormInput
              name="Confirm Password"
              placeholder="••••••••"
              type="password"
              id="password_confirmation"
              onChange={Formik.handleChange}
              value={Formik.values.password_confirmation}
              onBlur={Formik.handleBlur}
              disabled={resetResult.isLoading}
              error={Formik.errors.password_confirmation}
              touched={Formik.touched.password_confirmation}
            />
          </div>
          <ActionBtn
            text={resetResult?.isLoading ? "Resetting..." : "Reset password"}
            className="mb-4"
            type="submit"
            // onClick={() => navigate("/reset-successful")}
          />
        </form>
        <BackButton path="/login" text="Back to log in" />
      </div>
    </div>
  );
};

export default NewPassword;
