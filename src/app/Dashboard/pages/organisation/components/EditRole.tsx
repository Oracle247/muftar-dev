import Badge, { Tag } from "src/components/Badge";
import { CustomButton } from "src/components/ActionBtn";
import { FormInput, FormSelect } from "src/components/Input";
import Modal from "src/components/Modal";
import ModalCardHeader from "src/components/ModalCardHeader";

interface EditRoleProps {
  isOpen: boolean;
  closeModal: () => void;
}

const EditRole = ({ isOpen, closeModal }: EditRoleProps) => {
  return (
    <Modal isOpen={isOpen} className="flex items-center justify-center">
      <div
        className="w-full max-w-[640px] rounded-2xl bg-white pb-4"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalCardHeader title="Change User Role" closeHandler={closeModal} />
        <div className="flex flex-col gap-6 px-10 py-4">
          <div>
            <Tag
              text={
                <p className="text-base font-medium text-muftar-gray-900">
                  <span className="text-sm font-medium text-muftar-gray-700">
                    Current role:
                  </span>{" "}
                  inventory manager
                </p>
              }
            />
          </div>
          <FormInput name="Name of the user" placeholder="Input name" />
          <FormInput name="Email of the user" placeholder="Input email" />
          <FormSelect
            name="Role"
            options={[
              { value: "inventory manager", label: "inventory manager" },
            ]}
          />

          <div className="flex items-center justify-end gap-3.5 py-4">
            <CustomButton text="Cancel" type="button" onClick={closeModal} />
            <CustomButton
              text="Save changes"
              className="border-none bg-app-blue-100 text-white"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditRole;
