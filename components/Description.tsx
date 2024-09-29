import React from "react";
import { DescriptionProps } from "@/types/Description-types";
import { useTranslations } from "next-intl";
import { RiHome4Fill } from "react-icons/ri";

import DescriptionTextbox from "./DescriptionTextbox";

export default function Description({
  onGoToLanding,
  onStartQuiz,
}: DescriptionProps) {
  const t = useTranslations("Description");
  return (
    <div className="relative flex flex-col items-center justify-start w-full max-w-screen-xs bg-description md:bg-custom">
      <div className="flex items-center justify-end w-[75dvw] space-x-5 mt-8 md:mt-20 max-w-xs">
        <button onClick={onGoToLanding}>
          <RiHome4Fill
            size={30}
            color="white"
            style={{ filter: "drop-shadow(1px 1px 1px rgba(254,148,132,1))" }}
          />
        </button>
      </div>
      <div className="mt-16 flex flex-col justify-start items-center max-w-xs">
        <DescriptionTextbox />
        <button
          onClick={onStartQuiz}
          className="bg-blue-500 text-xl text-white px-6 py-3 rounded-full shadow-[2px_2px_2px_0px_rgba(0,0,0,0.4)] mt-12"
        >
          {t("enterButton")}
        </button>
      </div>
    </div>
  );
}
