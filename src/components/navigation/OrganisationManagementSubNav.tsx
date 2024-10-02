import { Link, useLocation } from "react-router-dom";

interface MenuItem {
  title: string;
  path: string;
}

const OrganisationManagementSubNav = () => {
  const location = useLocation();
  const managementSubMenu: MenuItem[] = [
    {
      title: "Organization Details",
      path: "/dashboard/organisation/management/organisation-details",
    },
    {
      title: "Billing & Subscriptions",
      path: "/dashboard/organisation/management/billing-and-subscriptions",
    },
    {
      title: "User Controls",
      path: "/dashboard/organisation/management/user-controls",
    },
  ];

  return (
    <div className="hidden items-center justify-between bg-white px-10 py-2 lg:flex lg:px-20">
      <ul className="flex items-center gap-1">
        {managementSubMenu.map((item, index: number) => (
          <li
            key={index}
            className={`${item.path === location?.pathname ? "bg-app-gray-700 text-app-blue-100" : "bg-white text-app-gray-300"} rounded-md px-3 py-2 font-semibold transition-colors hover:bg-app-gray-700 hover:text-app-blue-100`}
          >
            <Link to={item?.path}>{item?.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrganisationManagementSubNav;
