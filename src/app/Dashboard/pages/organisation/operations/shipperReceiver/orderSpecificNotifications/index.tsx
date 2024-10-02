import { ProgessStatus } from "src/components/Badge";
import Table, { BodyProps } from "src/components/table/Table";
import { FormSelect } from "src/components/Input";

const OrganisationOperationsOrderSpecificNotifications = () => {
  const headers = [
    { name: "Notification ID", id: "id" },
    { name: "Type", id: "type" },
    { name: "Date", id: "date" },
    { name: "Actions", id: "actions" },
  ];
  const body = [
    {
      id: "NOTIF-001",
      type: "Delivery Alert",
      date: "2023-01-01",
    },
    {
      id: "NOTIF-002",
      type: "Delivery Alert",
      date: "2023-01-01",
    },
    {
      id: "NOTIF-003",
      type: "Delay Alert",
      date: "2023-01-01",
    },
    {
      id: "NOTIF-004",
      type: "Delivery Alert",
      date: "2023-01-01",
    },
    {
      id: "NOTIF-005",
      type: "Delay Alert",
      date: "2023-01-01",
    },
  ];

  const headers2 = [
    { name: "Message ID", id: "id" },
    { name: "Sender", id: "sender" },
    { name: "Subject", id: "subject" },
    { name: "Date", id: "date" },
    { name: "Actions", id: "actions" },
  ];

  const body2 = [
    {
      id: "MSG-001",
      sender: "John Doe",
      subject: "Delivery Update",
      date: "2023-01-01",
    },
    {
      id: "MSG-002",
      sender: "John Doe",
      subject: "Delivery Update",
      date: "2023-01-01",
    },
    {
      id: "MSG-003",
      sender: "John Doe",
      subject: "Delivery Update",
      date: "2023-01-01",
    },
    {
      id: "MSG-004",
      sender: "John Doe",
      subject: "Delivery Update",
      date: "2023-01-01",
    },
    {
      id: "MSG-005",
      sender: "John Doe",
      subject: "Delivery Update",
      date: "2023-01-01",
    },
  ];

  const dd = (): BodyProps[] => {
    return body.map((data) => {
      return {
        ...data,
        actions: (
          <div className="inset-0 flex items-center gap-[34px]">
            <p className="cursor-pointer text-sm font-semibold text-app-blue-100">
              View
            </p>
            <p className="cursor-pointer text-sm font-semibold text-muftar-gray-600">
              Mark as read
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
        actions: (
          <div className="inset-0 flex items-center gap-[34px]">
            <p className="cursor-pointer text-sm font-semibold text-app-blue-100">
              View
            </p>
            <p className="cursor-pointer text-sm font-semibold text-app-blue-100">
              Reply
            </p>
            <p className="cursor-pointer px-6 text-sm font-semibold text-muftar-gray-600">
              Delete
            </p>
          </div>
        ),
      };
    });
  };

  return (
    <section className="bg-muftar-gray-50 px-4 py-10 md:px-16">
      <div className="mb-6 flex w-full flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-0">
        <p className="pr-auto text-2xl font-semibold text-muftar-gray-800">
          Order-Specific Notifications and Messages
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
        <Table headers={headers} body={dd()} title="Notifications" />
      </div>
      <Table headers={headers2} body={dd2()} title="Messages" />
    </section>
  );
};

export default OrganisationOperationsOrderSpecificNotifications;
