import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store/store";
import { selectOrganisationType } from "src/features/organization/organizationSlice";

type OrganizationState = {
  organizationType: string;
};

const useOrganization = (): OrganizationState => {
  const type = useSelector((state: RootState) => selectOrganisationType(state));
  const organizationType = useMemo(() => type, [type]);

  return { organizationType };
};

export default useOrganization;
