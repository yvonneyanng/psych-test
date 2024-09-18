import React from "react";
import { ProgressBarProps } from "@/types/ProgressBar-types";
import { RiHome4Fill } from "react-icons/ri";

const ProgressBar = ({ onGoToLanding, progress }: ProgressBarProps) => {
  return (
    <div className="flex items-center w-[75dvw] space-x-5 mt-8 max-w-xs">
      <div className="h-6 bg-white rounded-full w-full shadow-[inset_1px_1px_1px_rgba(254,148,132,0.7),inset_-1px_-1px_1px_rgba(254,148,132,0.7)]">
        <div
          className="h-6 bg-primary rounded-full shadow-[inset_4px_-4px_5px_rgba(0,0,0,0.3)]"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <button onClick={onGoToLanding}>
        <RiHome4Fill
          size={30}
          color="white"
          style={{ filter: "drop-shadow(1px 1px 1px rgba(254,148,132,1))" }}
        />
      </button>
    </div>
  );
};

export default ProgressBar;
