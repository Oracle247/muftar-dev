import { CustomButton } from "src/components/ActionBtn";
import { FormInput, FormSelect } from "src/components/Input";
import Modal from "src/components/Modal";
import ModalCardHeader from "src/components/ModalCardHeader";

interface InviteUserProps {
  isInviteOpen: boolean;
  closeModal: () => void;
}

const InviteUser = ({ isInviteOpen, closeModal }: InviteUserProps) => {
  return (
    <Modal isOpen={isInviteOpen} className="flex items-center justify-center">
      <div
        className="w-full max-w-[640px] rounded-2xl bg-white pb-4"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalCardHeader title="Invite User" closeHandler={closeModal} />
        <div className="flex flex-col gap-6 px-10 py-4">
          <FormInput name="Name" placeholder="Input name" />
          <FormInput name="Email" placeholder="Input email address" />
          <FormSelect
            name="Role"
            options={[
              { value: "inventory manager", label: "inventory manager" },
            ]}
          />
          <div className="flex items-center justify-end gap-3.5 py-4">
            <CustomButton text="Cancel" onClick={closeModal} type="button" />
            <CustomButton
              text="Send invite"
              className="border-none bg-app-blue-100 text-white"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default InviteUser;
