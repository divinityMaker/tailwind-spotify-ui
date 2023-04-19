import { Play } from "lucide-react";
import Image from "next/image";

interface IPlaylistCard {
  title: string;
  artists?: string;
  image?: string;
  horizontal?: boolean;
}

const PlaylistCard: React.FC<IPlaylistCard> = ({
  title,
  artists,
  image,
  horizontal,
}) => {
  return (
    <a
      className={`  
            cursor-pointer
            bg-white/5
            group
            overflow-hidden
            flex
            transition-colors
            hover:bg-white/10
            ${horizontal ? "items-center" : ""}
            ${horizontal ? "pr-4" : "p-4"}
            ${horizontal ? "rounded" : "rounded-md"}
            ${horizontal ? "gap-4" : "gap-2"}
            ${horizontal ? "flex-row" : "flex-col"}
            ${horizontal ? "max-h-[4.5rem]" : ""}
        `}
    >
      <Image
        src={`${image ? image : "/golden_hour.jpg"}`}
        width={`${horizontal ? "72" : "180"}`}
        height={`${horizontal ? "72" : "180"}`}
        alt="Álbum image"
        className={`
          ${horizontal ? "" : "rounded"}
        `}
      />
      <strong className="font-semibold">{title}</strong>
      {horizontal ? (
        <button className="invisible 2xl:group-hover:visible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-4">
          <Play className="fill-black" size={20} />
        </button>
      ) : (
        <span className="text-sm text-zinc-400">{artists ? artists : "JVKE"}</span>
      )}
    </a>
  );
};

export default PlaylistCard;
