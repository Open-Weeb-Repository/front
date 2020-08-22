import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ISeries} from '../series.types';
import {SeriesService} from '../series.service';
import {ProjectsService} from '../../projects/projects.service';
import {Subscription} from 'rxjs';
import {IProjectTransformed} from '../../projects/projects.types';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.css']
})
export class SeriesDetailComponent implements OnInit, OnDestroy {
  isLoading = true;
  seriesDetail: ISeries;
  projectListSub: Subscription;

  projectList: IProjectTransformed[];

  constructor(private route: ActivatedRoute, private seriesService: SeriesService, private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.projectListSub = this.projectService
      .getProjectListUpdatedListener()
      .subscribe(result => {
        this.projectList = result.data;
      });
    this.route.paramMap
      .subscribe(async paramMap => {
        this.seriesDetail = await this.seriesService.getSeriesDetail(paramMap.get('id')).toPromise();
        this.projectService.getProjectList(this.seriesDetail.malId);
        this.isLoading = false;
      });
  }

  ngOnDestroy(): void {
    this.projectListSub.unsubscribe();
  }
}
