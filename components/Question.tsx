import React from "react";
import Image from "next/image";
import ProgressBar from "./ProgressBar";
import { QuestionProps } from "@/types/Question-types";
import back from "../assets/back-icon.png";
import { useTranslations } from "next-intl";

export default function Question({
  question,
  id,
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
    <div className="flex flex-col items-center justify-start h-min-[100svh] pb-5 max-w-screen-xs md:pt-20">
      <ProgressBar onGoToLanding={onGoToLanding} progress={progress} />
      <button
        onClick={onGoBack}
        className={`flex w-[85dvw] max-w-xs items-center mt-3 ${
          isFirstQuestion ? "invisible" : ""
        }`}
        disabled={isFirstQuestion}
      >
        <Image
          src={back}
          height={25}
          width={25}
          alt="Back"
          className="filter invert"
        />
        <p className="text-white text-sm">{t("goback")}</p>
      </button>
      <div className="flex flex-col flex-1 items-center justify-start space-y-5">
        <p className="text-lg text-center font-medium mt-5 w-[70dvw] whitespace-pre-wrap leading-tight">
          Q{id + 1}. {question}
        </p>
        <Image
          src={image}
          height={200}
          className="rounded-xl"
          alt="Plot Image"
        />
        <div className="flex flex-col w-[75dvw] max-w-xs">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(index)}
              className="bg-gray-200 text-black px-4 h-12 mb-3 rounded-lg hover:bg-gray-300  text-sm whitespace-pre-wrap leading-tight"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
