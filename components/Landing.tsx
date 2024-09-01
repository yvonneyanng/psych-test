"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { LandingProps } from "@/types/Landing-types";

export default function Landing({ onStart }: LandingProps) {
  const t = useTranslations("Landing");

  const [selectedLang, setSelectedLang] = useState("zh-TW");

  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith("/en")) {
      setSelectedLang("en");
    } else {
      setSelectedLang("zh-TW");
    }
  }, []);

  return (
    <div className="h-[100dvh] flex flex-col justify-start items-center pt-10">
      <div className="flex flex-col self-end px-6">
        <div className="bg-zinc-400 rounded-full">
          <Link href="/" locale="zh-TW">
            <div
              onClick={() => setSelectedLang("zh-TW")}
              className={`p-2 text-sm text-center rounded-full cursor-pointer ${
                selectedLang === "zh-TW"
                  ? "bg-zinc-500 text-white"
                  : "bg-transparent text-gray-800"
              }`}
            >
              中
            </div>
          </Link>
          <Link href="/en">
            <div
              onClick={() => setSelectedLang("en")}
              className={`p-2 text-sm text-center rounded-full cursor-pointer ${
                selectedLang === "en"
                  ? "bg-zinc-500 text-white"
                  : "bg-transparent text-gray-800"
              }`}
            >
              EN
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center space-y-10">
        <div className="bg-gray-300 h-72 w-60 flex justify-center items-center">
          {t("description")}
        </div>
        <button
          onClick={onStart}
          className="bg-gray-300 text-black px-4 py-2 rounded"
        >
          {t("startButton")}
        </button>
      </div>
    </div>
  );
}
