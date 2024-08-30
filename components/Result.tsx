import React, { useState } from "react";
import Image from "next/image";
import sampleResult from "../public/placeholder-image.png";
import { useTranslations } from "next-intl";
import { ResultProps } from "@/types/Result-types";

export default function Result({ onRestart }: ResultProps) {
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
    <div className="flex flex-col items-center justify-start pt-24 h-[100dvh]">
      <Image src={sampleResult} width={300} alt="Picture of the author" />
      <div className="flex w-72 mt-10 justify-between">
        <button
          onClick={onRestart}
          className="flex-1 mx-1 bg-gray-300 text-black px-4 py-2 rounded"
        >
          {t("againButton")}
        </button>
        <button
          onClick={handleCopyLink}
          className={`flex-1 mx-1 px-4 py-2 rounded ${
            linkCopied ? "bg-green-500 text-white" : "bg-gray-300 text-black"
          }`}
        >
          {linkCopied ? t("copied") : t("copyButton")}
        </button>
      </div>
    </div>
  );
}
