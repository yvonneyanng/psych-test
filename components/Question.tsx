import React from "react";
import Image from "next/image";
import ProgressBar from "./ProgressBar";
import { QuestionProps } from "@/types/Question-types";
import back from "../public/back-icon.png";
import { useTranslations } from "next-intl";

export default function Question({
  question,
  image,
  options,
  onAnswer,
  onGoBack,
  onGoToLanding,
  isFirstQuestion,
  progress,
}: QuestionProps) {
  const t = useTranslations("Question");

  return (
    <div className="flex flex-col items-center justify-start h-[100dvh]">
      <ProgressBar onGoToLanding={onGoToLanding} progress={progress} />
      <button
        onClick={onGoBack}
        className={`flex w-[85dvw] items-center mt-5 ${
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
        <p className="text-white text-sm">{t("goback")}</p>
      </button>
      <div className="flex flex-col flex-1 items-center justify-start space-y-10">
        <p className="text-lg text-center font-semibold mt-5 w-[85dvw]">
          {question}
        </p>
        <Image src={image} width={250} className="rounded" alt="Plot Image" />
        <div className="flex flex-col">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(index)}
              className="bg-gray-200 text-black px-4 py-2 mb-5 rounded hover:bg-gray-300 w-[80dvw]"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
