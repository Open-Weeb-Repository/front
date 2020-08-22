import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ISeries} from '../series.types';
import {SeriesService} from '../series.service';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.css']
})
export class SeriesDetailComponent implements OnInit {
  isLoading = true;
  seriesDetail: ISeries;

  constructor(private route: ActivatedRoute, private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(async paramMap => {
        this.seriesDetail = await this.seriesService.getSeriesDetail(paramMap.get('id')).toPromise();
        this.isLoading = false;
      });
  }

}
