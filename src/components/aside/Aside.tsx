import { HomeIcon, Search, Library } from "lucide-react";

import React from "react";
import Playlist from "../Playlist";

const Aside: React.FC = () => {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <nav className="space-y-5 mt-10">
        <a
          href="#"
          className="flex flex-row items-center gap-3 text-sm font-semibold text-zinc-300 hover:text-zinc-50"
        >
          <HomeIcon />
          Home
        </a>
        <a
          href="#"
          className="flex flex-row items-center gap-3 text-sm font-semibold text-zinc-300 hover:text-zinc-50"
        >
          <Search />
          Search
        </a>
        <a
          href="#"
          className="flex flex-row items-center gap-3 text-sm font-semibold text-zinc-300 hover:text-zinc-50"
        >
          <Library />
          Your Library
        </a>
      </nav>

      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
        <Playlist label={"Playlist"} />
        <Playlist label={"Playlist"} />
        <Playlist label={"Playlist"} />
        <Playlist label={"Playlist"} />
        <Playlist label={"Playlist"} />
        <Playlist label={"Playlist"} />
        <Playlist label={"Playlist"} />
        <Playlist label={"Playlist"} />
      </nav>
    </aside>
  );
};

export default Aside;
