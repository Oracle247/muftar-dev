import Modal from "src/components/Modal";
import { CustomButton } from "src/components/ActionBtn";
import { FormInput, FormSelect, FormTextArea } from "src/components/Input";
import ModalCardHeader from "src/components/ModalCardHeader";

interface PostJobProps {
  isOpen: boolean;
  closeModal: () => void;
}

const PostJob = ({ isOpen, closeModal }: PostJobProps) => {
  return (
    <Modal isOpen={isOpen} className="flex items-center justify-center">
      <div
        className="w-full max-w-[640px] rounded-2xl bg-white pb-4"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalCardHeader title="Post a new job" closeHandler={closeModal} />
        <div className="scroller flex max-h-[450px] flex-col gap-6 overflow-auto px-10 py-4">
          <FormInput name="Job Title" placeholder="Input Field" />
          <FormInput name="Location" placeholder="Las Vegas" />
          <FormInput name="Salary Range" placeholder="Input Field" />
          <FormTextArea
            id="job"
            name="Job Description"
            placeholder="Share your experience or get advice from other professionals"
            height="h-[130px]"
          />
          <FormSelect
            name="Tags"
            options={[{ label: "Onsite", value: "Onsite" }]}
          />
          <FormTextArea
            id="job"
            name="Requirements"
            placeholder="Share your experience or get advice from other professionals"
            height="h-[130px]"
          />
          <div className="flex items-center justify-end gap-3.5 py-4">
            <CustomButton text="Cancel" onClick={closeModal} type="button" />
            <CustomButton
              text="Post Job"
              className="border-none bg-app-blue-100 text-white"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PostJob;
