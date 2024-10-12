export interface PodcastEpisode {
  episode: number;
  title: string;
  titleEn: string;
  link: string;
}

export type PodcastTypes =
  | "typePlatypus"
  | "typeRoo"
  | "typeWombat"
  | "typeKoala";
