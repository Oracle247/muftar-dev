import { ReactNode, useEffect } from "react";
import useAuth from "./../hooks/useAuth";
import SignIn from "../app/auth/SignIn";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { replace } from "formik";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const navigate = useNavigate();
  const { tokens } = useAuth();

  useEffect(() => {
    if (!tokens) {
      navigate("/");
    }
  }, [tokens]);

  return <>{children}</>;
};

export default ProtectedRoute;
