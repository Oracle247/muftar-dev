import { FormInput, FormToggle } from "src/components/Input";
import ImageComp from "src/components/Image";
import NavBar from "src/components/navigation/NavBar";
import { CustomButton } from "src/components/ActionBtn";
import Subscription from "./components/Subscription";
import {
  useGetProfileQuery,
  useNotificationPreferenceUpdateMutation,
  usePasswordUpdateMutation,
  useProfileUpdateMutation,
} from "src/api/profileSlice";
import {
  handleFormData,
  handleResponse,
  imageUrlMerger,
} from "src/helpers/helperFunction";
import { useFormik } from "formik";
import * as Yup from "yup";
import useAuth from "src/hooks/useAuth";
import { ChangeEvent, useState } from "react";
import ProfilePicUploader from "./components/ProfilePicUploader";
import {
  SubscriptionBenefit1,
  SubscriptionBenefit2,
  SubscriptionBenefit3,
} from "src/helpers/data";
import { Skeleton, Stack } from "@mui/material";

interface ProfileUpdateProps {
  first_name?: string;
  last_name?: string;
  address?: string;
  date_of_birth?: string;
  phone_number?: string;
  profile_pix?: File | null;
  email?: string;
}

interface PasswordProps {
  current_password?: string;
  new_password?: string;
  new_password_confirmation?: string;
}

interface NotificationPreferenceProps {
  sms_notification?: string;
  email_notification?: string;
  push_notification?: string;
}

