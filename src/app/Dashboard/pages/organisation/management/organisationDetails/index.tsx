import { useState } from "react";
import { FormInput } from "src/components/Input";
import { CustomButton } from "src/components/ActionBtn";
import NotificationBar from "src/components/NotificationBar";
import ImageComp from "src/components/Image";
import FileUploader from "../../components/FileUploader";

const OrganisationManagementDetails = () => {
  const createOrganisationTabs: string[] = [
    "Shipper/Receiver",
    "Carrier",
    "Broker",
  ];
  const [activeBar, setActiveBar] = useState<string>("Shipper/Receiver");

  return (
    <section className="h-screen bg-gray-50 px-4 pb-6 md:px-16">
      <p className="pb-6 pt-10 text-2xl font-semibold text-muftar-gray-800">
        Edit Organization Details
      </p>
      <div className="max-w-[720px] rounded-2xl bg-white px-10 py-6">
        <div className="grid grid-cols-3 items-center gap-2 rounded-lg bg-muftar-gray-50 p-1">
          {createOrganisationTabs?.map((tab) => (
            <button
              onClick={() => setActiveBar(tab)}
              className={`${tab === activeBar ? "bg-white text-muftar-gray-700 shadow-custom-shadow-sm" : "bg-transparent text-muftar-gray-500"} rounded-md py-3 text-sm font-semibold hover:bg-white hover:text-muftar-gray-700 hover:shadow-custom-shadow-sm`}
            >
              {tab}
            </button>
          ))}
        </div>
        {activeBar === "Shipper/Receiver" && (
          <div className="flex flex-col gap-6 py-6">
            <FormInput name="Company Name" placeholder="Muftar Inc." />
            <FormInput name="EIN" placeholder="ID-092633" />
            <FormInput
              name="State of Formation"
              placeholder="Las Vegas, United States"
            />
            <div className="flex flex-col gap-1.5">
              <p className="text-sm font-medium text-muftar-gray-700">
                Logo of the company
              </p>
              <div className="flex items-center gap-4">
                <ImageComp
                  image="/images/management-logo.svg"
                  styles="rounded-full w-20 h-20 border border-muftar-gray-400"
                />
                <FileUploader />
              </div>
            </div>
            <div className="flex items-center justify-end gap-3.5 py-4">
              <CustomButton text="Cancel" />
              <CustomButton
                text="Save Changes"
                className="border-none bg-app-blue-100 text-white"
              />
            </div>
          </div>
        )}
        {activeBar === "Carrier" && (
          <div className="flex flex-col gap-6 py-6">
            <NotificationBar title=" Carriers and brokers provide their USDOT/MC number for verification." />
            <FormInput
              name="MC Number"
              placeholder="1234567"
              description=" Carriers and brokers provide their MC number for verification."
            />
            <div className="flex items-center justify-end gap-3.5 py-4">
              <CustomButton text="Cancel" />
              <CustomButton
                text="Save Changes"
                className="border-none bg-app-blue-100 text-white"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OrganisationManagementDetails;
