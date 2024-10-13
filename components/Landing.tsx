"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { LandingProps } from "@/types/Landing-types";
import Image from "next/image";
import logoTW from "../assets/logo-zh-TW.png";
import logoEN from "../assets/logo-en.png";
import landing from "../assets/landing.png";

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
    <div className="relative flex flex-col justify-start items-center h-[100dvh] md:h-screen bg-custom">
      <div className="absolute top-10 right-7 z-20 bg-white rounded-full">
        <Link href="/" locale="zh-TW">
          <div
            onClick={() => setSelectedLang("zh-TW")}
            className={`p-2 text-sm text-center text-black rounded-full cursor-pointer ${
              selectedLang === "zh-TW"
                ? "bg-blue-500 text-white"
                : "bg-transparent"
            }`}
          >
            中
          </div>
        </Link>
        <Link href="/en">
          <div
            onClick={() => setSelectedLang("en")}
            className={`p-2 text-sm text-center text-black rounded-full cursor-pointer ${
              selectedLang === "en"
                ? "bg-blue-500 text-white"
                : "bg-transparent"
            }`}
          >
            EN
          </div>
        </Link>
      </div>

      <div className="relative flex flex-col items-center justify-end md:justify-center w-full max-w-sm h-[100dvh] px-4">
        <div className="relative w-full flex flex-col items-center space-y-7">
          <Image
            src={selectedLang === "zh-TW" ? logoTW : logoEN}
            height={90}
            alt="logo"
          />

          <div className="relative flex flex-col items-center justify-center rounded-lg w-full space-y-1 pt-3">
            <div
              className="absolute top-1 right-16 text-white text-2xl"
              style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.3)" }}
            >
              ✶
            </div>
            <div
              className="absolute top-4 right-24 text-white text-xl"
              style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.3)" }}
            >
              ✶
            </div>
            <div
              className="absolute top-5 right-6 text-white text-3xl"
              style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.3)" }}
            >
              ✶
            </div>
            <div
              className="absolute bottom-0 left-6 md:left-9 text-white text-3xl"
              style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.3)" }}
            >
              ✶
            </div>

            <p
              className="text-2xl font-bold text-blue-500 text-left w-[70dvw] md:ml-20 max-w-xs"
              style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.3)" }}
            >
              {t("titleLine1")}
            </p>
            <p
              className="text-3xl font-bold text-blue-500 w-[70dvw] md:mr-5 max-w-xs text-right"
              style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.3)" }}
            >
              {t("titleLine2")}
            </p>
          </div>

          <div className="relative w-full max-w-md mx-auto">
            <Image
              src={landing}
              width={200}
              alt="landing"
              className="w-full relative"
            />
            <button
              onClick={onStart}
              className="absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-blue-500 text-xl text-white px-6 py-3 rounded-full shadow-[2px_2px_2px_0px_rgba(0,0,0,0.4)]"
            >
              {t("startButton")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
