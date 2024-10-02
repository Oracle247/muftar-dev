import Table, { BodyProps } from "src/components/table/Table";
import ImageComp from "src/components/Image";
import { ProgessStatus } from "src/components/Badge";
import { CustomButton } from "src/components/ActionBtn";
import LoadPost from "../../../components/LoadPost";
import { useState } from "react";

const OrganisationOperationsCarrierLoadManagement = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const headers = [
    { name: "Load ID", id: "id" },
    { name: "Load Details", id: "details" },
    { name: "Driver Assigned", id: "driver" },
    { name: "Actions", id: "actions" },
  ];
  const body = [
    {
      id: "LD-001",
      details: "Electronics",
      driver: "Driver A",
    },
    {
      id: "LD-002",
      details: "Electronics",
      driver: "Driver B",
    },
    {
      id: "LD-003",
      details: "Electronics",
      driver: "Driver A",
    },
    {
      id: "LD-004",
      details: "Electronics",
      driver: "Driver A",
    },
    {
      id: "LD-005",
      details: "Electronics",
      driver: "Driver B",
    },
  ];

  const dd = (): BodyProps[] => {
    return body.map((data) => {
      return {
        ...data,
        actions: (
          <div className="inset-0 flex items-center gap-[34px]">
            <p className="cursor-pointer text-sm font-semibold text-app-blue-100">
              Re-assign Driver
            </p>
            <p className="cursor-pointer text-sm font-semibold text-app-blue-100">
              Remove Driver
            </p>
            <p className="cursor-pointer text-sm font-semibold text-muftar-gray-600">
              Cancel Load
            </p>
          </div>
        ),
      };
    });
  };

  return (
    <section className="bg-muftar-gray-50 px-4 py-10 md:px-16">
      <LoadPost isOpen={isOpen} closeModal={() => setIsOpen(false)} />
      <div className="mb-6 flex w-full flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-0">
        <p className="pr-auto text-2xl font-semibold text-muftar-gray-800">
          Load Board
        </p>

        <div className="ml-0 mr-0 w-full max-w-[360px] md:ml-auto md:mr-4">
          {/* <OrganisationSearch /> */}
          <div className="flex items-center">
            <div className="flex flex-grow items-center space-x-2 rounded-lg border border-app-border bg-white px-3.5 py-3 placeholder:text-base placeholder:text-app-gray-500">
              <ImageComp image="/images/contact-search.svg" />
              <input
                type="text"
                className="w-full border-none text-xs text-app-gray-300 outline-none focus:outline-none focus:ring-0"
                placeholder="Search Users"
              />
            </div>
          </div>
        </div>
        <CustomButton
          icon="/images/white-plus.svg"
          text="Load Posting"
          type="button"
          className="border-none bg-app-blue-100 text-white"
          onClick={() => setIsOpen(true)}
        />
      </div>
      <Table headers={headers} body={dd()} />
    </section>
  );
};

export default OrganisationOperationsCarrierLoadManagement;
