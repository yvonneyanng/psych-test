import React from "react";
import Image from "next/image";
import ProgressBar from "./ProgressBar";

import sampleImage from "../public/placeholder-image.png";
import back from "../public/back-icon.png";

export default function Question({
  question,
  options,
  onAnswer,
  onGoBack,
  onGoToLanding,
  isFirstQuestion,
  progress,
}: {
  question: string;
  options: string[];
  onAnswer: (index: number) => void;
  onGoBack: () => void;
  onGoToLanding: () => void;
  isFirstQuestion: boolean;
  progress: number;
}) {
  return (
    <div className="flex flex-col items-center justify-start pt-14 h-screen bg-zinc-400">
      <ProgressBar onGoToLanding={onGoToLanding} progress={progress} />
      <button
        onClick={onGoBack}
        className={`flex w-80 items-center mt-5 ${
          isFirstQuestion ? "invisible" : ""
        }`}
        disabled={isFirstQuestion}
      >
        <Image
          src={back}
          height={30}
          width={30}
          alt="Back"
          className="filter invert"
        />
        <p className="text-white text-sm">回上一題</p>
      </button>
      <div className="flex flex-col flex-1 items-center justify-start space-y-10">
        <p className="text-lg font-semibold mt-10">{question}</p>
        <Image src={sampleImage} height={250} width={150} alt="Plot Image" />
        <div className="flex flex-col space-y-5">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(index)}
              className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300 w-60"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
