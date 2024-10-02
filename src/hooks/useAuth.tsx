import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  selectCurrentLoginUser,
  selectCurrentLoginRole,
  selectCurrentLoginToken,
} from "../features/auth/authSlice";
import { RootState } from "src/store/store";

type AuthState = {
  user: any; // Replace 'any' with your actual user type
  userRole: any; // Replace 'any' with your actual user role type
  // tokens: string | null;
  tokens: any;
};

const useAuth = (): AuthState => {
  const token = useSelector((state: RootState) =>
    selectCurrentLoginToken(state),
  );
  const user = useSelector((state: RootState) => selectCurrentLoginUser(state));
  const userRole = useSelector((state: RootState) =>
    selectCurrentLoginRole(state),
  );

  const tokens = useMemo(() => token, [token]);
  return { user, userRole, tokens };
};

export default useAuth;
