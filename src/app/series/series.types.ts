import {IListResponse} from '../common.types';

export interface ISeries {
  _id: string;
  malId: string;
  malUrl: string;
  title: IAnimeTitle;
  image: string;
  synopsis: string;
  background: string;
  malType: 'anime' | 'manga';
  type: string;
  episodes: number;
  premiered: string;
  broadcast: string;
  producers: string[];
  licensors: string[];
  studios: string[];
  source: string;
  genres: string[];
  duration: string;
  rating: string;
  score: number;
}

interface IAnimeTitle {
  mainTitle: string;
  synonyms: string[];
  titleJp: string;
}

export type ISeriesListResponse = IListResponse<ISeries>;
