"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ResultProps } from "@/types/Result-types";
import Subscribe from "./Subscribe";
import Socials from "./Socials";

import logoZH from "@/assets/logo-zh-TW.png";
import kangaroo from "@/assets/results/kangaroo.png";
import koala from "@/assets/results/koala.png";
import platypus from "@/assets/results/platypus.png";
import wombat from "@/assets/results/wombat.png";
import kangarooPFP from "@/assets/results/kangaroo-pfp.png";
import koalaPFP from "@/assets/results/koala-pfp.png";
import platypusPFP from "@/assets/results/platypus-pfp.png";
import wombatPFP from "@/assets/results/wombat-pfp.png";
import { FaCirclePlay } from "react-icons/fa6";

const options = {
  allowTaint: true,
  useCORS: true,
  backgroundColor: "rgba(0,0,0,0)",
  removeContainer: true,
};

export default function Result({ onRestart, result }: ResultProps) {
  const [linkCopied, setLinkCopied] = useState(false);
  const t = useTranslations("Result");

  const str = ["platypus", "kangaroo", "wombat", "koala"];
  const types = [t("platypus"), t("kangaroo"), t("wombat"), t("koala")];
  const typesImage = [platypus, kangaroo, wombat, koala];
  const id = ["itsmeperry", "kangaroo666", "wombat0.0", "koalazzz"];
  const pfp = [platypusPFP, kangarooPFP, wombatPFP, koalaPFP];
  const fan1 = [1, 2, 1, 2];
  const fan2 = [3, 3, 0, 0];

  const cardRef = useRef<HTMLElement>(null);

  const prepareURL = async () => {
    const cardElement = cardRef.current;
    if (!cardElement) return;
    try {
      const html2canvas = await import("html2canvas");
      const result = await html2canvas.default(cardElement, options);
      const asURL = result.toDataURL("image/png");
      const anchor = document.createElement("a");
      anchor.href = asURL;
      anchor.download = "result-card.png";
      anchor.click();
      anchor.remove();
    } catch (reason) {
      console.log(reason);
    }
  };

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
        return "bg-type1";
      case 1:
        return "bg-type2";
      case 2:
        return "bg-type3";
      case 3:
        return "bg-type4";
      default:
        return "bg-type1";
    }
  };

  return (
    <div className="flex flex-col items-center justify-start max-w-screen-xs md:py-20 bg-zinc-400 overflow-y-visible pt-1 pb-10">
      {/* HTML2CANVAS */}
      <div className="max-w-screen-xs">
        <article
          ref={cardRef}
          className={`w-[100dvw] rounded-xl p-4 max-w-sm ${backgroundClass()}`}
        >
          <div className="flex justify-between items-center">
            <Image src={logoZH} alt="logo" objectFit="cover" width={70} />
            <div className="relative bg-white w-2/3 h-10 flex items-center justify-center rounded-full p-4 mr-3 shadow-lg">
              <div className="text-xs">{t(str[result] + "Quote")}</div>
              <div className="absolute -bottom-4 right-40 w-0 h-0 border-t-[18px] border-t-white border-l-[18px] border-l-transparent border-b-0 border-r-0"></div>
            </div>
          </div>
          <div className="relative flex">
            <div className="absolute top-0 left-0 z-10 h-full space-y-3">
              <p className="text-sm mt-3">你的澳洲留學好夥伴是...</p>
              <p className="text-5xl font-bold">{types[result]}</p>
              <p className="text-sm">你們有87%的相似率</p>
              <p className="whitespace-pre-wrap text-md">
                {t(str[result] + "Hashtags")}
              </p>
            </div>
            <div className="relative w-52 h-52 rounded-full overflow-hidden ml-auto">
              <Image
                src={typesImage[result]}
                alt="logo"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>

          <div className="flex justify-between space-x-2 mt-3">
            <div className="space-y-2 w-1/2 text-xs">
              <div className="bg-white p-2 rounded-r-2xl rounded-tl-2xl">
                {t(str[result] + "Desc1")}
              </div>
              <div className="bg-white p-2 rounded-r-2xl rounded-l-lg">
                {t(str[result] + "Desc2")}
              </div>
              <div className="bg-white p-2 rounded-r-2xl rounded-bl-2xl">
                {t(str[result] + "Desc3")}
              </div>
            </div>
            <div className="flex flex-col justify-end space-y-2 w-1/2 text-xs">
              <div className="bg-white p-2 rounded-xl h-2/5">
                <p className="text-sm">{t("fansTitle")}</p>
                <div className="mt-2 space-y-2 pl-1">
                  <div className="flex space-x-2 justify-start items-center">
                    <Image
                      src={pfp[fan1[result]]}
                      alt="logo"
                      width={40}
                      objectFit="cover"
                      className="rounded-full border-2 border-zinc-400"
                    />
                    <div>
                      <p className="font-semibold">{id[fan1[result]]}</p>
                      <p>{types[fan1[result]]}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2 justify-start items-center">
                    <Image
                      src={pfp[fan2[result]]}
                      alt="logo"
                      width={40}
                      objectFit="cover"
                      className="rounded-full border-2 border-zinc-400"
                    />
                    <div>
                      <p className="font-semibold">{id[fan2[result]]}</p>
                      <p>{types[fan2[result]]}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-2 rounded-xl h-3/5">
                <p className="text-sm">{t("podcastTitle")}</p>
                <div className="mt-2 space-y-2">
                  <a
                    href="https://open.spotify.com/show/3EiRhEVXwc1l4trXSVJfpU"
                    className={`flex flex-col py-1 px-2 rounded-md justify-end items-center ${backgroundClass()}`}
                  >
                    <div className="w-full flex font-bold justify-start items-center space-x-2">
                      <FaCirclePlay size={15} />
                      <p className="text-sm">EP19</p>
                    </div>
                    <p className="text-sm">拒絕拖延症！如何做好時間管理？</p>
                  </a>
                  <a
                    href="https://open.spotify.com/show/3EiRhEVXwc1l4trXSVJfpU"
                    className={`flex flex-col py-1 px-2 rounded-md justify-end items-center ${backgroundClass()}`}
                  >
                    <div className="w-full flex font-bold justify-start items-center space-x-2">
                      <FaCirclePlay size={15} />
                      <p className="text-sm">EP19</p>
                    </div>
                    <p className="text-sm">拒絕拖延症！如何做好時間管理？</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div className="flex flex-col w-[80dvw] mt-5 justify-between space-y-3 max-w-xs">
        <button
          onClick={prepareURL}
          className="flex-1 bg-zinc-300 text-black px-4 py-2 rounded mt-3"
        >
          儲存測驗結果
        </button>
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
