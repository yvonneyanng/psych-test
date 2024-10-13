import React from "react";
import { useTranslations } from "next-intl";

export default function DescriptionTextbox() {
  const t = useTranslations("Description");
  const lines = [
    t("description1"),
    t("description2"),
    t("description3"),
    t("description4"),
  ];

  return (
    <div className="relative flex flex-col items-center justify-center rounded-lg w-full h-full p-4 space-y-1 bg-white bg-opacity-70">
      {lines.map((line, index) => (
        <p
          key={index}
          className={`text-black whitespace-pre-wrap text-center ${
            index === 1 || index === 3
              ? "text-xl font-extrabold underline underline-offset-4 decoration-blue-500 decoration-4"
              : "text-sm font-normal"
          }`}
        >
          {line}
        </p>
      ))}
    </div>
  );
}
