import ImageComp from "src/components/Image";

const OrganisationSearch = () => {
  return (
    <div className="flex items-center">
      <div className="flex flex-grow items-center space-x-2 rounded-lg border border-app-border bg-white px-3.5 py-3 placeholder:text-base placeholder:text-app-gray-500">
        <ImageComp image="/images/contact-search.svg" />
        <input
          type="text"
          className="w-full border-none text-xs text-app-gray-300 outline-none focus:outline-none focus:ring-0"
          placeholder="Search communities"
        />
      </div>
    </div>
  );
};

export default OrganisationSearch;
