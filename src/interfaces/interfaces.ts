export interface episodeToFetch {
  air_date: string;
  episode: string;
  id: number | string;
  name: string;
}

export interface IEpisodes {
  allEpisodes: episodeToFetch[];
}

export interface IEpisode {
  air_date: string;
  episode: string;
  name: string;
  index: number;
  allEpisodes: episodeToFetch[];
}
