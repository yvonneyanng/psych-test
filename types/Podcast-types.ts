export interface PodcastEpisode {
  episode: number;
  title: string;
  link: string;
}

export type PodcastTypes =
  | "typePlatypus"
  | "typeRoo"
  | "typeWombat"
  | "typeKoala";
