import useOrganization from "src/hooks/useOrganization";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface MenuItem {
  title: string;
  path: string;
}

const OrganisationOperationsSubnav = () => {
  const location = useLocation();
  const { organizationType } = useOrganization();
  console.log(organizationType);

  const [userType, setUserType] = useState<string>(organizationType);

  const resourcesSubMenuShipper: MenuItem[] = [
    {
      title: "Shipment Tracking",
      path: "/dashboard/organisation/operations/shipper-receiver/shipment-tracking",
    },
    {
      title: "Shipment History",
      path: "/dashboard/organisation/operations/shipper-receiver/shipment-history",
    },
    {
      title: "Order-Specific Notifications",
      path: "/dashboard/organisation/operations/shipper-receiver/order-specific-notifications",
    },
    {
      title: "Order-Specific Documents",
      path: "/dashboard/organisation/operations/shipper-receiver/order-specific-documents",
    },
  ];

  const resourcesSubMenuBroker: MenuItem[] = [
    {
      title: "Load Matching",
      path: "/dashboard/organisation/operations/broker/load-matching",
    },
    {
      title: "Shipment Tracking",
      path: "/dashboard/organisation/operations/broker/shipment-tracking",
    },
    {
      title: "Shipment History",
      path: "/dashboard/organisation/operations/broker/shipment-history",
    },
    {
      title: "Order-Specific Notifications",
      path: "/dashboard/organisation/operations/broker/order-specific-notifications",
    },
    {
      title: "Order-Specific Documents",
      path: "/dashboard/organisation/operations/broker/order-specific-documents",
    },
  ];

  const resourcesSubMenuCarrier: MenuItem[] = [
    {
      title: "Load Board",
      path: "/dashboard/organisation/operations/carrier/load-board",
    },
    {
      title: "Load Management",
      path: "/dashboard/organisation/operations/carrier/load-management",
    },
    {
      title: "Shipment Tracking",
      path: "/dashboard/organisation/operations/carrier/shipment-tracking",
    },
    {
      title: "Shipment History",
      path: "/dashboard/organisation/operations/carrier/shipment-history",
    },
    {
      title: "Order-Specific Notifications",
      path: "/dashboard/organisation/operations/carrier/order-specific-notifications",
    },
    {
      title: "Order-Specific Documents",
      path: "/dashboard/organisation/operations/carrier/order-specific-documents",
    },
    {
      title: "Driver Board",
      path: "/dashboard/organisation/operations/carrier/driver-board",
    },
  ];

  const [menuItems, setmenuItems] = useState<MenuItem[]>(
    resourcesSubMenuShipper,
  );

  useEffect(() => {
    if (userType === "Shipper/Receiver") setmenuItems(resourcesSubMenuShipper);
    if (userType === "Broker") setmenuItems(resourcesSubMenuBroker);
    if (userType === "Carrier") setmenuItems(resourcesSubMenuCarrier);
  }, []);

  return (
    <div className="hidden items-center justify-between bg-white px-10 py-2 lg:flex lg:px-20">
      <ul className="flex flex-wrap items-center gap-1">
        {menuItems.map((item, index: number) => (
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

export default OrganisationOperationsSubnav;
