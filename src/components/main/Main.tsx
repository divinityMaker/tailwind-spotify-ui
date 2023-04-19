import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import PlaylistCard from "../PlaylistCard";

const Main: React.FC = () => {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-center gap-4">
        <button className="rounded-full bg-black/40 p-1">
          <ChevronLeft />
        </button>
        <button className="rounded-full bg-black/40 p-1">
          <ChevronRight />
        </button>
      </div>

      <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

      <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
        <PlaylistCard title="this is what falling in love fells like" horizontal/>
        <PlaylistCard title="this is what falling in love fells like" horizontal/>
        <PlaylistCard title="this is what falling in love fells like" horizontal/>
        <PlaylistCard title="this is what falling in love fells like" horizontal/>
        <PlaylistCard title="this is what falling in love fells like" horizontal/>
        <PlaylistCard title="this is what falling in love fells like" horizontal/>
      </div>

      <h2 className="font-semibold text-3xl mt-10">Made for Gabriel Maker</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-4 mt-4">
        <PlaylistCard title="Daily Mix 1" />
        <PlaylistCard title="Daily Mix 2" />
        <PlaylistCard title="Daily Mix 3" />
        <PlaylistCard title="Daily Mix 4" />
        <PlaylistCard title="Daily Mix 5" />
        <PlaylistCard title="Daily Mix 6" />
        <PlaylistCard title="Daily Mix 7" />
      </div>
    </main>
  );
};

export default Main;
