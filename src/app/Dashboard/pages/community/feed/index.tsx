import { useState } from "react";
import NavBar from "src/components/navigation/NavBar";
import CommentCard from "../components/CommentCard";
import TrendCard from "../components/TrendCard";
import FilterTab from "../components/FilterTab";
import CreatePost from "../components/CreatePost";

const Feed = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <NavBar>
      <CreatePost isOpen={isOpen} closeModal={() => setIsOpen(false)} />
      <section className="h-full w-full bg-app-gray-bg px-4 pt-10 md:px-16">
        <FilterTab title="Feed" openModal={() => setIsOpen(true)} />
        <div className="flex h-screen w-full gap-20 overflow-y-hidden">
          <div className="flex h-full w-full max-w-[45rem] flex-none flex-col space-y-10 overflow-y-auto no-scrollbar">
            <CommentCard />
            <CommentCard />
            <CommentCard />
          </div>
          <div className="flex flex-grow flex-col overflow-auto">
            <div className="flex w-full flex-col space-y-10 overflow-y-auto no-scrollbar">
              <div className="scroller flex h-[484px] flex-col space-y-6 rounded-2xl bg-white p-6 text-base font-semibold text-app-gray-400">
                <span className="block">Trending polls</span>
                <TrendCard />
                <TrendCard />
                <TrendCard />
                <TrendCard />
                <div className="flex justify-end">
                  <button className="rounded-lg border border-app-gray-1100 px-3.5 py-2 text-sm font-semibold text-app-gray-300">
                    View more
                  </button>
                </div>
              </div>
              <div className="scroller flex h-[484px] flex-col space-y-6 rounded-2xl bg-white p-6 text-base font-semibold text-app-gray-400">
                <span className="block">Trending events</span>
                <TrendCard />
                <TrendCard />
                <TrendCard />
                <TrendCard />
                <div className="flex justify-end">
                  <button className="rounded-lg border border-app-gray-1100 px-3.5 py-2 text-sm font-semibold text-app-gray-300">
                    View more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </NavBar>
  );
};

export default Feed;
