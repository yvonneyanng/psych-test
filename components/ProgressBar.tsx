import React from "react";
import Image from "next/image";
import { ProgressBarProps } from "@/types/ProgressBar-types";

import home from "../public/home-icon.png";

const ProgressBar = ({ onGoToLanding, progress }: ProgressBarProps) => {
  return (
    <div className="flex items-center w-[85dvw] space-x-5 mt-14">
      <div className="h-6 bg-zinc-200 rounded-full w-full">
        <div
          className="h-6 bg-neutral-500 rounded-full shadow-[inset_4px_-4px_5px_rgba(0,0,0,0.3)]"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <button onClick={onGoToLanding}>
        <Image src={home} height={35} width={35} alt="Home" />
      </button>
    </div>
  );
};

export default ProgressBar;
