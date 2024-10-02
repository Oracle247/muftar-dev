import { CustomButton } from "src/components/ActionBtn";
import { FormCheckBox, FormInput } from "src/components/Input";
import Modal from "src/components/Modal";
import ModalCardHeader from "src/components/ModalCardHeader";

interface CreateNewRoleProps {
  isOpen: boolean;
  closeModal: () => void;
}

const CreateNewRole = ({ isOpen, closeModal }: CreateNewRoleProps) => {
  return (
    <Modal isOpen={isOpen} className="flex items-center justify-center">
      <div
        className="w-full max-w-[640px] rounded-2xl bg-white pb-4"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalCardHeader title="Create New Role" closeHandler={closeModal} />
        <div className="flex flex-col gap-6 px-10 py-4">
          <FormInput name="Role Name" placeholder="Input name" />
          <div>
            <p className="mb-1.5 text-sm font-medium text-muftar-gray-700">
              Role Permissons
            </p>
            <div className="flex flex-col gap-4">
              <FormCheckBox name="Manage Users" />
              <FormCheckBox name="Edit Organization Details" />
              <FormCheckBox name="Manage Billing & Subscriptions" />
              <FormCheckBox name="View Dashboard" />
            </div>
          </div>
          <div className="flex items-center justify-end gap-3.5 py-4">
            <CustomButton text="Cancel" type="button" onClick={closeModal} />
            <CustomButton
              text="Create role"
              className="border-none bg-app-blue-100 text-white"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreateNewRole;
