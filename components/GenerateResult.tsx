import React, { useState } from "react";
import Image from "next/image";
import ProgressBar from "./ProgressBar";
import { GenerateResultProps } from "@/types/GenerateResult-types";
import logo from "../assets/logo.png";

import placeholder from "../public/placeholder-image.png";
import { useTranslations } from "next-intl";

export default function GenerateResult({
  onGenerate,
  onGoToLanding,
  progress,
}: GenerateResultProps) {
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations("Question");

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onGenerate();
    }, 10000);
  };
  return (
    <div className="flex flex-col items-center justify-center h-[100dvh]">
      {isLoading ? (
        <div className="text-black space-y-5">
          <div className="animate-jump">
            <Image src={logo} width={100} alt="loading" />
          </div>
          <p>{t("loading")}...</p>
        </div>
      ) : (
        <div className="flex flex-col h-full">
          <ProgressBar progress={progress} onGoToLanding={onGoToLanding} />
          <div className="flex flex-col flex-1 items-center justify-center">
            <Image
              src={placeholder}
              height={250}
              width={250}
              alt="placeholder"
            />
            <button
              onClick={handleClick}
              className="bg-gray-200 text-black px-4 py-2 rounded mt-5"
            >
              {t("submit")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
