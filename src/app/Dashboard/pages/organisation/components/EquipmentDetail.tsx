import Modal from "src/components/Modal";
import { CustomButton } from "src/components/ActionBtn";
import { FormInput, FormSelect, FormTextArea } from "src/components/Input";
import ModalCardHeader from "src/components/ModalCardHeader";

interface EquipmentDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
}

interface DetailCardProps {
  title?: string;
  heading?: string;
  message1?: string;
  message2?: string;
}

const DetailCard = ({
  title,
  heading,
  message1,
  message2,
}: DetailCardProps) => {
  return (
    <div className="flex flex-col gap-1.5">
      <p className="pb-0.5 text-base font-semibold text-app-blue-100">
        {title}
      </p>
      <p className="text-sm text-muftar-gray-700">{heading}</p>
      <p className="text-base font-semibold text-muftar-gray-700">{message1}</p>
      <p className="text-base font-semibold text-muftar-gray-700">{message2}</p>
    </div>
  );
};

const EquipmentDetails = ({ isOpen, closeModal }: EquipmentDetailsProps) => {
  return (
    <Modal isOpen={isOpen} className="flex items-center justify-center">
      <div
        className="w-full max-w-[640px] rounded-2xl bg-white pb-4"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalCardHeader title="Equipment Details" closeHandler={closeModal} />
        <div className="scroller flex max-h-[450px] flex-col gap-6 overflow-auto px-10 py-4">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div>
                <div className="flex flex-col gap-6 border-b border-muftar-gray-300 pb-6">
                  <DetailCard
                    title=""
                    heading="Equipment ID"
                    message1="EQP-001"
                    message2=""
                  />
                  <DetailCard heading="Type" message1="Truck" />
                  <DetailCard heading="Status" message1="Available" />
                  <DetailCard heading="Last Queued Load" message1="LD-001" />
                  <DetailCard heading="ETA" message1="2023-01-01 | 14:00" />
                </div>
                <div className="pt-6">
                  <DetailCard
                    title="Maintenance History"
                    message1="- Last Service: 2022-12-20"
                    message2="- Last Service: 2022-12-20"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-6 border-b border-muftar-gray-300 pb-6">
                <DetailCard
                  title="Specifications"
                  heading="Model"
                  message1="Freightliner Cascadia"
                />
                <DetailCard heading="Year" message1="2020" />
                <DetailCard heading="Capacity" message1="18,000 lbs" />
              </div>
              <div className="flex flex-col gap-6 pt-6">
                <DetailCard
                  title="Assignments"
                  heading="Current"
                  message1="None"
                />
                <DetailCard
                  heading="History"
                  message1="- LD-005: Delivered on 2023-01-01"
                  message2="- LD-003: Delivered on 2022-12-28"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3.5 py-4">
            <CustomButton text="Cancel" onClick={closeModal} type="button" />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EquipmentDetails;
