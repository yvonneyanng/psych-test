import { defineRouting } from "next-intl/routing";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["zh-TW", "en"],
  defaultLocale: "zh-TW",
  localePrefix: {
    mode: "always",
    prefixes: {
      "zh-TW": "/",
      en: "/en",
    },
  },
});
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
