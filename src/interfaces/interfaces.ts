export interface episode {
  air_date: string;
  episode: string;
  id: number;
  name: string;
}

export interface IEpisodes {
  allEpisodes: episode[];
}

export interface IEpisode {
  air_date: string;
  episode: string;
  name: string;
  index: number;
}
