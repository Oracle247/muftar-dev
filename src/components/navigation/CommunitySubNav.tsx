import React from "react";
import CommunityMenuSearch from "./CommunityMenuSearch";
import { Link, useLocation } from "react-router-dom";

interface MenuItem {
  title: string;
  path: string;
}

const CommunitySubNav = () => {
  const location = useLocation();
  const communitySubMenu: MenuItem[] = [
    {
      title: "Feed",
      path: "/dashboard/community/feed",
    },
    {
      title: "Polls & Surveys",
      path: "/dashboard/community/polls-surveys",
    },
    {
      title: "Events",
      path: "/dashboard/community/events",
    },
  ];

  return (
    <div className="hidden items-center justify-between bg-white px-10 py-2 lg:flex lg:px-20">
      <ul className="flex items-center gap-1">
        {communitySubMenu.map((item, index: number) => (
          <li
            key={index}
            className={`${item.path === location?.pathname ? "bg-app-gray-700 text-app-blue-100" : "bg-white text-app-gray-300"} rounded-md px-3 py-2 font-semibold transition-colors hover:bg-app-gray-700 hover:text-app-blue-100`}
          >
            <Link to={item?.path}>{item?.title}</Link>
          </li>
        ))}
      </ul>

      <div className="w-full max-w-[480px]">
        <CommunityMenuSearch />
      </div>
    </div>
  );
};

export default CommunitySubNav;
