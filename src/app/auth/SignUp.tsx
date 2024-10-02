import { FormInput, FormSelect } from "../../components/Input";
import FileInputButton from "../../components/FileUpload";
import ActionBtn, { ActionGoogleBtn } from "../../components/ActionBtn";
import { Link, useNavigate } from "react-router-dom";
import AuthWrapper from "../../components/AuthWrapper";
import ImageComp from "../../components/Image";
import Modal from "../../components/Modal";
import { useState } from "react";
import { useSignupMutation } from "../../api/authApiSlice";
import { handleResponse, timeOutRedirect } from "../../helpers/helperFunction";
import { useFormik } from "formik";
import * as Yup from "yup";
import Loader from "../../components/Loader";
import IdVerifcation from "./IdVerifcation";

interface SignUpProps {
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  password: string;
  password_confirmation: string;
}

const SignUp = () => {
  const navigate = useNavigate();

  const [register, registerResult] = useSignupMutation();

  const handleRequest = async (value: SignUpProps) => {
    // const formData = handleFormData(value);
    const formData = value;

    try {
      const registerResponse = await register(formData).unwrap();

      if (
        registerResponse.status === "success" &&
        registerResponse.message ===
          "Kindly check your Email for OTP to verify your Email"
      ) {
        sessionStorage.setItem(
          "muftar-email",
          registerResponse?.data?.user?.email,
        );

        timeOutRedirect("/email-verification");
      }
      handleResponse(registerResponse);
      // navigate("/dashboard");
    } catch (error: any) {
      handleResponse(error?.data);
      if (error?.data?.errors[0] === "The email has already been taken.") {
        timeOutRedirect("/login");
      }
    }
  };

  const Formik = useFormik<SignUpProps>({
    initialValues: {
      email: "",
      first_name: "",
      last_name: "",
      phone_number: "",
      password: "",
      password_confirmation: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Enter email"),
      first_name: Yup.string().required("Enter first name"),
      last_name: Yup.string().required("Enter last name"),
      phone_number: Yup.string().required("Enter phone number"),
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
      handleRequest(values);
      // navigate("/dashboard");
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      // console.log("Selected file:", files[0]);
    }
  };

  return (
    <AuthWrapper styles="bg-signup-bg">
      <div className="w-full px-4 md:w-3/4 md:px-0">
        <ImageComp image="/images/logo.svg" />
        <div className="pt-[80px]">
          <div className="flex flex-col gap-3 pb-8">
            <p className="leaidng-[44px] text-4xl font-semibold text-app-gray-100">
              Join the network
            </p>
            <p className="text-base font-normal text-app-gray-200">
              Be in complete control of your business with Muftar, used by
              100,000+ brokers and carriers.
            </p>
          </div>
          <form onSubmit={Formik?.handleSubmit}>
            <div className="mb-5 flex w-full flex-col gap-3 md:flex-row">
              <div className="w-full">
                <FormInput
                  name="First name"
                  placeholder="Enter your first name"
                  type="text"
                  id="first_name"
                  onChange={Formik.handleChange}
                  value={Formik.values.first_name}
                  onBlur={Formik.handleBlur}
                  disabled={registerResult.isLoading}
                  error={Formik.errors.first_name}
                  touched={Formik.touched.first_name}
                />
              </div>
              <div className="w-full">
                <FormInput
                  name="Last name"
                  placeholder="Enter your last name"
                  type="text"
                  id="last_name"
                  onChange={Formik.handleChange}
                  value={Formik.values.last_name}
                  onBlur={Formik.handleBlur}
                  disabled={registerResult.isLoading}
                  error={Formik.errors.last_name}
                  touched={Formik.touched.last_name}
                />
              </div>
            </div>
            <div className="mb-5 flex w-full flex-col gap-3 md:flex-row">
              <div className="w-full">
                <FormInput
                  name="Email"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  onChange={Formik.handleChange}
                  value={Formik.values.email}
                  onBlur={Formik.handleBlur}
                  disabled={registerResult.isLoading}
                  error={Formik.errors.email}
                  touched={Formik.touched.email}
                />
              </div>
              <div className="w-full">
                <FormInput
                  name="Phone number"
                  placeholder="Enter your phone number"
                  type="text"
                  id="phone_number"
                  onChange={Formik.handleChange}
                  value={Formik.values.phone_number}
                  onBlur={Formik.handleBlur}
                  disabled={registerResult.isLoading}
                  error={Formik.errors.phone_number}
                  touched={Formik.touched.phone_number}
                />
              </div>
            </div>
            <div className="mb-6 flex w-full flex-col gap-3 md:flex-row">
              <div className="w-full">
                <FormInput
                  name="Password"
                  placeholder="••••••••"
                  type="password"
                  id="password"
                  onChange={Formik.handleChange}
                  value={Formik.values.password}
                  onBlur={Formik.handleBlur}
                  disabled={registerResult.isLoading}
                  error={Formik.errors.password}
                  touched={Formik.touched.password}
                />
              </div>
              <div className="w-full">
                <FormInput
                  name="Confirm Password"
                  placeholder="••••••••"
                  type="password"
                  id="password_confirmation"
                  onChange={Formik.handleChange}
                  value={Formik.values.password_confirmation}
                  onBlur={Formik.handleBlur}
                  disabled={registerResult.isLoading}
                  error={Formik.errors.password_confirmation}
                  touched={Formik.touched.password_confirmation}
                />
              </div>
            </div>

            <ActionBtn
              text={"Create account"}
              className="mb-4"
              type="submit"
              disabled={registerResult.isLoading}
              loading={registerResult.isLoading}
            />
            <ActionGoogleBtn
              text="Sign up with Google"
              icon="/images/google-icon.svg"
              className="mb-8"
            />
            <p className="text-center text-sm text-app-gray-200">
              Already have an account?
              <span className="cursor-pointer pl-1 font-semibold text-[#3A54B4]">
                <Link to="/">Log in</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default SignUp;
