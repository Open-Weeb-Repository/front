export interface IListResponse<T = any>{
  total: number;
  limit: number;
  skip: number;
  data: T[];
}
