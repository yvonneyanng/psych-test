import React from "react";
import { useTranslations } from "next-intl";
import {
  SiInstagram,
  SiThreads,
  SiApplepodcasts,
  SiSpotify,
  SiNotion,
} from "react-icons/si";

export default function Socials() {
  const t = useTranslations("Result");
  const handlePodcastClick = () => {
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "click", {
        event_category: "Podcast Button",
        event_label: "Podcasts",
      });
    }
  };
  const socials = [
    {
      name: "Instagram",
      icon: <SiInstagram size={35} />,
      color: "#d62976",
      link: "https://www.instagram.com/students_au/",
    },
    {
      name: "Threads",
      icon: <SiThreads size={35} />,
      color: "#000",
      link: "https://www.threads.net/@students_au",
    },
    {
      name: "Podcasts",
      icon: <SiApplepodcasts size={35} />,
      color: "#B150E2",
      link: "https://podcasts.apple.com/us/podcast/%E7%95%99%E5%AD%B8%E7%94%9F%E5%9C%A8%E6%BE%B3%E6%B4%B2/id1660355960",
    },
    {
      name: "Spotify",
      icon: <SiSpotify size={35} />,
      color: "#1DB954",
      link: "https://open.spotify.com/show/3EiRhEVXwc1l4trXSVJfpU",
    },
    {
      name: "Notion",
      icon: <SiNotion size={35} />,
      color: "#000",
      link: "https://international-students-in-australia.notion.site/cd96739f9ee445baa2522f48de5ddc33?v=1f4d81dec8df4a3c8310007616596c76&pvs=4",
    },
  ];

  return (
    <div className="w-[80dvw] bg-zinc-300 mt-5 rounded max-w-xs">
      <p className="text-center p-5">{t("promoteTitle")}</p>
      <div className="flex justify-center items-center space-x-5 mb-5">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black"
            style={{ color: social.color }}
            onClick={social.name === "Podcasts" ? handlePodcastClick : undefined}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
