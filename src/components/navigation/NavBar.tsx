import React, { useEffect, useState } from "react";
import ImageComp from "../Image";
import { Link, useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import MobileNavContent from "./MobileNavContent";
import MobileNav from "./MobileNav";
import CommunitySubNav from "./CommunitySubNav";
import MuftarCreditSubNav from "./MuftarCreditSubNav";
import Notifications from "./Notifications";
import OrganisationManagementSubNav from "./OrganisationManagementSubNav";
import OrganisationResourcesSubnav from "./OrganisationOperations";
import useAuth from "src/hooks/useAuth";
import { useGetProfileQuery } from "src/api/profileSlice";
import { Skeleton, Stack } from "@mui/material";
import { imageUrlMerger } from "src/helpers/helperFunction";
import { useGetWalletBalanceQuery } from "src/api/creditSlice";

interface NavProps {
  children: React.ReactNode;
}

// Define the type for individual menu items
interface MenuItem {
  title: string;
  path: string;
}

interface MenuItem3 {
  image: string;
  path: string;
}

const NavBar = ({ children }: NavProps) => {
  const { user } = useAuth();
  const { data: walletData, isLoading: walletIsLoading } =
    useGetWalletBalanceQuery(user?.id);
  const { data, isLoading } = useGetProfileQuery(user?.id);

  const location = useLocation();
  const [openProfileMenu, setOpenProfileMenu] = useState<Boolean>(false);
  useState<Boolean>(false);
  const [mobileNav, setMobileNav] = useState<Boolean>(false);
  const [subNav, setSubNav] = useState<Boolean>(false);
  const [showNotifications, setShowNotifications] = useState<Boolean>(false);

  useEffect(() => {
    if (location?.pathname.includes("/dashboard/community")) setSubNav(true);
    if (location?.pathname.includes("/dashboard/muftar-credit"))
      setSubNav(true);
    if (location?.pathname.includes("/dashboard/organisation/management"))
      setSubNav(true);
    if (location?.pathname.includes("/dashboard/organisation/operations"))
      setSubNav(true);
  }, []);

  const toggleMobileNavigation = () => {
    setMobileNav(!mobileNav);
  };

  const profileMenuHandler = () => {
    setOpenProfileMenu(!openProfileMenu);
  };

  const mainMenu: MenuItem[] = [
    // {
    //   title: "Dashboard",
    //   path: "/dashboard",
    // },
    {
      title: "Community",
      path: "/dashboard/community",
    },
    {
      title: "Job Board",
      path: "/dashboard/job-board",
    },
  ];

  const organisationMenu: MenuItem[] = [
    {
      title: "Management",
      path: "/dashboard/organisation/management",
    },
    {
      title: "Human Resources",
      path: "/dashboard/organisation/human-resources",
    },
    {
      title: "Operations",
      path: "/dashboard/organisation/operations",
    },
  ];

  const menu2: MenuItem3[] = [
    {
      path: "/dashboard/messages",
      image: "/images/mail.svg",
    },
    // {
    //   path: "/dashboard/notification",
    //   image: "/images/notification.svg",
    // },
  ];

  console.log(walletData);

  return (
    <>
      <nav className="body-size z-40 hidden w-full max-w-screen-2xl bg-white lg:fixed lg:block">
        <div className="flex items-center justify-between border-b border-[#EAECF0] px-10 py-4 lg:px-20">
          <div className="flex items-center gap-10">
            <ImageComp image="/images/logo.svg" width={123} height={28} />
            <div className="flex">
              <ul className="flex items-center gap-1">
                {!location?.pathname.includes("/dashboard/organisation") && (
                  <Link to="/dashboard">
                    <li
                      className={`${location?.pathname === "/dashboard" ? "bg-[#3A54B4] text-white" : "text-app-gray-300"} cursor-pointer rounded-md px-3 py-2 text-base font-semibold transition-colors hover:bg-[#3A54B4] hover:text-white`}
                    >
                      Dashboard
                    </li>
                  </Link>
                )}
                {!location?.pathname.includes("/dashboard/organisation")
                  ? mainMenu.map((menu, index) => (
                      <Link to={menu?.path}>
                        <li
                          key={index}
                          className={`${location?.pathname.includes(menu?.path) ? "bg-[#3A54B4] text-white" : "text-app-gray-300"} cursor-pointer rounded-md px-3 py-2 text-base font-semibold transition-colors hover:bg-[#3A54B4] hover:text-white`}
                        >
                          {menu?.title}
                        </li>
                      </Link>
                    ))
                  : organisationMenu.map((menu, index) => (
                      <Link to={menu?.path}>
                        <li
                          key={index}
                          className={`${location?.pathname.includes(menu?.path) ? "bg-[#3A54B4] text-white" : "text-app-gray-300"} cursor-pointer rounded-md px-3 py-2 text-base font-semibold transition-colors hover:bg-[#3A54B4] hover:text-white`}
                        >
                          {menu?.title}
                        </li>
                      </Link>
                    ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-10">
            {walletIsLoading ? (
              <Skeleton variant="rounded" width={91} height={40} />
            ) : (
              <Link to="/dashboard/muftar-credit">
                <div className="flex items-center gap-2 rounded-[80px] bg-[#FEF0C7] px-3 py-2.5">
                  <ImageComp image="/images/coin.svg" width={20} height={20} />
                  <p className="text-base font-semibold text-[#7A2E0E]">
                    {walletData?.data?.Credit_balance}k
                  </p>
                </div>
              </Link>
            )}
            <div className="relative flex items-center gap-4">
              <div className="flex items-center gap-2">
                {menu2?.map((menu, index) => (
                  <Link to={menu?.path} key={index}>
                    <ImageComp
                      image={menu?.image}
                      styles={`${location?.pathname === menu?.path && "bg-[#F2F4F7]"} p-2.5 cursor-pointer rounded-md hover:bg-[#F2F4F7] transition-colors`}
                    />
                  </Link>
                ))}
                <ImageComp
                  image="/images/notification.svg"
                  handleClick={() => setShowNotifications(!showNotifications)}
                  styles={`${showNotifications && "bg-[#F2F4F7]"} p-2.5 cursor-pointer rounded-md hover:bg-[#F2F4F7] transition-colors`}
                />
              </div>
              {showNotifications && (
                <div className="absolute right-0 top-[5rem]">
                  <Notifications
                    handleClose={() => setShowNotifications(false)}
                  />
                </div>
              )}
              <div className="relative">
                {isLoading ? (
                  <Stack>
                    <Skeleton variant="rounded" width={215} height={56} />
                  </Stack>
                ) : (
                  <div
                    className="flex cursor-pointer items-center gap-4 rounded-[50px] bg-[#F2F4F7] px-4 py-2"
                    onClick={profileMenuHandler}
                  >
                    {data?.data?.user?.profile_pix ? (
                      <ImageComp
                        image={imageUrlMerger(data?.data?.user?.profile_pix)}
                        styles="rounded-full object-cover h-10 w-10"
                      />
                    ) : (
                      <ImageComp
                        image="/images/avatar.svg"
                        styles="rounded-full object-cover h-10 w-10"
                      />
                    )}

                    <p className="text-base font-semibold text-app-gray-400">
                      {`${data?.data?.user?.first_name} .${data?.data?.user?.last_name?.charAt(0)}`}
                    </p>
                    <ImageComp
                      image="/images/arrow-down.svg"
                      styles="cursor-pointer"
                    />
                  </div>
                )}
                {openProfileMenu && <ProfileMenu />}
              </div>
            </div>
          </div>
        </div>
        {location?.pathname.includes("/dashboard/community") && (
          <CommunitySubNav />
        )}
        {location?.pathname.includes("/dashboard/muftar-credit") && (
          <MuftarCreditSubNav />
        )}
        {location?.pathname.includes("/dashboard/organisation/management") && (
          <OrganisationManagementSubNav />
        )}
        {location?.pathname.includes("/dashboard/organisation/operations") && (
          <OrganisationResourcesSubnav />
        )}
      </nav>

      <MobileNav isOpen={mobileNav} handleChange={toggleMobileNavigation} />
      {mobileNav && <MobileNavContent />}
      <div className={`${subNav ? "pt-[88px] lg:pt-[150px]" : "pt-[88px]"}`}>
        {children}
      </div>
    </>
  );
};

export default NavBar;
