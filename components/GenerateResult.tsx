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
    }, 2000);
  };
  return (
    <div className="relative flex flex-col items-center justify-start h-[100dvh] max-w-screen-xs">
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{ backgroundImage: `url('questionBG.png')` }}
      ></div>
      {isLoading ? (
        <div className="text-black space-y-5 z-10 h-full flex flex-col  items-center justify-center">
          <div className="animate-jump">
            <Image src={logo} width={100} alt="loading" />
          </div>
          <p>{t("loading")}...</p>
        </div>
      ) : (
        <div className="flex flex-col h-full z-10 md:pt-20">
          <ProgressBar progress={progress} onGoToLanding={onGoToLanding} />
          <div className="flex flex-col flex-1 items-center justify-center">
            <Image
              src={placeholder}
              height={250}
              width={250}
              alt="placeholder"
              className="rounded-xl"
            />
            <button
              onClick={handleClick}
              className="bg-white text-xl text-black px-6 py-3 rounded-full mt-5 shadow-[2px_2px_2px_0px_rgba(0,0,0,0.4)]"
            >
              {t("submit")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
