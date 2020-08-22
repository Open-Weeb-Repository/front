import {IListResponse} from '../common.types';

interface IProjectBase<T> {
  _id: string;
  malId: string;
  language: string;
  logo: string;
  site: string;
  title: string;
  type: string;
  lastUpdated: T;
  lastWork: string;
  url: string;
}

export type IProjectRaw = IProjectBase<string>;
export type IProjectListRawResponse = IListResponse<IProjectRaw>;
export type IProjectTransformed = IProjectBase<Date>;
export type IProjectListTransformedResponse = IListResponse<IProjectTransformed>;
