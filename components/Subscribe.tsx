"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";

export default function Subscribe() {
  const t = useTranslations("Result");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const isButtonDisabled = name === "" || email === "";

  return (
    <div className="w-[80dvw] bg-zinc-300 mt-5 rounded">
      <p className="text-center p-5">{t("subscribeTitle")}</p>
      <div className="flex flex-col justify-center items-center space-y-3">
        <input
          className="w-[80%] p-2"
          type="text"
          placeholder={t("namePH")}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-[80%] p-2"
          type="email"
          placeholder={t("emailPH")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button
        className={`w-[50%] bg-amber-500 text-black p-2 rounded-full my-5 block mx-auto ${
          isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isButtonDisabled}
      >
        {t("subscribeButton")}
      </button>
    </div>
  );
}
