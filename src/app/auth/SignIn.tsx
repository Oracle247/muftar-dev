import { useEffect, useState } from "react";
import { FormInput } from "../../components/Input";
import ActionBtn, { ActionGoogleBtn } from "../../components/ActionBtn";
import { Link, useNavigate } from "react-router-dom";
import AuthWrapper from "../../components/AuthWrapper";
import ImageComp from "../../components/Image";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  handleFormData,
  handleResponse,
  timeOutRedirect,
} from "../../helpers/helperFunction";
import { useLoginMutation } from "../../api/authApiSlice";
import axios from "axios";
import Loader from "../../components/Loader";
import { setCredentials } from "../../features/auth/authSlice";
import {
  setBoardingCredentials,
  setIdValidated,
} from "../../features/dashboards/dashboardSlice";
import { useDispatch } from "react-redux";

interface SignInProps {
  email: string;
  password: string;
}

const SignIn = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const [login, loginResult] = useLoginMutation();

  // const googleSigup = useGoogleSignUpQuery({});
  // const googleSigupHandler = () => {
  //   window.location.href = googleSigup?.currentData?.data?.url;
  // };

  const handleGoogleLogin = async () => {
    try {
      // Make a GET request to the backend URL to get the Google login URL
      const response = await axios.get(
        "http://muftar.lexjon.com/api/auth/login/google",
      );
      const googleLoginUrl = response?.data?.data?.url;
      // console.log(googleLoginUrl);
      // Assume the backend responds with the URL in 'url' field

      // Redirect the user to the Google login URL
      window.location.href = googleLoginUrl;
    } catch (error) {
      console.error("Error fetching the Google login URL:", error);
    }
  };

  const handleRequest = async (value: SignInProps) => {
    // const formData = handleFormData(value);
    const formData = value;
    try {
      const loginResponse = await login(formData).unwrap();
      handleResponse(loginResponse);
      if (
        loginResponse.status === "success" ||
        loginResponse.message === "Login successful"
      ) {
        localStorage.setItem("muftar-token", loginResponse?.token);
        timeOutRedirect("/dashboard");
        dispatch(
          setCredentials({
            data: loginResponse?.data?.user,
            token: loginResponse?.token,
          }),
        );
        dispatch(
          setBoardingCredentials({
            skip: loginResponse?.data?.user?.onboarding_skipped,
            complete: loginResponse?.data?.user?.onboarding_completed,
          }),
        );
        dispatch(
          setIdValidated({
            validated: loginResponse?.data?.user?.id_submitted === "1",
          }),
        );
      }
      if (
        loginResponse.status === "error" ||
        loginResponse?.message === "kindly Submit your ID for Verification"
      ) {
      }
    } catch (error: any) {
      if (
        error?.data?.message ===
        "Email not verified. Check your Email for verification OTP"
      ) {
        sessionStorage.setItem("muftar-email", value?.email);
        timeOutRedirect("/email-verification");
      }
      handleResponse(error?.data);
    }
  };

  const Formik = useFormik<SignInProps>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Enter email"),
      password: Yup.string().required("Enter password"),
    }),
    onSubmit: (values) => {
      if (rememberMe) {
        localStorage.setItem("muftar-email", values.email);
        localStorage.setItem("muftar-password", values.password);
        localStorage.setItem("muftar-rememberMe", "true");
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.setItem("muftar-rememberMe", "false");
      }
      handleRequest(values);
      // navigate("/dashboard");
    },
  });

  useEffect(() => {
    const rememberMe = localStorage.getItem("muftar-rememberMe") === "true";
    if (rememberMe) {
      Formik.setFieldValue("email", localStorage.getItem("muftar-email") || "");
      Formik.setFieldValue(
        "password",
        localStorage.getItem("muftar-password") || "",
      );
      setRememberMe(true);
    }
  }, []);
  return (
    <AuthWrapper styles="bg-login-bg">
      <div className="w-full px-4 md:w-3/4 md:px-0 lg:w-1/2">
        <ImageComp image="/images/logo.svg" />
        <div className="pt-[80px]">
          <div className="flex flex-col gap-3 pb-8">
            <p className="leaidng-[44px] text-4xl font-semibold text-app-gray-100">
              Login
            </p>
            <p className="text-base font-normal text-app-gray-200">
              Welcome back! Please enter your details.
            </p>
          </div>
          <form onSubmit={Formik?.handleSubmit}>
            <div className="mb-5">
              <FormInput
                name="Email"
                placeholder="Enter your email"
                type="email"
                id="email"
                onChange={Formik.handleChange}
                value={Formik.values.email}
                onBlur={Formik.handleBlur}
                disabled={loginResult.isLoading}
                error={Formik.errors.email}
                touched={Formik.touched.email}
              />
            </div>
            <div className="mb-6">
              <FormInput
                name="Password"
                placeholder="••••••••"
                type="password"
                id="password"
                onChange={Formik.handleChange}
                value={Formik.values.password}
                onBlur={Formik.handleBlur}
                disabled={loginResult.isLoading}
                error={Formik.errors.password}
                touched={Formik.touched.password}
              />
            </div>
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <p className="text-sm font-medium text-app-gray-300">
                  Remember for 30 days
                </p>
              </div>
              <Link
                to="/forget-password"
                className="cursor-pointer text-sm font-semibold text-[#3A54B4]"
              >
                Forgot password
              </Link>
            </div>
            <ActionBtn
              text={"Sign in"}
              className="mb-4"
              type="submit"
              disabled={loginResult?.isLoading}
              loading={loginResult?.isLoading}
              // onClick={() => navigate("/dashboard")}
            />
            <ActionGoogleBtn
              text="Sign in with Google"
              icon="/images/google-icon.svg"
              className="mb-8"
              // onClick={googleSigupHandler}
              loading={loginResult?.isLoading}
              onClick={handleGoogleLogin}
            />
            <p className="text-center text-sm text-app-gray-200">
              Don’t have an account?
              <span className="cursor-pointer pl-1 font-semibold text-[#3A54B4]">
                <Link to="/register">Sign up</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default SignIn;
