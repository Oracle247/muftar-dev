import { CarrierProgessStatus, ProgessStatus } from "src/components/Badge";
import Table, { BodyProps } from "src/components/table/Table";
import { FormSelect } from "src/components/Input";
import DriverDetails from "../../../components/DriverDetails";
import { useState } from "react";
import EquipmentDetails from "../../../components/EquipmentDetail";
import EquipmentStatus from "../../../components/EquipmentStatus";

const OrganisationOperationsCarrierDriverBoard = () => {
  const [isDriverDetailsOpen, setIsDriverDetailsOpen] =
    useState<boolean>(false);
  const [isEquipmentDetailsOpen, setIsEquipmentDetailsOpen] =
    useState<boolean>(false);
  const [isEquipmentStatusOpen, setIsEquipmentStatusOpen] =
    useState<boolean>(false);
  const headers = [
    { name: "Driver ID", id: "id" },
    { name: "Driver Name", id: "driver" },
    { name: "Current Location", id: "current" },
    { name: "Last Queued Load", id: "last" },
    { name: "ETA", id: "eta" },
    { name: "Actions", id: "actions" },
  ];
  const body = [
    {
      id: "DRV-001",
      driver: "John Doe",
      current: "New York, NY",
      last: "LD-001",
      eta: "2023-01-01 | 14:00",
    },
    {
      id: "DRV-001",
      driver: "John Doe",
      current: "New York, NY",
      last: "LD-001",
      eta: "2023-01-01 | 14:00",
    },
    {
      id: "DRV-001",
      driver: "John Doe",
      current: "New York, NY",
      last: "LD-001",
      eta: "2023-01-01 | 14:00",
    },
    {
      id: "DRV-001",
      driver: "John Doe",
      current: "New York, NY",
      last: "LD-001",
      eta: "2023-01-01 | 14:00",
    },
    {
      id: "DRV-001",
      driver: "John Doe",
      current: "New York, NY",
      last: "LD-001",
      eta: "2023-01-01 | 14:00",
    },
  ];

  const headers2 = [
    { name: "Equipment ID", id: "id" },
    { name: "Type", id: "type" },
    { name: "Status", id: "status" },
    { name: "Actions", id: "actions" },
  ];

  const body2 = [
    {
      id: "EQP-001",
      type: "Truck",
      status: "Available",
    },
    {
      id: "EQP-001",
      type: "Truck",
      status: "In Use",
    },
    {
      id: "EQP-001",
      type: "Truck",
      status: "Available",
    },
    {
      id: "EQP-001",
      type: "Truck",
      status: "Available",
    },
    {
      id: "EQP-001",
      type: "Truck",
      status: "Available",
    },
  ];

  const dd = (): BodyProps[] => {
    return body.map((data) => {
      return {
        ...data,
        actions: (
          <div className="inset-0 flex items-center gap-[34px]">
            <p
              className="cursor-pointer text-sm font-semibold text-app-blue-100"
              onClick={() => setIsDriverDetailsOpen(true)}
            >
              View Details
            </p>
          </div>
        ),
      };
    });
  };

  const dd2 = (): BodyProps[] => {
    return body2.map((data) => {
      return {
        ...data,
        status: <CarrierProgessStatus text={data?.status} />,
        actions: (
          <div className="inset-0 flex items-center gap-[34px]">
            <p
              className="cursor-pointer text-sm font-semibold text-app-blue-100"
              onClick={() => setIsEquipmentDetailsOpen(true)}
            >
              View Details
            </p>
            <p
              className="cursor-pointer text-sm font-semibold text-muftar-gray-600"
              onClick={() => setIsEquipmentStatusOpen(true)}
            >
              Update Status
            </p>
          </div>
        ),
      };
    });
  };

  return (
    <section className="bg-muftar-gray-50 px-4 py-10 md:px-16">
      <DriverDetails
        isOpen={isDriverDetailsOpen}
        closeModal={() => setIsDriverDetailsOpen(false)}
      />
      <EquipmentDetails
        isOpen={isEquipmentDetailsOpen}
        closeModal={() => setIsEquipmentDetailsOpen(false)}
      />
      <EquipmentStatus
        isOpen={isEquipmentStatusOpen}
        closeModal={() => setIsEquipmentStatusOpen(false)}
      />
      <div className="mb-6 flex w-full flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-0">
        <p className="pr-auto text-2xl font-semibold text-muftar-gray-800">
          Driver Board and Equipment List
        </p>

        <div className="ml-0 mr-0 w-full max-w-[374px] md:ml-auto md:mr-4">
          {/* <OrganisationSearch /> */}
          <FormSelect
            name=" Select Order"
            options={[{ value: "ORD-001", label: "ORD-001" }]}
          />
        </div>
      </div>
      <div className="mb-10 w-full">
        <Table headers={headers} body={dd()} title="Drivers List" />
      </div>
      <Table headers={headers2} body={dd2()} title="Equipment List" />
    </section>
  );
};

export default OrganisationOperationsCarrierDriverBoard;
