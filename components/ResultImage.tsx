import React, { useState, useEffect, useRef } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { getRandomRecommendations } from "@/utils/podcastRec";
import { PodcastEpisode, PodcastTypes } from "@/types/Podcast-types";
import { ResultImageProps } from "@/types/ResultImage-types";

import logoZH from "@/assets/logo-zh-TW.png";
import logoEN from "@/assets/logo-en.png";
import kangaroo from "@/assets/results/kangaroo.png";
import koala from "@/assets/results/koala.png";
import platypus from "@/assets/results/platypus.png";
import wombat from "@/assets/results/wombat.png";
import kangarooPFP from "@/assets/results/kangaroo-pfp.png";
import koalaPFP from "@/assets/results/koala-pfp.png";
import platypusPFP from "@/assets/results/platypus-pfp.png";
import wombatPFP from "@/assets/results/wombat-pfp.png";

export default function ResultImage({
  result,
  percentage,
  bgColor,
}: ResultImageProps) {
  const t = useTranslations("Result");
  const locale = useLocale();
  const [recommendations, setRecommendations] = useState<PodcastEpisode[]>([]);
  const str = ["platypus", "kangaroo", "wombat", "koala"];
  const types = [t("platypus"), t("kangaroo"), t("wombat"), t("koala")];
  const typesImage = [platypus, kangaroo, wombat, koala];
  const id = ["itsmeperry", "kangaroo666", "wombat0.0", "koalazzz"];
  const pfp = [platypusPFP, kangarooPFP, wombatPFP, koalaPFP];
  const fan1 = [1, 2, 1, 2];
  const fan2 = [3, 3, 0, 0];

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
        return "";
    }
  };

  const percentageBG = () => {
    switch (result) {
      case 0:
        return "bg-percentage1";
      case 1:
        return "bg-percentage2";
      case 2:
        return "bg-percentage3";
      case 3:
        return "bg-percentage4";
      default:
        return "";
    }
  };

  const resultToTypeMap: Record<number, PodcastTypes> = {
    0: "typePlatypus",
    1: "typeRoo",
    2: "typeWombat",
    3: "typeKoala",
  };

  const resultToTypeMapRef = useRef(resultToTypeMap);

  useEffect(() => {
    const podcastType = resultToTypeMapRef.current[result];
    const recs = getRandomRecommendations(podcastType);
    setRecommendations(recs);
  }, [result]);

  return (
    <div className="max-w-screen-xs">
      <article className={`w-[100dvw] p-4 ${backgroundClass()}`}>
        <div className="flex justify-between items-center">
          <Image
            src={locale === "en" ? logoEN : logoZH}
            alt="logo"
            width={locale === "en" ? 80 : 70}
          />
          <div className="relative bg-white w-2/3 h-10 flex items-center justify-center rounded-full p-4 mr-3 shadow-lg">
            <div className="text-xs font-semibold">
              {t(str[result] + "Quote")}
            </div>
            <div className="absolute -bottom-4 right-40 w-0 h-0 border-t-[18px] border-t-white border-l-[18px] border-l-transparent border-b-0 border-r-0"></div>
          </div>
        </div>
        <div className="relative flex">
          <div className="absolute top-0 left-0 z-10 h-full space-y-2">
            <p className="text-sm mt-3 ">{t("yourPal")}...</p>
            <p
              className={`${
                locale === "en" ? "text-3xl" : "text-5xl"
              } font-bold leading-tight`}
            >
              {types[result]}
            </p>
            <p
              className={`text-sm text-wrap inline-block p-1 rounded-md ${percentageBG()}`}
            >
              {t("percentage1")} {percentage}% {t("percentage2")}
            </p>
            <p
              className={`${
                locale === "en" ? "text-sm" : "text-md"
              } whitespace-pre-wrap`}
            >
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
              <p className="text-sm font-semibold">{t("fansTitle")}</p>
              <div className="mt-2 space-y-2 pl-1">
                <div className="flex space-x-2 justify-start items-center">
                  <Image
                    src={pfp[fan1[result]]}
                    alt="pfp1"
                    width={40}
                    height={40}
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
                    alt="pfp2"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-zinc-400"
                  />
                  <div>
                    <p className="font-semibold">{id[fan2[result]]}</p>
                    <p>{types[fan2[result]]}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-2 rounded-xl h-3/5 space-y-2">
              <p className="text-sm font-semibold">{t("podcastTitle")}</p>
              {recommendations.map((rec, index) => (
                <a
                  href={rec.link}
                  className={`flex flex-col py-1 px-2 rounded-md justify-end items-center ${backgroundClass()}`}
                  key={index}
                >
                  <div className="w-full flex font-bold justify-start items-center space-x-2">
                    <FaCirclePlay size={15} />
                    <p className="text-sm">EP.{rec.episode}</p>
                  </div>
                  <p className="text-sm text-left w-full">
                    {locale === "en" ? rec.titleEn : rec.title}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
