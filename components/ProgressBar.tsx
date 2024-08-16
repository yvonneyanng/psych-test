import React from "react";
import Image from "next/image";

import home from "../public/home-icon.png";

const ProgressBar = ({
  onGoToLanding,
  progress,
}: {
  onGoToLanding: () => void;
  progress: number;
}) => {
  return (
    <div className="flex items-center w-80 space-x-5">
      <div className="h-6 bg-zinc-200 rounded-full w-full">
        <div
          className="h-6 bg-zinc-500 rounded-full"
          style={{ width: `${progress}%` }} // Set the width based on progress
        ></div>
      </div>
      <button onClick={onGoToLanding}>
        <Image src={home} height={35} width={35} alt="Home" />
      </button>
    </div>
  );
};

export default ProgressBar;
