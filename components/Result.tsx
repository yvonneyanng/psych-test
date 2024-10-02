"use client";
import React, { useState } from "react";
import Image from "next/image";
import sampleResult from "../public/placeholder-image.png";
import { useTranslations } from "next-intl";
import { ResultProps } from "@/types/Result-types";
import Subscribe from "./Subscribe";
import Socials from "./Socials";

export default function Result({ onRestart, result }: ResultProps) {
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

  return (
    <div className="flex flex-col items-center justify-start py-10 max-w-screen-xs md:py-20 bg-zinc-400 overflow-y-visible">
      <Image
        src={sampleResult}
        alt="Picture of the author"
        className="w-[95dvw] rounded max-w-sm"
      />
      <p className="text-2xl mt-5 font-bold border-4 p-2 rounded-xl">
        {result}
      </p>
      <p className="text-lg mt-5 w-[80dvw] text-center">{t("saveHint")}</p>
      <div className="flex w-[80dvw] mt-5 justify-between space-x-5 max-w-xs">
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
      <Subscribe />
      <Socials />
    </div>
  );
}
