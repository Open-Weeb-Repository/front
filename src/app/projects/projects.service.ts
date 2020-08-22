import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {IProjectListRawResponse, IProjectListTransformedResponse} from './projects.types';
import {environment} from '../../environments/environment';

const APIURL = `${environment.apiurl}/projects`;

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(private http: HttpClient) { }
  private projectListUpdated = new Subject<IProjectListTransformedResponse>();

  getProjectListUpdatedListener(): Observable<IProjectListTransformedResponse>{
    return this.projectListUpdated.asObservable();
  }

  getProjectList(malId: string): void{
    const params = { malId };
    this.http.get<IProjectListRawResponse>(APIURL, { params })
      .subscribe(response => {
        const transformedResponse: IProjectListTransformedResponse = {
          limit: response.limit,
          skip: response.skip,
          total: response.total,
          data: response.data.map(project => {
            return {
              _id: project._id,
              malId: project.malId,
              language: project.language,
              logo: project.logo,
              site: project.site,
              title: project.title,
              type: project.type,
              lastUpdated: new Date(project.lastUpdated),
              lastWork: project.lastWork,
              url: project.url,
            };
          })
        };
        this.projectListUpdated.next(transformedResponse);
      });
  }
}
