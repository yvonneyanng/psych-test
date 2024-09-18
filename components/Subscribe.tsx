"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { addSubscriber } from "../services/firestoreService";

export default function Subscribe() {
  const t = useTranslations("Result");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isButtonDisabled = name === "" || email === "" || !isValidEmail(email);

  const handleSubmit = async () => {
    setIsLoading(true);
    if (!isButtonDisabled) {
      try {
        await addSubscriber(name, email);
        setIsSuccess(true);
        setName("");
        setEmail("");
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      } catch (error) {
        console.error("Error during subscription: ", error);
        alert("There was an error subscribing. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="w-[80dvw] bg-zinc-300 mt-5 rounded max-w-xs">
      <p className="text-center p-5">{t("subscribeTitle")}</p>
      <div className="flex flex-col justify-center items-center space-y-3">
        <input
          className="w-[80%] p-2 rounded"
          type="text"
          placeholder={t("namePH")}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-[80%] p-2 rounded"
          type="email"
          placeholder={t("emailPH")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {email && !isValidEmail(email) && (
          <p className="text-red-500 text-sm w-[80%]">{t("invalidEmail")}</p>
        )}
      </div>
      <button
        onClick={handleSubmit}
        className={`w-[50%] bg-amber-500 text-black p-2 rounded-full my-5 mx-auto flex items-center justify-center ${
          isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isButtonDisabled}
      >
        {isLoading ? (
          <div className="border-2 border-white border-t-amber-500 rounded-full w-6 h-6 animate-spin"></div>
        ) : isSuccess ? (
          <span>{t("subscribed")}</span>
        ) : (
          t("subscribeButton")
        )}
      </button>
    </div>
  );
}
