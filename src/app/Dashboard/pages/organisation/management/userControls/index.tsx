import Table, { BodyProps } from "src/components/table/Table";
import { CustomButton } from "src/components/ActionBtn";
import ImageComp from "src/components/Image";
import { useState } from "react";
import InviteUser from "../../components/InviteUser";
import CreateNewRole from "../../components/CreateNewRole";
import EditRole from "../../components/EditRole";

const OrganisationManagementUserControls = () => {
  const [isCreateOpen, setIsCreateOpen] = useState<boolean>(false);
  const [isInviteOpen, setIsInviteOpen] = useState<boolean>(false);
  const [isEditRoleOpen, setIsEditRoleOpen] = useState<boolean>(false);

  const headers = [
    { name: "Name", id: "name" },
    { name: "Email address", id: "email" },
    { name: "Role Assigned", id: "enrolment" },
    { name: "Actions", id: "status" },
  ];
  const body = [
    {
      name: "Joseph Mehmed",
      email: "olivia@untitledui.com",
      enrolment: "inventory manager",
      status: "active",
    },
    {
      name: "Phoenix Crane",
      email: "phoenix@untitledui.com",
      enrolment: "inventory manager",
      status: "pending",
    },
    {
      name: "Olivia Green",
      email: "olivia@untitledui.com",
      enrolment: "shipping coordinator",
      status: "active",
    },
    {
      name: "Sophia Blue",
      email: "phoenix@untitledui.com",
      enrolment: "receiving manager",
      status: "pending",
    },
    {
      name: "Aiden Smith",
      email: "olivia@untitledui.com",
      enrolment: "receiving manager",
      status: "active",
    },
  ];

  const dd = (): BodyProps[] => {
    return body.map((data) => {
      return {
        ...data,
        status: (
          <div className="inset-0 flex items-center gap-6">
            <p className="cursor-pointer text-sm font-semibold text-app-blue-100">
              Change Role
            </p>
            <p className="cursor-pointer px-6 text-sm font-semibold text-muftar-gray-600">
              Remove
            </p>
          </div>
        ),
      };
    });
  };
  return (
    <section className="h-screen bg-muftar-gray-50 px-4 pb-6 md:px-16">
      <InviteUser
        isInviteOpen={isInviteOpen}
        closeModal={() => setIsInviteOpen(false)}
      />
      <CreateNewRole
        isOpen={isCreateOpen}
        closeModal={() => setIsCreateOpen(false)}
      />
      <EditRole
        isOpen={isEditRoleOpen}
        closeModal={() => setIsEditRoleOpen(false)}
      />

      <div className="flex flex-wrap items-center justify-between gap-4 py-6 lg:flex-nowrap">
        <p className="text-nowrap text-2xl font-semibold text-muftar-gray-800">
          User Lists
        </p>
        <div className="flex flex-wrap gap-4 md:flex-nowrap">
          <div className="flex w-full flex-grow items-center space-x-2 rounded-lg border border-app-border bg-white px-3.5 py-3 placeholder:text-base placeholder:text-app-gray-500 sm:w-[360px]">
            <ImageComp image="/images/contact-search.svg" />
            <input
              type="text"
              className="w-full border-none text-xs text-app-gray-300 outline-none focus:outline-none focus:ring-0"
              placeholder="Search communities"
            />
          </div>
          <CustomButton
            icon="/images/white-plus.svg"
            text="Invite User"
            type="button"
            onClick={() => setIsInviteOpen(true)}
            className="border-none bg-app-blue-100 text-white"
          />
          <CustomButton
            text="Create New Role"
            type="button"
            onClick={() => setIsCreateOpen(true)}
          />
          <p
            className="cursor-pointer px-[18px] py-2.5 text-base font-semibold text-app-blue-500"
            onClick={() => setIsEditRoleOpen(true)}
          >
            Edit Roles
          </p>
        </div>
      </div>
      <Table headers={headers} body={dd()} />
    </section>
  );
};

export default OrganisationManagementUserControls;
