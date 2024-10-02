import { useState } from "react";
import { CustomButton } from "src/components/ActionBtn";
import NotificationBar from "src/components/NotificationBar";
import { FormInput } from "src/components/Input";

interface DetailsCardProps {
  title: string;
  detail: string;
}

export const DetailsCard = ({ title, detail }: DetailsCardProps) => {
  return (
    <div className="flex flex-col gap-1.5 text-base text-muftar-gray-700">
      <p>{title}</p>
      <p className="font-semibold">{detail}</p>
    </div>
  );
};

const Carrier = () => {
  const [verified, setVerified] = useState<boolean>(false);
  return (
    <div>
      {!verified ? (
        <div className="scroller flex max-h-[450px] flex-col gap-6 overflow-auto px-10 py-6">
          <NotificationBar
            type="neutral"
            title="Carriers and brokers provide their MC number for
                  verification."
            //   message="Do check if your details are correct to proceed."
          />
          <FormInput
            placeholder="input your MC Number"
            name="MC Number"
            description="Carriers and brokers provide their MC number for verification."
          />
          <NotificationBar
            type="success"
            title="Verification Status"
            message="Verified"
          />
          <div className="flex items-center justify-end gap-3.5 py-4">
            <CustomButton text="Cancel" />
            <CustomButton
              text="Verify MC Number"
              className="border-none bg-app-blue-100 text-white"
              type="button"
              onClick={() => setVerified(true)}
            />
          </div>
        </div>
      ) : (
        <div className="scroller flex max-h-[450px] flex-col gap-6 overflow-auto px-10 py-6">
          <NotificationBar
            type="neutral"
            title="Carriers and brokers provide their MC number for
                  verification."
            message="Do check if your details are correct to proceed."
          />
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-6">
              <NotificationBar
                type="success"
                title="Verification Status"
                message="Verified"
              />
              <DetailsCard title="Company Name" detail="XYZ Logistics Inc." />
              <DetailsCard title="Operating Status" detail="Active" />
              <DetailsCard
                title="Mailing Address"
                detail="PO Box 456, Springfield, IL"
              />
              <DetailsCard title="Number of Vehicles" detail="50" />
              <DetailsCard title="Type of Operation" detail="Interstate" />
            </div>
            <div className="flex flex-col gap-6">
              <NotificationBar
                type="success"
                title="Authorization Statuss"
                message="Authorized"
              />
              <DetailsCard title="MC Number" detail="7654321." />
              <DetailsCard
                title="Physical Address"
                detail="123 Main St, Springfield, IL"
              />
              <DetailsCard title="Phone Number" detail="(555) 123-4567" />
              <DetailsCard title="Number of Drivers" detail="75" />
              <DetailsCard
                title="Cargo Carried"
                detail="General Freight, Hazardous Materials"
              />
            </div>
          </div>
          <div className="flex items-center justify-end gap-3.5 py-4">
            <CustomButton text="Cancel" />
            <CustomButton
              text="Confirm"
              className="border-none bg-app-blue-100 text-white"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrier;
