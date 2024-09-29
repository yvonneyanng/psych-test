import React from "react";
import ProgressBar from "./ProgressBar";
import { DescriptionProps } from "@/types/Description-types";
import { useTranslations } from "next-intl";

export default function Description({
  progress,
  onGoToLanding,
  onStartQuiz,
}: DescriptionProps) {
  const t = useTranslations("Landing");
  return (
    <div className="relative flex flex-col items-center justify-start min-h-[100dvh] max-w-screen-xs md:pt-20 bg-custom">
      <div className="relative z-10 flex flex-col items-center justify-start space-y-3">
        <ProgressBar progress={progress} onGoToLanding={onGoToLanding} />
        <div className="flex flex-col flex-1 items-center justify-center">
          <div className="bg-zinc-300 h-64 w-60 flex justify-center items-center">
            {t("description")}
          </div>
          <button
            onClick={onStartQuiz}
            className="bg-zinc-300 text-xl text-black px-6 py-3 rounded-full mt-5"
          >
            {t("startButton")}
          </button>
        </div>
      </div>
    </div>
  );
}
