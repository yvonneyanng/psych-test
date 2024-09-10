"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { LandingProps } from "@/types/Landing-types";
import Image from "next/image";
import logo from "../assets/logo-landing.png";

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
    <div className="flex flex-col justify-start items-center bg-white h-min-[100svh] pb-16 pt-10 md:h-screen md:pt-20">
      <div className="flex flex-col self-end px-6">
        <div className="bg-zinc-400 rounded-full">
          <Link href="/" locale="zh-TW">
            <div
              onClick={() => setSelectedLang("zh-TW")}
              className={`p-2 text-sm text-center text-white rounded-full cursor-pointer ${
                selectedLang === "zh-TW" ? "bg-zinc-500" : "bg-transparent"
              }`}
            >
              中
            </div>
          </Link>
          <Link href="/en">
            <div
              onClick={() => setSelectedLang("en")}
              className={`p-2 text-sm text-center text-white rounded-full cursor-pointer ${
                selectedLang === "en" ? "bg-zinc-500" : "bg-transparent"
              }`}
            >
              EN
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-start items-center space-y-5 pt-5">
        <Image src={logo} width={80} alt="logo" />
        <div className="bg-zinc-300 h-72 w-60 flex justify-center items-center">
          {t("description")}
        </div>
        <button
          onClick={onStart}
          className="bg-zinc-300 text-black px-6 py-3 rounded-full text-xl"
        >
          {t("startButton")}
        </button>
      </div>
    </div>
  );
}
