import NavBar from "src/components/navigation/NavBar";
import { CustomButton } from "src/components/ActionBtn";
import OrganisationSearch from "./components/OrganisationSearch";
import Organisation from "./components/Organisation";
import Modal from "src/components/Modal";
import ModalCardHeader from "src/components/ModalCardHeader";
import { useState } from "react";
import ShipperReceiver from "./components/ShipperReceiver";
import Carrier from "./components/Carrier";
import { useGetOrganisationsQuery } from "src/api/organisationSlice";
import useAuth from "src/hooks/useAuth";
import { Skeleton } from "@mui/material";
import { imageUrlMerger } from "src/helpers/helperFunction";

interface DetailsCardProps {
  title: string;
  detail: string;
}

interface itemsProps {
  id: string;
  logo: string;
  organization_type: string;
  company_name: string;
}

export const DetailsCard = ({ title, detail }: DetailsCardProps) => {
  return (
    <div className="flex flex-col gap-1.5 text-base text-muftar-gray-700">
      <p>{title}</p>
      <p className="font-semibold">{detail}</p>
    </div>
  );
};

const OrganisationDashboard = () => {
  const { user } = useAuth();
  const { data: organizationData, isLoading: organizationIsLoading } =
    useGetOrganisationsQuery(user?.id);

  console.log(organizationData);

  const createOrganisationTabs: string[] = [
    "Shipper/Receiver",
    "Carrier",
    "Broker",
  ];
  const [activeBar, setActiveBar] = useState<string>("Shipper/Receiver");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const skeletons = Array(8).fill(null);

  return (
    <NavBar>
      <Modal isOpen={isOpen} className="flex items-center justify-center">
        <div
          className="w-full max-w-[640px] rounded-2xl bg-white pb-4"
          onClick={(e) => e.stopPropagation()}
        >
          <ModalCardHeader
            title="Create Organization"
            closeHandler={() => closeModal()}
          />
          <div className="px-10 py-4">
            <div className="grid grid-cols-3 items-center gap-2 rounded-lg bg-muftar-gray-50 p-1">
              {createOrganisationTabs?.map((tab) => (
                <button
                  onClick={() => setActiveBar(tab)}
                  className={`${tab === activeBar ? "bg-white text-muftar-gray-700 shadow-custom-shadow-sm" : "bg-transparent text-muftar-gray-500"} rounded-md py-3 text-sm font-semibold hover:bg-white hover:text-muftar-gray-700 hover:shadow-custom-shadow-sm`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          {activeBar === "Shipper/Receiver" && (
            <ShipperReceiver closeHandler={() => closeModal()} />
          )}
          {activeBar === "Carrier" && <Carrier />}
        </div>
      </Modal>
      <section className="min-h-screen bg-muftar-gray-50 bg-cover px-4 py-10 md:px-16">
        <div className="mb-6 flex w-full flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-0">
          <p className="pr-auto text-2xl font-semibold text-muftar-gray-800">
            Organization
          </p>

          <div className="ml-0 mr-0 w-full max-w-[360px] md:ml-auto md:mr-4">
            <OrganisationSearch />
          </div>

          <CustomButton
            icon="/images/white-plus.svg"
            text="Create Organization"
            className="border-none bg-app-blue-100 text-white"
            onClick={() => setIsOpen(true)}
          />
        </div>
        {organizationIsLoading ? (
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {skeletons.map((_, index) => (
              <Skeleton
                key={index}
                variant="rectangular"
                width={298}
                height={296}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {organizationData?.data?.map((item: itemsProps, index: number) => (
              <Organisation
                key={index}
                organisationLogo={imageUrlMerger(item?.logo)}
                title={item?.company_name}
                type={item?.organization_type}
                location="Las Vegas"
                id={item?.id}
              />
            ))}
          </div>
        )}
      </section>
    </NavBar>
  );
};

export default OrganisationDashboard;
