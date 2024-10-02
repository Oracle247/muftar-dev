import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  selectComplete,
  selectSkip,
  selectIdValidated,
} from "../features/dashboards/dashboardSlice";
import { RootState } from "src/store/store";

type DashboardState = {
  completed: boolean;
  skipped: boolean;
  idValidated: boolean;
};

const useDashboard = (): DashboardState => {
  const skip = useSelector((state: RootState) => selectSkip(state));
  const complete = useSelector((state: RootState) => selectComplete(state));
  const idValidate = useSelector((state: RootState) =>
    selectIdValidated(state),
  );

  const skipped = useMemo(() => skip, [skip]);
  const completed = useMemo(() => complete, [complete]);
  const idValidated = useMemo(() => idValidate, [idValidate]);

  return { skipped, completed, idValidated };
};

export default useDashboard;
