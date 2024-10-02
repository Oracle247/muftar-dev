import FileInputButton from "../../components/FileUpload";
import ActionBtn from "../../components/ActionBtn";
import { Error, FormInput, FormSelect } from "../../components/Input";
import Modal from "../../components/Modal";
import React, { useState } from "react";
import { useFormik } from "formik";
import { handleFormData, handleResponse } from "../../helpers/helperFunction";
import { useIdVerifcationMutation } from "../../api/authApiSlice";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useGetProfileQuery } from "src/api/profileSlice";
import { setCredentials } from "src/features/auth/authSlice";
import useAuth from "src/hooks/useAuth";
import { setIdValidated } from "src/features/dashboards/dashboardSlice";
import ImageComp from "src/components/Image";

interface IdVerifcationProps {
  id_number: string;
  id_front: File | null;
  id_back: File | null;
  id_type: string;
}

interface VerificationProps {
  id: string;
  closeHandler: () => void;
}

const IdVerifcation = ({ id, closeHandler }: VerificationProps) => {
  const dispatch = useDispatch();
  const { tokens, user } = useAuth();
  const { data } = useGetProfileQuery(user?.id);

  const handleFrontIDChange = (file: File | null) => {
    Formik.setFieldValue("id_front", file);
  };

  const handleBackIDChange = (file: File | null) => {
    Formik.setFieldValue("id_back", file);
  };

  const [idVerifcation, idVerificationResult] = useIdVerifcationMutation();

  const handleRequest = async (value: IdVerifcationProps) => {
    const values = { ...value, user_id: id };
    const formData = handleFormData(values);

    try {
      const verificationResponse = await idVerifcation(formData).unwrap();
      handleResponse(verificationResponse);
      if (
        verificationResponse.status === "success" ||
        verificationResponse.message === "ID verification successful"
      ) {
        dispatch(
          setIdValidated({
            validated: true,
          }),
        );
        dispatch(
          setCredentials({
            token: tokens,
            data: { ...data?.data?.user, id_submitted: "1" },
          }),
        );
      }
    } catch (error: any) {
      handleResponse(error?.data);
    }
  };

  const Formik = useFormik({
    initialValues: {
      id_number: "",
      id_front: null,
      id_back: null,
      id_type: "Drivers license",
    },
    validationSchema: Yup.object({
      id_number: Yup.string().required("Enter id number"),
      id_front: Yup.mixed().required("Upload ID front page"),
      id_back: Yup.mixed().required("Upload ID back page"),
    }),
    onSubmit: (values: IdVerifcationProps) => {
      handleRequest(values);
    },
  });

  return (
    <div
      className="h-[550px] min-w-[436px] overflow-y-auto rounded-lg bg-white p-6 no-scrollbar 2xl:h-[710px]"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="justify-beween relative flex flex-none items-center pb-5">
        <p className="text-xl font-semibold leading-[30px] text-app-gray-200">
          ID Verification
        </p>
        <ImageComp
          image="/images/close-search.svg"
          styles="flex justify-end cursor-pointer absolute right-[0.5rem]"
          handleClick={closeHandler}
        />
      </div>
      {/* <p className="mb-6 text-xl font-semibold leading-[30px] text-app-gray-200">
        ID Verification
      </p> */}
      <form className="flex flex-col gap-6" onSubmit={Formik.handleSubmit}>
        <div className="w-full">
          <FormSelect
            name="ID Type"
            options={[{ value: "Drivers License", label: "Drivers License" }]}
          />
        </div>
        <div className="w-full">
          <FormInput
            name="Drivers license number"
            placeholder="0273664531"
            type="text"
            id="id_number"
            onChange={Formik.handleChange}
            value={Formik.values.id_number}
            onBlur={Formik.handleBlur}
            // disabled={idVerificationResult.isLoading}
            error={Formik.errors.id_number}
            touched={Formik.touched.id_number}
          />
        </div>
        <div className="flex w-full flex-col gap-4">
          <label className="text-base font-medium text-app-gray-200">
            Upload The Front
          </label>
          <FileInputButton onFileChange={handleFrontIDChange} />
          {Formik.errors.id_front && Formik.touched.id_front ? (
            <Error error={Formik.errors.id_front} />
          ) : null}
        </div>
        <div className="flex w-full flex-col gap-4">
          <label className="text-base font-medium text-app-gray-200">
            Upload The Back
          </label>
          <FileInputButton onFileChange={handleBackIDChange} />
          {Formik.errors.id_back && Formik.touched.id_back ? (
            <Error error={Formik.errors.id_back} />
          ) : null}
        </div>
        <ActionBtn
          text={idVerificationResult?.isLoading ? "Saving..." : "Save"}
          className="mb-4"
          type="submit"
          // onClick={() => navigate("/email-verification")}
        />
      </form>
    </div>
  );
};

export default IdVerifcation;
