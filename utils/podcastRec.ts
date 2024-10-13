interface PodcastEpisode {
  episode: number;
  title: string;
  titleEn: string;
  link: string;
}

// Define the available types for podcast recommendations
type PodcastTypes = "typePlatypus" | "typeRoo" | "typeWombat" | "typeKoala";

const podcastRec: Record<PodcastTypes, PodcastEpisode[]> = {
  typePlatypus: [
    {
      episode: 5,
      title: "想家了嗎？來聊聊如何排解鄉愁",
      titleEn: "How to deal with homesickness.",
      link: "https://podcasts.apple.com/tw/podcast/%E7%95%99%E5%AD%B8%E7%94%9F%E5%9C%A8%E6%BE%B3%E6%B4%B2/id1660355960?i=1000601544757",
    },
    {
      episode: 9,
      title: "拒絕拖延症！如何做好時間管理",
      titleEn: "Time management tips sharing.",
      link: "https://podcasts.apple.com/tw/podcast/%E7%95%99%E5%AD%B8%E7%94%9F%E5%9C%A8%E6%BE%B3%E6%B4%B2/id1660355960?i=1000613764683",
    },
    {
      episode: 11,
      title: "如何在澳洲找到第一份工作",
      titleEn: "Finding first job in Australia.",
      link: "https://podcasts.apple.com/tw/podcast/%E7%95%99%E5%AD%B8%E7%94%9F%E5%9C%A8%E6%BE%B3%E6%B4%B2/id1660355960?i=1000616402454",
    },
    {
      episode: 17,
      title: "留學生自媒體經營 ft.Sammy",
      titleEn: "Overseas student running social media.",
      link: "https://podcasts.apple.com/tw/podcast/%E7%95%99%E5%AD%B8%E7%94%9F%E5%9C%A8%E6%BE%B3%E6%B4%B2/id1660355960?i=1000628252062",
    },
  ],
  typeRoo: [
    {
      episode: 6,
      title: "來聊聊跨領域這件事",
      titleEn: "Let's talk about Interdisciplinary.",
      link: "https://podcasts.apple.com/tw/podcast/%E7%95%99%E5%AD%B8%E7%94%9F%E5%9C%A8%E6%BE%B3%E6%B4%B2/id1660355960?i=1000605856831",
    },
    {
      episode: 13,
      title: "啊啊啊！被騷擾啦",
      titleEn: "Ahhhhhhhhh! I am harrassed!",
      link: "https://podcasts.apple.com/tw/podcast/%E7%95%99%E5%AD%B8%E7%94%9F%E5%9C%A8%E6%BE%B3%E6%B4%B2/id1660355960?i=1000621398160",
    },
    {
      episode: 20,
      title: "澳洲有種族歧視嗎？",
      titleEn: "Is there racism in Australia?",
      link: "https://podcasts.apple.com/tw/podcast/%E7%95%99%E5%AD%B8%E7%94%9F%E5%9C%A8%E6%BE%B3%E6%B4%B2/id1660355960?i=1000636644488",
    },
    {
      episode: 25,
      title: "遠距離戀愛修成正果",
      titleEn: "Long distance relationships.",
      link: "https://podcasts.apple.com/tw/podcast/%E7%95%99%E5%AD%B8%E7%94%9F%E5%9C%A8%E6%BE%B3%E6%B4%B2/id1660355960?i=1000657375282",
    },
  ],
  typeWombat: [
    {
      episode: 7,
      title: "澳洲留學生打工指南！留學生經驗談",
      titleEn: "Part-time working experience sharing.",
      link: "https://podcasts.apple.com/tw/podcast/%E7%95%99%E5%AD%B8%E7%94%9F%E5%9C%A8%E6%BE%B3%E6%B4%B2/id1660355960?i=1000609060184",
    },
    {
      episode: 19,
      title: "助產士的澳洲新生之路 ft.Cherry & Wen",
      titleEn: "Midwifery journey in Australia.",
      link: "https://podcasts.apple.com/tw/podcast/%E7%95%99%E5%AD%B8%E7%94%9F%E5%9C%A8%E6%BE%B3%E6%B4%B2/id1660355960?i=1000632964708",
    },
    {
      episode: 22,
      title: "揭開澳洲中學教師之路 ft.Vienne",
      titleEn: "Becoming a high school teacher.",
      link: "https://podcasts.apple.com/tw/podcast/%E7%95%99%E5%AD%B8%E7%94%9F%E5%9C%A8%E6%BE%B3%E6%B4%B2/id1660355960?i=1000643234171",
    },
    {
      episode: 26,
      title: "全能住宅改造王——土木估算師",
      titleEn: "What's like being a Civil Estimator?",
      link: "https://podcasts.apple.com/tw/podcast/%E7%95%99%E5%AD%B8%E7%94%9F%E5%9C%A8%E6%BE%B3%E6%B4%B2/id1660355960?i=1000660790644",
    },
  ],
  typeKoala: [
    {
      episode: 12,
      title: "怎麼省錢玩一生必去的凱恩斯大堡礁",
      titleEn: "Budgest trip to Cairns Great Barrier Reef.",
      link: "https://podcasts.apple.com/tw/podcast/%E7%95%99%E5%AD%B8%E7%94%9F%E5%9C%A8%E6%BE%B3%E6%B4%B2/id1660355960?i=1000619697237",
    },
    {
      episode: 18,
      title: "一探澳洲版紐西蘭——塔斯馬尼亞！",
      titleEn: "Let's go on a thrilling trip to Tasmania!",
      link: "https://podcasts.apple.com/tw/podcast/%E7%95%99%E5%AD%B8%E7%94%9F%E5%9C%A8%E6%BE%B3%E6%B4%B2/id1660355960?i=1000629730893",
    },
    {
      episode: 23,
      title: "澳洲醫療保險保什麼？怎麼選？",
      titleEn: "Choosing your health insurance.",
      link: "https://podcasts.apple.com/tw/podcast/%E7%95%99%E5%AD%B8%E7%94%9F%E5%9C%A8%E6%BE%B3%E6%B4%B2/id1660355960?i=1000648206388",
    },
    {
      episode: 29,
      title: "台灣變裝文化在澳洲的繽紛花路",
      titleEn: "Taiwanese drag culture in Australia.",
      link: "https://podcasts.apple.com/tw/podcast/%E7%95%99%E5%AD%B8%E7%94%9F%E5%9C%A8%E6%BE%B3%E6%B4%B2/id1660355960?i=1000671177395",
    },
  ],
};

export const getRandomRecommendations = (type: PodcastTypes) => {
  const recommendations = podcastRec[type];
  if (!recommendations) return [];

  const shuffled = recommendations.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 2).sort((a, b) => a.episode - b.episode);
};
