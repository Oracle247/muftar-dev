import { useFormik } from "formik";
import { CustomButton } from "src/components/ActionBtn";
import { Error, FormInput } from "src/components/Input";
import FileInputButton from "src/components/FileUpload";
import { useCreateShipperMutation } from "src/api/shipperSlice";
import {
  handleFormData,
  handleResponse,
  timeOutRedirect,
} from "src/helpers/helperFunction";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface CreateShipperProps {
  company_name: string;
  EIN: string;
  state_of_formation: string;
  logo: File | null;
}

interface ParentProps {
  closeHandler: () => void;
}

const ShipperReceiver = ({ closeHandler }: ParentProps) => {
  const navigate = useNavigate();
  const handleFileChange = (file: File | null) => {
    Formik.setFieldValue("logo", file);
  };
  const [resetFile, setResetFile] = useState<boolean>(false);

  const [createShipper, createShipperResult] = useCreateShipperMutation();

  const handleRequest = async (
    value: CreateShipperProps,
    resetForm: () => void,
  ) => {
    const formData = handleFormData(value);

    try {
      const createShipperResponse = await createShipper(formData).unwrap();

      if (
        createShipperResponse.status === "success" &&
        createShipperResponse.message === "Organization created successfully"
      ) {
        setResetFile(true);
      }
      handleResponse(createShipperResponse);
      resetForm();
      closeHandler();
      navigate("/dashboard/organisation");
    } catch (error: any) {
      handleResponse(error?.data);
      if (error?.data?.errors[0] === "The email has already been taken.") {
        timeOutRedirect("/login");
      }
    }
  };

  const Formik = useFormik<CreateShipperProps>({
    initialValues: {
      company_name: "",
      EIN: "",
      state_of_formation: "",
      logo: null,
    },
    validationSchema: Yup.object({
      company_name: Yup.string().required("Enter company name"),
      EIN: Yup.string().required("Enter EIN"),
      state_of_formation: Yup.string().required("Enter state of formation"),
      logo: Yup.mixed().required("Upload logo"),
    }),
    onSubmit: (values, { resetForm }) => {
      handleRequest(values, resetForm);
    },
  });
  return (
    <form
      className="scoller flex max-h-[450px] flex-col gap-6 overflow-auto px-10 py-6"
      onSubmit={Formik?.handleSubmit}
    >
      <FormInput
        placeholder="Official name of the company."
        name="Company Name"
        id="company_name"
        onChange={Formik?.handleChange}
        value={Formik.values.company_name}
        onBlur={Formik.handleBlur}
        disabled={createShipperResult.isLoading}
        error={Formik.errors.company_name}
        touched={Formik.touched.company_name}
      />
      <FormInput
        placeholder="Employer Identification Number for the company."
        name="EIN"
        id="EIN"
        onChange={Formik?.handleChange}
        value={Formik.values.EIN}
        onBlur={Formik.handleBlur}
        disabled={createShipperResult.isLoading}
        error={Formik.errors.EIN}
        touched={Formik.touched.EIN}
      />
      <FormInput
        placeholder="The state in which the company is registered."
        name="State of Formation"
        id="state_of_formation"
        onChange={Formik?.handleChange}
        value={Formik.values.state_of_formation}
        onBlur={Formik.handleBlur}
        disabled={createShipperResult.isLoading}
        error={Formik.errors.state_of_formation}
        touched={Formik.touched.state_of_formation}
      />
      <div className="flex w-full flex-col gap-4">
        <label className="text-base font-medium text-app-gray-200">
          Logo of the company
        </label>
        <FileInputButton
          onFileChange={handleFileChange}
          resetFile={resetFile}
        />
        {Formik.errors.logo && Formik.touched.logo ? (
          <Error error={Formik.errors.logo} />
        ) : null}
      </div>
      <div className="flex items-center justify-end gap-3.5 py-4">
        <CustomButton text="Cancel" type="button" onClick={closeHandler} />
        <CustomButton
          text="Register"
          className="border-none bg-app-blue-100 text-white"
          type="submit"
          disabled={createShipperResult?.isLoading}
          loading={createShipperResult?.isLoading}
        />
      </div>
    </form>
  );
};

export default ShipperReceiver;
