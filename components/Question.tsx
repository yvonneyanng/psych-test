import React from "react";
import Image from "next/image";
import ProgressBar from "./ProgressBar";
import { QuestionProps } from "@/types/Question-types";
import { useTranslations } from "next-intl";
import { IoIosArrowBack } from "react-icons/io";

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
    <div className="relative flex flex-col items-center justify-start min-h-[100dvh] max-w-screen-xs md:pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('questionBG.png')` }}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-start space-y-3">
        <ProgressBar onGoToLanding={onGoToLanding} progress={progress} />
        <button
          onClick={onGoBack}
          className={`flex w-[75dvw] max-w-xs items-center ${
            isFirstQuestion ? "invisible" : ""
          }`}
          disabled={isFirstQuestion}
        >
          <IoIosArrowBack size={20} />
          <p className="text-black text-sm">{t("goback")}</p>
        </button>
        <div className="flex flex-col flex-1 items-center justify-start space-y-5">
          <p className="text-lg text-center font-medium w-[75dvw] max-w-xs whitespace-pre-wrap leading-tight mt-1 bg-white bg-opacity-50 py-3 rounded-lg border border-primary">
            Q{id + 1}. {question}
          </p>
          <Image
            src={image}
            height={170}
            className="rounded-xl"
            alt="Plot Image"
          />
          <div className="flex flex-col w-[75dvw] max-w-xs">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => onAnswer(index)}
                className="bg-white text-black px-4 h-12 mb-4 rounded-lg hover:bg-zinc-200 text-sm whitespace-pre-wrap leading-tight shadow-[2px_2px_2px_0px_rgba(0,0,0,0.4)]"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
