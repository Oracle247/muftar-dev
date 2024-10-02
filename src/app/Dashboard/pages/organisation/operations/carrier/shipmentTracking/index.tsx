import Table, { BodyProps } from "src/components/table/Table";
import { stausTag } from "src/helpers/helperFunction";
import { CustomButton } from "src/components/ActionBtn";
import ImageComp from "src/components/Image";
import CreateShipment from "../../../components/CreateShipment";
import { useState } from "react";
import { ProgessStatus } from "src/components/Badge";

interface LegendProps {
  title: string;
  image: string;
}

const headers = [
  { name: "Route ID", id: "route" },
  { name: "Start Location", id: "start" },
  { name: "Weight", id: "weight" },
  { name: "End Location", id: "end" },
  { name: "Status", id: "status" },
  { name: "Actions", id: "actions" },
];
const body = [
  {
    route: "RT-001",
    start: "New York, NY",
    weight: "65kg",
    end: "Los Angeles, CA",
    status: "Planned",
  },
  {
    route: "RT-002",
    start: "Chicago, IL",
    weight: "65kg",
    end: "Houston, TX",
    status: "In Progress",
  },
  {
    route: "RT-003",
    start: "Miami, FL",
    weight: "65kg",
    end: "Los Angeles, CA",
    status: "In Progress",
  },
  {
    route: "RT-004",
    start: "Miami, FL",
    weight: "65kg",
    end: "Los Angeles, CA",
    status: "Completed",
  },
  {
    route: "RT-005",
    start: "Miami, FL",
    weight: "65kg",
    end: "Los Angeles, CA",
    status: "Completed",
  },
];

const dd = (): BodyProps[] => {
  return body.map((data) => {
    return {
      ...data,
      status: <ProgessStatus text={data?.status?.toLocaleLowerCase()} />,
      actions: (
        <div className="inset-0 flex items-center gap-[34px]">
          <button className="rounded-lg bg-[#E4E8F6] px-3.5 py-2 text-sm font-semibold text-app-blue-100">
            View
          </button>
          <CustomButton text="Edit" />
          <p className="cursor-pointer px-3.5 py-2 text-sm font-semibold text-app-blue-100">
            Optimize
          </p>
          <p className="cursor-pointer text-sm font-semibold text-muftar-gray-600">
            Delete
          </p>
        </div>
      ),
    };
  });
};

const OrganisationOperationsCarrierShipmentTracking = () => {
  const [isCreateShipmentOpen, setIsCreateShipmentOpen] =
    useState<boolean>(false);

  const legend: LegendProps[] = [
    { title: "Planned Route:", image: "/images/planned-route.svg" },
    { title: "In-Progress Route:", image: "/images/in-progress-route.svg" },
    { title: "Completed Route:", image: "/images/complete-route.svg" },
    { title: "Start Location:", image: "/images/start-location.svg" },
    { title: "End Location:", image: "/images/end-location.svg" },
    { title: "Waypoint:", image: "/images/way-point.svg" },
  ];
  return (
    <section className="bg-muftar-gray-50 px-4 py-10 md:px-16">
      <CreateShipment
        isOpen={isCreateShipmentOpen}
        closeModal={() => setIsCreateShipmentOpen(false)}
      />

      <div className="mb-6 flex w-full flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-0">
        <p className="pr-auto text-2xl font-semibold text-muftar-gray-800">
          Shipment Tracking
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
          text="Create Shipment"
          type="button"
          className="border-none bg-app-blue-100 text-white"
          onClick={() => setIsCreateShipmentOpen(true)}
        />
      </div>
      <div className="mb-6 rounded-2xl bg-white p-6">
        <ImageComp image="/images/map.svg" alt="map" styles="mb-3" />
        <div className="flex flex-col gap-4">
          <p className="text-lg font-semibold text-muftar-gray-800">Legend</p>
          <div className="flex flex-wrap items-center gap-[46px] lg:flex-nowrap">
            {legend?.map((item, index: number) => (
              <div className="flex items-center gap-4" key={index}>
                <p className="teext-base font-medium text-muftar-gray-700">
                  {item?.title}
                </p>
                <ImageComp image={item?.image} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Table headers={headers} body={dd()} title="Route List" />
    </section>
  );
};

export default OrganisationOperationsCarrierShipmentTracking;
