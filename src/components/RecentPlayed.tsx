import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

const RecentTracks: React.FC = () => {
  return (
    <a className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
      <Image
        src="/golden_hour.jpg"
        width={104}
        height={104}
        alt="Álbum image"
      />
      <strong>this is what falling in love feels like</strong>
      <button className="invisible group-hover:visible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8">
        <Play className="fill-black" size={20} />
      </button>
    </a>
  );
};

export default RecentTracks;
