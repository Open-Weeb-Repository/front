import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ISeries, ISeriesListResponse} from './series.types';
import {Observable, Subject} from 'rxjs';

const APIURL = `${environment.apiurl}/series`;

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  constructor(private http: HttpClient) { }
  private seriesListUpdated = new Subject<ISeriesListResponse>();

  getSeriesList(skip: number, limit: number): void{
    const params = {
      $limit: limit.toString(10),
      $skip: skip.toString(10)
    };
    this.http
      .get<ISeriesListResponse>(APIURL, { params })
      .toPromise()
      .then(response => this.seriesListUpdated.next(response))
      .catch(err => this.seriesListUpdated.error(err));
  }

  getSeriesListUpdatedListener(): Observable<ISeriesListResponse>{
    return this.seriesListUpdated.asObservable();
  }

  getSeriesDetail(id: string): Observable<ISeries>{
    return this.http.get<ISeries>(`${APIURL}/${id}`);
  }
}
