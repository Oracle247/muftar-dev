import { FormSelect } from "src/components/Input";
import Table, { BodyProps } from "src/components/table/Table";

const OrganisationOperationsOrderSpecificDocuments = () => {
  const headers = [
    { name: "Document ID", id: "id" },
    { name: "Document Name", id: "document" },
    { name: "Uploaded By", id: "uploader" },
    { name: "Date Uploaded", id: "date" },
    { name: "Actions", id: "actions" },
  ];

  const body = [
    {
      id: "DOC-001",
      document: "Invoice.pdf",
      uploader: "John Doe",
      date: "2023-01-01",
    },
    {
      id: "DOC-002",
      document: "Bill of Lading.pdf",
      uploader: "Jane Smith",
      date: "2023-01-01",
    },
    {
      id: "DOC-003",
      document: "Invoice.pdf",
      uploader: "John Doe",
      date: "2023-01-01",
    },
    {
      id: "DOC-004",
      document: "Bill of Lading.pdf",
      uploader: "John Doe",
      date: "2023-01-01",
    },
    {
      id: "DOC-005",
      document: "Invoice.pdf",
      uploader: "Jane Smith",
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
            <p className="cursor-pointer text-sm font-semibold text-app-blue-100">
              Download
            </p>
            <p className="cursor-pointer text-sm font-semibold text-muftar-gray-600">
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
          Order-Specific Documents
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
        <Table headers={headers} body={dd()} />
      </div>
    </section>
  );
};

export default OrganisationOperationsOrderSpecificDocuments;
