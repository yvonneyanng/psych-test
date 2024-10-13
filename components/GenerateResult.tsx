import React, { useState } from "react";
import Image from "next/image";
import ProgressBar from "./ProgressBar";
import { GenerateResultProps } from "@/types/GenerateResult-types";
import { useTranslations } from "next-intl";

import logo from "@/assets/logo.png";
import kangarooPFP from "@/assets/results/kangaroo-pfp.png";
import koalaPFP from "@/assets/results/koala-pfp.png";
import platypusPFP from "@/assets/results/platypus-pfp.png";
import wombatPFP from "@/assets/results/wombat-pfp.png";

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
    }, 1500);
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
        <div className="flex flex-col h-full justify-start items-center z-10 md:pt-20">
          <ProgressBar progress={progress} onGoToLanding={onGoToLanding} />
          <div className="mt-14 flex flex-col justify-start items-center max-w-xs">
            <div className="flex">
              <Image src={platypusPFP} alt="logo" width={60} />
              <Image src={kangarooPFP} alt="logo" width={60} />
              <Image src={koalaPFP} alt="logo" width={55} />
              <Image src={wombatPFP} alt="logo" width={60} />
            </div>
            <p className="w-[70dvw] flex flex-col items-center justify-center rounded-lg p-4 space-y-1 bg-white bg-opacity-70 text-center text-md font-normal text-normal whitespace-pre-wrap max-w-xs">
              {t("ending")}
            </p>
            <button
              onClick={handleClick}
              className="bg-white text-xl text-black px-6 py-3 rounded-full mt-7 shadow-[2px_2px_2px_0px_rgba(0,0,0,0.4)]"
            >
              {t("submit")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
