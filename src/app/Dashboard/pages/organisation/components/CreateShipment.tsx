import Modal from "src/components/Modal";
import { CustomButton } from "src/components/ActionBtn";
import { FormInput, FormSelect, FormTextArea } from "src/components/Input";
import ModalCardHeader from "src/components/ModalCardHeader";

interface CreateShipmentProps {
  isOpen: boolean;
  closeModal: () => void;
}

const CreateShipment = ({ isOpen, closeModal }: CreateShipmentProps) => {
  return (
    <Modal isOpen={isOpen} className="flex items-center justify-center">
      <div
        className="w-full max-w-[640px] rounded-2xl bg-white pb-4"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalCardHeader title="Shipment Creation" closeHandler={closeModal} />
        <div className="scroller flex max-h-[450px] flex-col gap-6 overflow-auto px-10 py-4">
          <div className="flex flex-col gap-1.5">
            <p className="text-sm font-medium text-muftar-gray-500">
              Are you the Shipper or Receiver?
            </p>
            <div className="grid grid-cols-2 items-center">
              <div className="flex items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-transparent"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-3 text-base font-medium text-muftar-gray-700"
                >
                  Shipper
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-transparent"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-3 text-base font-medium text-muftar-gray-700"
                >
                  Receiver
                </label>
              </div>
            </div>
          </div>
          <FormInput name="Weight" placeholder="Input Field" />
          <FormInput name="Pickup Location" placeholder="Input Field" />
          <FormInput name="Delivery Location" placeholder="Input Field" />
          <FormTextArea
            id="job"
            name="Shipment Description"
            placeholder="Text Area"
            height="h-[130px]"
          />

          <div className="flex items-center justify-end gap-3.5 py-4">
            <CustomButton text="Cancel" onClick={closeModal} type="button" />
            <CustomButton
              text="Create Shipment"
              className="border-none bg-app-blue-100 text-white"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreateShipment;
