import React from "react";
import { FormInput } from "../../components/Input";
import ImageComp from "../../components/Image";
import ActionBtn from "../../components/ActionBtn";
import { Link, useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useResetPasswordEmailMutation } from "../../api/authApiSlice";
import {
  handleFormData,
  handleResponse,
  timeOutRedirect,
} from "../../helpers/helperFunction";
import Loader from "../../components/Loader";

interface ForgetPasswordProps {
  email: string;
}

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [reset, resetResult] = useResetPasswordEmailMutation();

  const handleRequest = async (value: ForgetPasswordProps) => {
    const formData = value;
    try {
      const resetResponse = await reset(formData).unwrap();
      handleResponse(resetResponse);
      if (
        resetResponse.status === "success" ||
        resetResponse.message === "Reset Password link sent to your emaily"
      ) {
        sessionStorage.setItem("muftar-forgetPassword-email", value?.email);
        timeOutRedirect("/confirm-mail");
      }
    } catch (error: any) {
      handleResponse(error?.data);
    }
  };

  const Formik = useFormik<ForgetPasswordProps>({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Enter email"),
    }),
    onSubmit: (values) => {
      handleRequest(values);
      // navigate("/dashboard");
    },
  });

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
            Forgot password?
          </p>
          <p className="text-center text-base text-app-gray-200">
            No worries, we’ll send you reset instructions.
          </p>
        </div>
        <form className="mb-8 w-full" onSubmit={Formik?.handleSubmit}>
          <div className="mb-6">
            <FormInput
              name="Email"
              placeholder="Enter your email"
              type="email"
              id="email"
              onChange={Formik.handleChange}
              value={Formik.values.email}
              onBlur={Formik.handleBlur}
              disabled={resetResult.isLoading}
              error={Formik.errors.email}
              touched={Formik.touched.email}
            />
          </div>
          <ActionBtn
            text={"Reset password"}
            loading={resetResult?.isLoading}
            disabled={resetResult?.isLoading}
            className="mb-4"
            // onClick={() => navigate("/confirm-mail")}
            type="submit"
          />
        </form>
        <BackButton path="/" text="Back to log in" />
      </div>
    </div>
  );
};

export default ForgetPassword;
