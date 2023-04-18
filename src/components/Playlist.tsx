import React from "react";

interface IPlaylist {
    label: string;
}

const Playlist: React.FC<IPlaylist> = ({label}) => {
  return (
    <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
      {label}
    </a>
  );
};

export default Playlist;