const AccountSettings = () => {
  const { user } = useAuth();
  const { data, error, isLoading } = useGetProfileQuery(user?.id);
  const [profile, profileResult] = useProfileUpdateMutation();
  const [password, passwordResult] = usePasswordUpdateMutation();
  const [notification, notificationResult] =
    useNotificationPreferenceUpdateMutation();

  const handleRequest = async (
    value: ProfileUpdateProps,
    resetForm: () => void,
  ) => {
    const valueCopy = { ...value };
    if (!valueCopy.profile_pix) {
      delete valueCopy.profile_pix;
    }
    const formData = handleFormData(valueCopy);

    try {
      const profileResponse = await profile(formData).unwrap();
      handleResponse(profileResponse);
      if (
        profileResponse.status === "success" ||
        profileResponse.message === "Profile updated successfully"
      ) {
        resetForm();
        // Perform any additional actions here
      }
    } catch (error: any) {
      handleResponse(error?.data);
    }
  };

  const handlePasswordReset = async (
    value: PasswordProps,
    resetForm: () => void,
  ) => {
    const formData = handleFormData(value);
    // const formData = { value };
    try {
      const passwordResponse = await password(formData).unwrap();
      handleResponse(passwordResponse);
      if (
        passwordResponse.status === "success" ||
        passwordResponse.message === "Password changed successfully"
      ) {
        resetForm();
      }
    } catch (error: any) {
      handleResponse(error?.data);
    }
  };

  const handleNotificationRequest = async (
    value: NotificationPreferenceProps,
    resetForm: () => void,
  ) => {
    const formData = handleFormData(value);
    // const formData = { value };
    try {
      const notificationResponse = await notification(formData).unwrap();
      handleResponse(notificationResponse);
      if (
        notificationResponse.status === "success" ||
        notificationResponse.message === "Password changed successfully"
      ) {
        // resetForm();
      }
    } catch (error: any) {
      handleResponse(error?.data);
    }
  };

  const Formik = useFormik<ProfileUpdateProps>({
    initialValues: {
      first_name: data?.data?.user?.first_name,
      last_name: data?.data?.user?.last_name,
      email: data?.data?.user?.email,
      address: data?.data?.user?.address || "",
      date_of_birth: data?.data?.user?.date_of_birth || "",
      phone_number: data?.data?.user?.phone_number || "",
      profile_pix: null,
    },

    onSubmit: (values, { resetForm }) => {
      handleRequest(values, resetForm);
    },
  });

  const FormikPassword = useFormik<PasswordProps>({
    initialValues: {
      current_password: "",
      new_password: "",
      new_password_confirmation: "",
    },
    validationSchema: Yup.object({
      current_password: Yup.string().required("Enter password"),
      new_password: Yup.string()
        .required("Enter password")
        .min(8, "Password must be at least 8 characters long"),
      new_password_confirmation: Yup.string()
        .required("Enter password confirmation")
        .oneOf([Yup.ref("new_password"), ""], "Passwords must match"),
    }),
    onSubmit: (values, { resetForm }) => {
      handlePasswordReset(values, resetForm);
    },
  });

  const FormikNotification = useFormik<NotificationPreferenceProps>({
    initialValues: {
      sms_notification: "0",
      email_notification: "0",
      push_notification: "0",
    },
    onSubmit: (values, { resetForm }) => {
      handleNotificationRequest(values, resetForm);
    },
  });

  const [emailNotification, setEmailNotification] = useState<boolean>(false);
  const [smsNotification, setSmsNotification] = useState<boolean>(false);
  const [pushNotification, setPushNotification] = useState<boolean>(false);

  const handleEmailNotificationChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const isChecked = event.target.checked;
    setEmailNotification(isChecked);
    FormikNotification.setFieldValue(
      "email_notification",
      isChecked ? "1" : "0",
    );
  };

  const handleSmslNotificationChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const isChecked = event.target.checked;
    setSmsNotification(isChecked);
    FormikNotification.setFieldValue("sms_notification", isChecked ? "1" : "0");
  };

  const handlePushNotificationChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const isChecked = event.target.checked;
    setPushNotification(isChecked);
    FormikNotification.setFieldValue(
      "push_notification",
      isChecked ? "1" : "0",
    );
  };

  const handleImageChange = (file: File | null) => {
    Formik.setFieldValue("profile_pix", file);
  };

  return (
    <NavBar>
      <section className="bg-gray-50">
        <div className="px-4 py-6 md:px-16">
          <div className="mb-6 p-4 text-app-3xl font-semibold text-muftar-gray-800">
            Account Settings
          </div>
          <div className="mb-6 bg-white px-10">
            <div className="flex flex-col gap-x-[166px] border-b border-muftar-gray-300 py-6 md:flex-row">
              <p className="inset-0 flex-nowrap text-nowrap text-2xl font-medium text-muftar-gray-700">
                Profile Settings
              </p>
              <form className="w-full" onSubmit={Formik?.handleSubmit}>
                <div className="mb-8 flex flex-col gap-4">
                  <p className="text-lg font-medium text-muftar-gray-700">
                    Profile Picture
                  </p>
                  <div className="flex items-center gap-1">
                    {isLoading ? (
                      <Stack>
                        <Skeleton variant="circular" width={80} height={80} />
                      </Stack>
                    ) : Formik?.values?.profile_pix ? (
                      <ImageComp
                        image={URL.createObjectURL(Formik?.values?.profile_pix)}
                        width={80}
                        height={80}
                        styles="rounded-full object-cover h-20 w-20"
                      />
                    ) : (
                      <ImageComp
                        image={
                          (data?.data?.user?.profile_pix &&
                            imageUrlMerger(data?.data?.user?.profile_pix)) ||
                          "/images/avatar.svg"
                        }
                        width={80}
                        height={80}
                        styles="rounded-full object-cover h-20 w-20"
                      />
                    )}
                    <ProfilePicUploader onFileChange={handleImageChange} />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2">
                  <FormInput
                    name="First name"
                    placeholder="Joseph"
                    id="first_name"
                    value={Formik?.values?.first_name}
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                    disabled={true}
                    error={Formik.errors.first_name}
                    touched={Formik.touched.first_name}
                  />
                  <FormInput
                    name="Last name"
                    placeholder="Emmanuel"
                    id="last_name"
                    value={Formik?.values?.last_name}
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                    disabled={true}
                    error={Formik.errors.last_name}
                    touched={Formik.touched.last_name}
                  />
                  <FormInput
                    name="Email"
                    placeholder="emax@gmail.com"
                    id="email"
                    value={Formik?.values?.email}
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                    disabled={true}
                    error={Formik.errors.email}
                    touched={Formik.touched.email}
                  />
                  <FormInput
                    name="Phone number"
                    placeholder="00-222-2333"
                    id="phone_number"
                    value={Formik?.values?.phone_number}
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                    disabled={true}
                    error={Formik.errors.phone_number}
                    touched={Formik.touched.phone_number}
                  />
                  <FormInput
                    name="Address"
                    placeholder="No 26, Leo New York, U.S.A"
                    id="address"
                    value={Formik?.values?.address}
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                    error={Formik.errors.address}
                    touched={Formik.touched.address}
                  />
                  <FormInput
                    name="Date of Brith"
                    type="date"
                    placeholder="24/06/1992"
                    id="date_of_birth"
                    value={Formik?.values?.date_of_birth}
                    // value="2027-08-20"
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                    error={Formik.errors.date_of_birth}
                    touched={Formik.touched.date_of_birth}
                  />
                </div>
                <div className="flex justify-end px-4 pt-6">
                  <div className="flex items-center gap-4">
                    <CustomButton
                      text="Save Changes"
                      className="border-none bg-app-blue-100 text-white"
                      type="submit"
                      loading={profileResult?.isLoading}
                      disabled={profileResult?.isLoading}
                    />
                  </div>
                </div>
              </form>
            </div>
            <form
              onSubmit={FormikPassword?.handleSubmit}
              className="flex flex-col gap-x-[146px] border-b border-muftar-gray-300 py-6 md:flex-row"
            >
              <p className="inset-0 flex-nowrap text-nowrap text-2xl font-medium text-muftar-gray-700">
                Security Settings
              </p>
              <div className="w-full">
                <div className="grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2">
                  <FormInput
                    name="Current Password"
                    placeholder="••••••••"
                    type="password"
                    id="current_password"
                    value={FormikPassword?.values?.current_password}
                    onChange={FormikPassword.handleChange}
                    onBlur={FormikPassword.handleBlur}
                    error={FormikPassword?.errors?.current_password}
                    touched={FormikPassword?.touched?.current_password}
                  />
                  <FormInput
                    name="New Password"
                    placeholder="••••••••"
                    type="password"
                    id="new_password"
                    value={FormikPassword?.values?.new_password}
                    onChange={FormikPassword.handleChange}
                    onBlur={FormikPassword.handleBlur}
                    error={FormikPassword?.errors?.new_password}
                    touched={FormikPassword?.touched?.new_password}
                  />
                  <FormInput
                    name="Confirm New Password"
                    placeholder="••••••••"
                    type="password"
                    id="new_password_confirmation"
                    value={FormikPassword?.values?.new_password_confirmation}
                    onChange={FormikPassword.handleChange}
                    onBlur={FormikPassword.handleBlur}
                    error={FormikPassword?.errors?.new_password_confirmation}
                    touched={FormikPassword?.touched?.new_password_confirmation}
                  />
                </div>
                <div className="flex justify-end px-4 pt-6">
                  <div className="flex items-center gap-4">
                    <CustomButton
                      text="Save Changes"
                      className="border-none bg-app-blue-100 text-white"
                      type="submit"
                      loading={passwordResult?.isLoading}
                      disabled={passwordResult?.isLoading}
                    />
                  </div>
                </div>
              </div>
            </form>
            <form className="py-6" onSubmit={FormikNotification?.handleSubmit}>
              <div className="flex flex-col gap-x-[66px] md:flex-row">
                <p className="inset-0 flex-nowrap text-nowrap text-2xl font-medium text-muftar-gray-700">
                  Notification Preferences
                </p>
                <div className="w-full">
                  <div className="flex flex-col gap-8">
                    <FormToggle
                      label="Email Notifications"
                      handleChange={handleEmailNotificationChange} // Pass the function directly
                      checked={emailNotification}
                      id="email_notification"
                    />

                    <FormToggle
                      label="SMS Notifications"
                      id="sms_notification"
                      handleChange={handleSmslNotificationChange} // Pass the function directly
                      checked={smsNotification}
                    />
                    <FormToggle
                      label="Push Notifications"
                      id="push_notification"
                      handleChange={handlePushNotificationChange} // Pass the function directly
                      checked={pushNotification}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end px-4 pt-6">
                <div className="flex items-center gap-4">
                  {/* <CustomButton text="Cancel" className="bg-transparent" /> */}
                  <CustomButton
                    text="Save Changes"
                    type="submit"
                    className="border-none bg-app-blue-100 text-white"
                    loading={notificationResult?.isLoading}
                    disabled={notificationResult?.isLoading}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="mb-6 rounded-xl bg-white p-6 px-10">
            <p className="mb-6 text-xl font-semibold text-muftar-gray-800">
              Billing & Subscriptions
            </p>
            <div>
              <div className="mb-6 flex items-center justify-center">
                <div className="flex items-center gap-2 rounded-lg border border-muftar-border p-1.5">
                  <button className="cursor-pointer rounded-md px-3.5 py-2.5 text-base font-semibold text-app-blue-100 shadow-custom-shadow-sm">
                    Monthly billing
                  </button>
                  <button className="cursor-pointer rounded-md px-3.5 py-2.5 text-base font-semibold text-muftar-gray-700">
                    Annual billing
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Subscription
                  SubscriptionBenefit={SubscriptionBenefit1}
                  title="$0/mth"
                  plan="Free plan"
                  billing="Billed annually."
                  currentPlan={true}
                />
                <Subscription
                  SubscriptionBenefit={SubscriptionBenefit2}
                  title="$20/mth"
                  plan="Business plan"
                  billing="Billed annually."
                  currentPlan={false}
                />
                <Subscription
                  SubscriptionBenefit={SubscriptionBenefit3}
                  title="$40/mth"
                  plan="Enterprise plan"
                  billing="Billed annually."
                  currentPlan={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </NavBar>
  );
};

export default AccountSettings;
