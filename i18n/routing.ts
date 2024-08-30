import { defineRouting } from "next-intl/routing";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["zh-TW", "en"],
  defaultLocale: "zh-TW",
});
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
