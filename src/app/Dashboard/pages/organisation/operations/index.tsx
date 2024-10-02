import NavBar from "src/components/navigation/NavBar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useOrganization from "src/hooks/useOrganization";

const OrganisationOperations = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { organizationType: type } = useOrganization();

  const [organisationType, setOrganisationType] = useState<string>(type);

  useEffect(() => {
    // console.log(location?.pathname === "/dashboard/organisation/operations");
    if (location?.pathname === "/dashboard/organisation/operations") {
      if (organisationType === "Shipper/Receiver") {
        navigate(
          "/dashboard/organisation/operations/shipper-receiver/shipment-tracking",
        );
      }
      if (organisationType === "Broker") {
        navigate("/dashboard/organisation/operations/broker/load-matching");
      }
      if (organisationType === "Carrier") {
        navigate("/dashboard/organisation/operations/carrier/load-board");
      }
    }
  }, []);

  return (
    <NavBar>
      <Outlet />
    </NavBar>
  );
};

export default OrganisationOperations;
