"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { ResultProps } from "@/types/Result-types";
import Subscribe from "./Subscribe";
import Socials from "./Socials";
import ResultImage from "./ResultImage";

export default function Result({ onRestart, result, percentage }: ResultProps) {
  const [linkCopied, setLinkCopied] = useState(false);
  const t = useTranslations("Result");

  const handleCopyLink = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        setLinkCopied(true);
        setTimeout(() => setLinkCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const backgroundClass = () => {
    switch (result) {
      case 0:
        return "border-type1";
      case 1:
        return "border-type2";
      case 2:
        return "border-type3";
      case 3:
        return "border-type4";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col items-center justify-start max-w-screen-xs md:py-20 bg-zinc-400 overflow-y-visible pb-10">
      <ResultImage
        result={result}
        percentage={percentage}
        bgColor={backgroundClass()}
      />
      <div className="flex flex-col w-[80dvw] mt-5 justify-between space-y-4 max-w-xs">
        <p
          className={`text-center p-1 border-2 text-xs font-semibold bg-white rounded-md ${backgroundClass()}`}
        >
          {t("saveHint")}
        </p>
        <div className="flex space-x-3">
          <button
            onClick={onRestart}
            className="flex-1 bg-zinc-300 text-black px-4 py-2 rounded"
          >
            {t("againButton")}
          </button>
          <button
            onClick={handleCopyLink}
            className={`flex-1 px-4 py-2 rounded ${
              linkCopied ? "bg-green-500 text-white" : "bg-zinc-300 text-black"
            }`}
          >
            {linkCopied ? t("copied") : t("copyButton")}
          </button>
        </div>
      </div>
      <Subscribe />
      <Socials />
    </div>
  );
}
