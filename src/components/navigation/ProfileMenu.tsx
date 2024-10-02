import React from "react";
import ImageComp from "../Image";
import { useDispatch } from "react-redux";
import { logOut } from "../../features/auth/authSlice";
import { Link } from "react-router-dom";
import { persistor } from "src/store/store";

const ProfileMenu = () => {
  const dispatch = useDispatch();
  const [organisationMenu, setOrganisationMenu] = React.useState(false);

  const organisationMenuHandler = () => {
    setOrganisationMenu(!organisationMenu);
  };

  const logoutHandler = () => {
    dispatch(logOut());
    persistor.purge();
  };
  return (
    <div className="absolute left-0 top-[4rem] w-[240px] rounded-lg bg-white px-[6px] py-4 shadow-custom-shadow-100">
      <ul className="flex flex-col space-y-1">
        <li className="flex gap-2 p-2.5 pl-[18px]">
          <ImageComp image="/images/favicon.svg" />
          <span className="text-sm font-semibold">Mufatr Corp.</span>
        </li>
        <li>
          <span className="ml-[18px] w-[123px] rounded-2xl bg-app-gray-bg px-3 py-1 text-sm font-medium text-app-gray-300">
            Shipper / Receiver
          </span>
        </li>
        <li>
          <div
            className="flex cursor-pointer gap-2 p-2.5 hover:bg-[#F2F4F7]"
            onClick={organisationMenuHandler}
          >
            <ImageComp image="/images/switch.svg" />
            <span className="text-sm font-medium">Switch Organization</span>
            <ImageComp
              image="/images/arrow-down.svg"
              styles={`ml-auto ${organisationMenu && "rotate-180"}`}
            />
          </div>
          {organisationMenu && (
            <ul className="flex flex-col gap-4 bg-[#EAECF0] px-4 py-2 transition-all">
              <li className="flex cursor-pointer gap-2">
                <ImageComp image="/images/favicon.svg" />
                <span className="text-sm font-medium">Mufatr Corp.</span>
              </li>
              <li className="flex cursor-pointer gap-2">
                <ImageComp image="/images/favicon.svg" />
                <span className="text-sm font-medium">Mufatr Corp.</span>
              </li>
              <li className="flex cursor-pointer gap-2">
                <ImageComp image="/images/favicon.svg" />
                <span className="text-sm font-medium">Mufatr Corp.</span>
              </li>
            </ul>
          )}
        </li>
        <Link to={"/dashboard/organisation"}>
          <li className="flex cursor-pointer gap-2 p-2.5 hover:bg-[#F2F4F7]">
            <ImageComp image="/images/plus.svg" />
            <span className="text-sm font-medium">Create Organization</span>
          </li>
        </Link>
        {/* <li className="flex cursor-pointer gap-2 p-2.5 hover:bg-[#F2F4F7]">
          <ImageComp image="/images/user.svg" />
          <span className="text-sm font-medium">View profile</span>
        </li> */}
        <Link to={"/dashboard/account-settings"}>
          <li className="flex cursor-pointer gap-2 p-2.5 hover:bg-[#F2F4F7]">
            <ImageComp image="/images/settings.svg" />
            <span className="text-sm font-medium">Settings</span>
          </li>
        </Link>
        <Link to="/dashboard">
          <li className="flex cursor-pointer gap-2 p-2.5 hover:bg-[#F2F4F7]">
            <ImageComp image="/images/switch.svg" />
            <span className="text-sm font-medium">Switch to Home View.</span>
          </li>
        </Link>
        <li
          className="flex cursor-pointer gap-2 p-2.5 hover:bg-[#F2F4F7]"
          onClick={logoutHandler}
        >
          <ImageComp image="/images/logout.svg" />
          <span className="text-sm font-medium">Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default ProfileMenu;
