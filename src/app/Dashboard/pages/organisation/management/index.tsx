import NavBar from "src/components/navigation/NavBar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const OrganisationManagement = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location?.pathname === "/dashboard/organisation/management") {
      navigate("/dashboard/organisation/management/organisation-details");
    }
  }, []);

  return (
    <NavBar>
      <Outlet />
    </NavBar>
  );
};

export default OrganisationManagement;
