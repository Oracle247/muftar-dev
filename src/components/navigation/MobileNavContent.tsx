import React, { useState } from "react";
import ImageComp from "../Image";

interface MenuItem {
  title: string;
  path: string;
}

interface MenuItem2 {
  title: string;
  image: string;
  path: string;
}

const MobileNavContent = () => {
  const [mobileNavProfile, setMobileNavProfile] = useState<Boolean>(false);
  const [openCommunityMenu, setCommunityMenu] = useState<Boolean>(false);
  const [openOrganisationMenu, setOrganisationMenu] = useState<Boolean>(false);
  const [organisationSwitchMenu, setOrganisationSwitchMenu] =
    useState<Boolean>(false);

  const toggleMobileProfile = () => {
    setMobileNavProfile(!mobileNavProfile);
  };

  const communityMenu: MenuItem[] = [
    {
      title: "Feed",
      path: "",
    },
    {
      title: "Polls & Surveys",
      path: "",
    },
    {
      title: "Events",
      path: "",
    },
  ];

  const organisationMenu: MenuItem2[] = [
    {
      path: "",
      image: "/images/favicon.svg",
      title: "Mufatr Corp.",
    },
    {
      path: "",
      image: "/images/favicon.svg",
      title: "Mufatr Corp.",
    },
    {
      path: "",
      image: "/images/favicon.svg",
      title: "Mufatr Corp.",
    },
  ];

  return (
    <div className="fixed left-0 z-40 h-screen w-full bg-[#F3F4F6] lg:hidden">
      <div className="mt-[4rem] flex justify-center">
        <div className="w-full max-w-[430px]">
          <div className="flex flex-col bg-white py-4">
            <div
              className="flex cursor-pointer items-center justify-between bg-app-gray-bg px-6 py-4"
              onClick={toggleMobileProfile}
            >
              <div className="flex items-center gap-4">
                <ImageComp image="/images/avatar.svg" styles="" />
                <p className="font-semibold text-app-gray-400">Mehmed Tiro.</p>
              </div>
              <ImageComp
                image="/images/arrow-down.svg"
                styles={`cursor-pointer ${mobileNavProfile && "rotate-180"}`}
              />
            </div>
            {mobileNavProfile && (
              <div className="bg-app-gray-700 flex cursor-pointer items-center gap-2 px-10 py-[9px]">
                <ImageComp image="/images/user.svg" />
                <span className="text-sm font-medium text-app-gray-500">
                  View profile
                </span>
              </div>
            )}
          </div>
          <div className="scroller h-[600px] overflow-y-auto overflow-x-hidden">
            <div className="bg-app-gray-800 flex flex-col gap-1 px-3 py-4 sm:px-5">
              <div className="rounded-lg bg-white p-4">
                <span className="text-app-gary-900 font-medium">Dashboard</span>
              </div>
              <div className="rounded-lg bg-white">
                <div
                  className="flex items-center justify-between px-4 pb-3 pt-4"
                  onClick={() => {
                    setCommunityMenu(!openCommunityMenu);
                  }}
                >
                  <span className="text-app-gary-900 font-medium">
                    Community
                  </span>
                  <ImageComp
                    image="/images/arrow-down.svg"
                    styles={`cursor-pointer ${openCommunityMenu && "rotate-180"}`}
                  />
                </div>
                {openCommunityMenu && (
                  <div className="bg-app-gray-700 flex flex-col gap-2 px-4">
                    {communityMenu.map((item, index: number) => (
                      <span key={index} className="text-app-gary-900 px-4 py-2">
                        {item.title}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="rounded-lg bg-white">
                <div
                  className="flex items-center justify-between px-4 pb-3 pt-4"
                  onClick={() => {
                    setOrganisationMenu(!openOrganisationMenu);
                  }}
                >
                  <span className="text-app-gary-900 font-medium">
                    Organisation
                  </span>
                  <ImageComp
                    image="/images/arrow-down.svg"
                    styles={`cursor-pointer ${openOrganisationMenu && "rotate-180"}`}
                  />
                </div>
                {openOrganisationMenu && (
                  <div className="bg-app-gray-700 flex flex-col gap-1 px-4">
                    <div className="flex items-center gap-2 px-6 py-2">
                      <ImageComp image="/images/favicon.svg" />
                      <span className="text-sm font-semibold">
                        Mufatr Corp.
                      </span>
                    </div>
                    <span className="ml-[18px] w-[147px] rounded-2xl bg-app-gray-bg px-3 py-1 text-sm font-medium text-app-gray-300">
                      Shipper / Receiver
                    </span>
                    <div
                      className="flex items-center gap-2 px-4 py-[9px]"
                      onClick={() =>
                        setOrganisationSwitchMenu(!organisationSwitchMenu)
                      }
                    >
                      <ImageComp image="/images/switch.svg" />
                      <span className="text-sm font-medium">
                        Switch Organization
                      </span>
                      <ImageComp
                        image="/images/arrow-down.svg"
                        styles={`ml-auto ${organisationSwitchMenu && "rotate-180"} cursor-pointer`}
                      />
                    </div>
                    {organisationSwitchMenu && (
                      <ul className="mb-2 flex flex-col gap-4 bg-[#EAECF0] px-4 py-2 transition-all">
                        {organisationMenu.map((item, index: number) => (
                          <li key={index} className="flex cursor-pointer gap-2">
                            <ImageComp image={item?.image} />
                            <span className="text-sm font-medium">
                              {item?.title}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="flex cursor-pointer gap-2 px-4 py-[11px] hover:bg-[#F2F4F7]">
                      <ImageComp image="/images/plus.svg" />
                      <span className="text-sm font-medium">
                        Create Organization
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div className="rounded-lg bg-white p-4">
                <span className="text-app-gary-900 font-medium">Job Board</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 px-5">
              <div className="flex items-center gap-2.5 rounded-lg bg-white px-4 py-2">
                <ImageComp image="/images/menu-message.svg" styles="p-2.5" />
                <span className="text-app-gary-900 font-medium">Messages</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-lg bg-white px-4 py-2">
                <ImageComp image="/images/notification.svg" styles="p-2.5" />
                <span className="text-app-gary-900 font-medium">
                  Notifications
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 px-5 pt-6">
              <div className="flex items-center gap-2.5 rounded-lg bg-white px-1.5 py-2">
                <ImageComp image="/images/settings.svg" styles="p-2.5" />
                <span className="text-app-gary-900 font-medium">Settings</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-lg bg-white px-1.5 py-2">
                <ImageComp image="/images/logout.svg" styles="p-2.5" />
                <span className="text-app-gary-900 font-medium">Logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavContent;
