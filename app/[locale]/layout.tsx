import type { Metadata, ResolvingMetadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const messages = await import(`../../messages/${params.locale}.json`);

  return {
    title: messages.MetaData.title || "留學生在澳洲",
    description: messages.MetaData.description || "誰是你的澳洲留學代表物?",
    openGraph: {
      title: messages.MetaData.title || "留學生在澳洲",
      description: messages.MetaData.description || "誰是你的澳洲留學代表物?",
      images: [
        {
          url: "../../preview.png",
          alt: messages.MetaData.title || "留學生在澳洲",
        },
      ],
    },
  };
}

// export const metadata: Metadata = {
//   title: "留學生在澳洲",
//   description: "誰是你的澳洲留學代表物?",
// };

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/logo.png" />
        <GoogleAnalytics />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
