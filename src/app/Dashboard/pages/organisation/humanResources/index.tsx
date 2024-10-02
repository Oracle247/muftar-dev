import NavBar from "src/components/navigation/NavBar";
import { CustomButton } from "src/components/ActionBtn";
import ImageComp from "src/components/Image";
import Table, { BodyProps } from "src/components/table/Table";
import { stausTag } from "src/helpers/helperFunction";
import Modal from "src/components/Modal";
import ModalCardHeader from "src/components/ModalCardHeader";
import { FormInput, FormSelect, FormTextArea } from "src/components/Input";
import PostJob from "../components/PostJob";
import { useState } from "react";
import EditJob from "../components/EditJob";
import ViewJob from "../components/ViewJob";

const HumanResources = () => {
  const [isPostJob, setIsPostJob] = useState<boolean>(false);
  const [isEditJob, setIsEditJob] = useState<boolean>(false);
  const [isViewJob, setIsViewJob] = useState<boolean>(false);

  const headers = [
    { name: "Applicant name", id: "name" },
    { name: "Position", id: "position" },
    { name: "Status", id: "status" },
    { name: "Actions", id: "actions" },
  ];
  const body = [
    {
      name: "Joseph Mehmed",
      position: "Operations Mgr",
      enrolment: "inventory manager",
      status: "filled",
    },
    {
      name: "Phoenix Crane",
      position: "Dispatcher",
      enrolment: "inventory manager",
      status: "pending",
    },
    {
      name: "Olivia Green",
      position: "Applied",
      enrolment: "shipping coordinator",
      status: "on Hold",
    },
    {
      name: "Sophia Blue",
      position: "Dispatcher",
      enrolment: "receiving manager",
      status: "filled",
    },
    {
      name: "Aiden Smith",
      position: "Dispatcher",
      enrolment: "receiving manager",
      status: "filled",
    },
  ];

  const dd = (): BodyProps[] => {
    return body.map((data) => {
      return {
        ...data,
        status: stausTag(data?.status),
        actions: (
          <div className="inset-0 flex items-center gap-[34px]">
            <p
              className="cursor-pointer text-sm font-semibold text-app-blue-100"
              onClick={() => setIsEditJob(true)}
            >
              Edit Status
            </p>
            <p
              className="cursor-pointer text-sm font-semibold text-app-blue-100"
              onClick={() => setIsViewJob(true)}
            >
              View Details
            </p>
            <p className="cursor-pointer text-sm font-semibold text-muftar-gray-600">
              Message
            </p>
          </div>
        ),
      };
    });
  };
  return (
    <NavBar>
      <PostJob isOpen={isPostJob} closeModal={() => setIsPostJob(false)} />
      <EditJob isOpen={isEditJob} closeModal={() => setIsEditJob(false)} />
      <ViewJob isOpen={isViewJob} closeModal={() => setIsViewJob(false)} />

      <section className="bg-muftar-gray-50 px-4 py-10 md:px-16">
        <div className="mb-6 flex w-full flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-0">
          <p className="pr-auto text-2xl font-semibold text-muftar-gray-800">
            Human Resources
          </p>

          <div className="ml-0 mr-0 w-full max-w-[360px] md:ml-auto md:mr-4">
            {/* <OrganisationSearch /> */}
            <div className="flex items-center">
              <div className="flex flex-grow items-center space-x-2 rounded-lg border border-app-border bg-white px-3.5 py-3 placeholder:text-base placeholder:text-app-gray-500">
                <ImageComp image="/images/contact-search.svg" />
                <input
                  type="text"
                  className="w-full border-none text-xs text-app-gray-300 outline-none focus:outline-none focus:ring-0"
                  placeholder="Search  Users"
                />
              </div>
            </div>
          </div>

          <CustomButton
            icon="/images/white-plus.svg"
            text="Post new Job"
            type="button"
            className="border-none bg-app-blue-100 text-white"
            onClick={() => setIsPostJob(true)}
          />
        </div>
        <Table headers={headers} body={dd()} title="Applicant Tracking" />
      </section>
    </NavBar>
  );
};
export default HumanResources;
