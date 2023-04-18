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
            ${horizontal ? "pr-4" : "p-3"}
            ${horizontal ? "rounded" : "rounded-md"}
            ${horizontal ? "gap-4" : "gap-2"}
            ${horizontal ? "flex-row" : "flex-col"}
            ${horizontal ? "max-h-[4.5rem]" : ''}
        `}
    >
      <Image
        src="/golden_hour.jpg"
        width={`${horizontal ? "72" : "120"}`}
        height={`${horizontal ? "72" : "120"}`}
        alt="Álbum image"
        className={`${horizontal ? '' : 'w-full'}`}
      />
      <strong className="font-semibold">{title}</strong>
      {/* Máximo de 45 caracteres */}
      {!horizontal && <span className="text-sm text-zinc-400">JVKE</span>}
    </a>
  );
};

export default PlaylistCard;
