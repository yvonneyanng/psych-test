import React, { useState } from "react";
import Image from "next/image";
import ProgressBar from "./ProgressBar";

import placeholder from "../public/placeholder-image.png";

export default function GenerateResult({
  onGenerate,
  onGoToLanding,
  progress,
}: {
  onGenerate: () => void;
  onGoToLanding: () => void;
  progress: number;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onGenerate();
    }, 2000);
  };
  return (
    <div className="flex flex-col pt-14 items-center justify-center h-screen bg-zinc-400">
      {isLoading ? (
        <div className="text-black">正在分析...</div>
      ) : (
        <div className="flex flex-col h-full">
          <ProgressBar progress={progress} onGoToLanding={onGoToLanding} />
          <div className="flex flex-col flex-1 items-center justify-center space-y-20">
            <Image
              src={placeholder}
              height={250}
              width={150}
              alt="placeholder"
            />
            <button
              onClick={handleClick}
              className="bg-gray-200 text-black px-4 py-2 rounded mt-5"
            >
              查看測驗結果
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
