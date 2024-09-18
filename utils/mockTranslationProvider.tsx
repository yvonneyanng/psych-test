import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";

export function MockTranslationProvider({ children }: { children: ReactNode }) {
  const messages = {
    Landing: { startButton: "開始測驗" },
  };
  const locale = "zh-TW";

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
