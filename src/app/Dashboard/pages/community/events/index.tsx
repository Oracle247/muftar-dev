import Badge from "../../../../../components/Badge";
import ActionBtn, {
  ActionBtnSecondary,
} from "../../../../../components/ActionBtn";
import ImageComp from "../../../../../components/Image";
import NavBar from "../../../../../components/navigation/NavBar";
import React, { useState } from "react";
import CommentCard from "../components/CommentCard";
import TrendCard from "../components/TrendCard";
import Announcement from "../components/Announcement";
import FilterTab from "../components/FilterTab";

const Events = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <NavBar>
      <section className="h-full w-full bg-app-gray-bg px-4 pt-10 md:px-16">
        <FilterTab title="Events" openModal={() => setIsOpen(true)} />
        <div className="flex h-screen w-full gap-20 overflow-y-hidden">
          <div className="flex h-full w-full max-w-[45rem] flex-none flex-col space-y-10 overflow-y-auto no-scrollbar">
            <CommentCard />
            <CommentCard />
            <CommentCard />
          </div>
          <div className="flex flex-grow flex-col overflow-auto">
            <div className="flex w-full flex-col space-y-10 overflow-y-auto no-scrollbar">
              <div className="scroller flex max-h-[464px] flex-col space-y-6 rounded-2xl bg-white p-6 text-base font-semibold text-app-gray-400">
                <span className="block">Recent Announcements</span>
                <Announcement />
                <Announcement />
                <Announcement />
                <Announcement />
                <Announcement />
                <Announcement />
              </div>
            </div>
          </div>
        </div>
      </section>
    </NavBar>
  );
};

export default Events;
