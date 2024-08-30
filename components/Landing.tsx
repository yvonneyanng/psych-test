import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Landing({ onStart }: { onStart: () => void }) {
  const t = useTranslations("Landing");
  return (
    <div className="h-[100dvh] flex flex-col justify-start items-center pt-10">
      <div className="flex flex-col self-end px-6">
        <div className="bg-zinc-400 rounded-full">
          <Link href="/">
            <div
              className={
                "p-2 text-sm text-center rounded-full text-white cursor-pointer"
              }
            >
              中
            </div>
          </Link>
          <Link href="/">
            <div
              className={
                "p-2 text-sm text-center rounded-full bg-zinc-500 text-white cursor-pointer"
              }
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
