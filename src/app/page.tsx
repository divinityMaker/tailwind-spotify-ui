import MadeFor from "@/components/MadeFor";
import RecentTracks from "@/components/RecentPlayed";
import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Maximize2,
  Volume,
} from "lucide-react";

import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
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
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 1
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 2
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 3
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 4
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 5
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 6
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 7
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 8
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 9
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 10
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 11
            </a>
          </nav>
        </aside>
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

          <div className="grid grid-cols-3 gap-4 mt-4">
            <RecentTracks />
            <RecentTracks />
            <RecentTracks />
            <RecentTracks />
            <RecentTracks />
            <RecentTracks />
          </div>

          <h2 className="font-semibold text-3xl mt-10">
            Made for Gabriel Maker
          </h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <MadeFor />
            <MadeFor />
            <MadeFor />
            <MadeFor />
            <MadeFor />
            <MadeFor />
            <MadeFor />
          </div>
        </main>
      </div>
      <footer className="bg-zinc-750 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/golden_hour.jpg"
            width={56}
            height={56}
            alt="Álbum image"
          />
          <div className="flex flex-col">
            <strong className="font-normal">golden hour</strong>
            <span className="text-xs text-zinc-400">JVKE</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle className="text-zinc-200" size={20} />
            <SkipBack className="text-zinc-200" size={20} />

            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black ml-auto">
              <Play className="fill-black" size={20} />
            </button>

            <SkipForward className="text-zinc-200" size={20} />
            <Repeat className="text-zinc-200" size={20} />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="h-1 rounded-full w-[32rem] bg-zinc-600">
              <div className="bg-zinc-200 w-16 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">3:29</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />

          <div className="flex items-center gap-2">
            <Volume size={20} />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
            </div>
          </div>
          <Maximize2 size={20} />
        </div>
      </footer>
    </div>
  );
}
