import Modal from "src/components/Modal";
import { CustomButton } from "src/components/ActionBtn";
import { FormInput, FormSelect, FormTextArea } from "src/components/Input";
import ModalCardHeader from "src/components/ModalCardHeader";
import { CarrierProgessStatus } from "src/components/Badge";

interface EquipmentStatusProps {
  isOpen: boolean;
  closeModal: () => void;
}

const EquipmentStatus = ({ isOpen, closeModal }: EquipmentStatusProps) => {
  return (
    <Modal isOpen={isOpen} className="flex items-center justify-center">
      <div
        className="w-full max-w-[640px] rounded-2xl bg-white pb-4"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalCardHeader title="Shipment Creation" closeHandler={closeModal} />
        <div className="scroller flex max-h-[450px] flex-col gap-6 overflow-auto px-10 py-4">
          <FormInput name="Equipment ID" placeholder="EQP-001" />
          <div className="flex items-center gap-3">
            <p className="text-sm text-muftar-gray-700">Current Status</p>
            <CarrierProgessStatus text="Available" />
          </div>
          <FormSelect
            name="New Status"
            options={[{ label: "Available", value: "Available" }]}
          />

          <div className="flex items-center justify-end gap-3.5 py-4">
            <CustomButton text="Cancel" onClick={closeModal} type="button" />
            <CustomButton
              text="Update Status"
              className="border-none bg-app-blue-100 text-white"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EquipmentStatus;
