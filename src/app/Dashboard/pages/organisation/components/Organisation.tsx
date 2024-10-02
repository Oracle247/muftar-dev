import { useJoinOrganizationMutation } from "src/api/organisationSlice";
import { handleResponse } from "src/helpers/helperFunction";
import { Skeleton } from "@mui/material";
import { CustomButton } from "src/components/ActionBtn";
import { Tag } from "src/components/Badge";
import ImageComp from "src/components/Image";
import { useDispatch } from "react-redux";
import { setCurrentOrganization } from "src/features/organization/organizationSlice";

interface OrganisationProps {
  title: string;
  location: string;
  organisationLogo: string;
  type: string;
  id: string;
}

const Organisation = ({
  title,
  location,
  organisationLogo,
  type,
  id,
}: OrganisationProps) => {
  const dispatch = useDispatch();
  const text = (type = "Shipper/Receiver") => {
    if (type === "Shipper/Receiver") {
      return {
        text: "text-muftar-gray-700",
        background: "bg-muftar-gray-100",
      };
    }
    if (type === "Carrier") {
      return {
        text: "text-[#B93815]",
        background: "bg-[#FFF4ED]",
      };
    }
    if (type === "Broker") {
      return {
        text: "text-[#175CD3]",
        background: "bg-[#EFF8FF]",
      };
    }
  };

  const [joinOrganization, joinOrganizationResult] =
    useJoinOrganizationMutation();

  const handleRequest = async () => {
    const formData = { id };
    dispatch(setCurrentOrganization({ type: "Carrier" }));

    try {
      const joinOrganizationResponse =
        await joinOrganization(formData).unwrap();

      console.log(joinOrganizationResponse);

      if (
        joinOrganizationResponse.status === "success" &&
        joinOrganizationResponse.message === "joined organization successfully"
      ) {
        dispatch(setCurrentOrganization({ type }));
      }
      handleResponse(joinOrganizationResponse);

      // navigate("/dashboard/organisation");
    } catch (error: any) {
      handleResponse(error?.data);
      if (error?.data?.errors[0] === "The email has already been taken.") {
        // timeOutRedirect("/login");
      }
    }
  };

  return (
    <>
      {joinOrganizationResult?.isLoading ? (
        <Skeleton variant="rectangular" width={298} height={296} />
      ) : (
        <div className="flex flex-col items-center rounded-2xl bg-white pt-6">
          {organisationLogo ? (
            <ImageComp
              image={organisationLogo}
              styles="w-20 h-20 rounded-full object-cover"
            />
          ) : (
            <Skeleton variant="circular" width={80} height={80} />
          )}
          <div className="flex flex-col items-center gap-2 py-4">
            <p className="text-lg font-medium text-muftar-gray-800">{title}</p>
            <Tag
              text={type}
              background={text(type)?.background}
              color={text(type)?.text}
            />
          </div>
          <div className="flex items-center justify-center gap-2">
            <ImageComp image="/images/location.svg" />
            <p className="text-base text-muftar-gray-800">{location}</p>
          </div>
          <div className="w-full p-4">
            <CustomButton
              text="Join"
              className="w-full"
              onClick={handleRequest}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Organisation;
