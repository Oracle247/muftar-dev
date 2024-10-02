import NavBar from "src/components/navigation/NavBar";
import { Skeleton, Stack } from "@mui/material";

const PageSkeleton = () => {
  return (
    <NavBar>
      <section className="mt-10 px-4 md:px-16">
        <Stack>
          <div className="mb-10 flex w-full items-center gap-6 overflow-x-scroll no-scrollbar md:justify-start">
            <Skeleton variant="rounded" width={310} height={114} />
            <Skeleton variant="rounded" width={310} height={114} />
            <Skeleton variant="rounded" width={310} height={114} />
            <Skeleton variant="rounded" width={310} height={114} />
          </div>
        </Stack>

        <Stack>
          <div className="mb-10 flex w-full flex-col">
            <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
            <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
            <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
          </div>
        </Stack>

        <Stack>
          <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <Skeleton variant="rounded" width={410} height={304} />
            <Skeleton variant="rounded" width={410} height={304} />
            <Skeleton variant="rounded" width={410} height={304} />
          </div>
        </Stack>

        <Stack>
          <div className="mb-10 flex flex-wrap gap-10 xl:flex-nowrap">
            <Skeleton variant="rounded" width={639} height={254} />
            <Skeleton variant="rounded" width={639} height={254} />
          </div>
        </Stack>
      </section>
    </NavBar>
  );
};

export default PageSkeleton;
