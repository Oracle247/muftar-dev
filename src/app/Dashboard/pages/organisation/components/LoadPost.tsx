import Modal from "src/components/Modal";
import { CustomButton } from "src/components/ActionBtn";
import { FormInput, FormTextArea } from "src/components/Input";
import ModalCardHeader from "src/components/ModalCardHeader";

interface CreateShipmentProps {
  isOpen: boolean;
  closeModal: () => void;
}

const LoadPost = ({ isOpen, closeModal }: CreateShipmentProps) => {
  return (
    <Modal isOpen={isOpen} className="flex items-center justify-center">
      <div
        className="w-full max-w-[640px] rounded-2xl bg-white pb-4"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalCardHeader title="Load Posting" closeHandler={closeModal} />
        <div className="scroller flex max-h-[450px] flex-col gap-6 overflow-auto px-10 py-4">
          <FormInput name="Load Details" placeholder="Input Field" />
          <FormInput name="Pickup Location" placeholder="Input Field" />
          <FormInput name="Delivery Location" placeholder="Input Field" />
          <FormInput name="Weight" placeholder="Input Field" />
          <FormInput name="Dimensions" placeholder="Input Field" />
          <FormTextArea
            id="job"
            name="Special Instructions"
            placeholder="Text Area"
            height="h-[130px]"
          />
          <div className="flex items-center justify-end gap-3.5 py-4">
            <CustomButton text="Cancel" onClick={closeModal} type="button" />
            <CustomButton
              text="Post Load"
              className="border-none bg-app-blue-100 text-white"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LoadPost;
