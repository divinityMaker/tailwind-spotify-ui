import React from "react";

import Image from "next/image";

const MadeFor: React.FC = () => {
  return (
    <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
      <Image
        src="/golden_hour.jpg"
        width={120}
        height={120}
        alt="Álbum image"
        className="w-full"
      />
      <strong className="font-semibold">
        Daily Mix 1
      </strong>
      <span className="text-sm text-zinc-400">
        JVKE
      </span>
    </a>
  );
};

export default MadeFor;
