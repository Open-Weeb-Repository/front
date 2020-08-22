import {Component, OnDestroy, OnInit} from '@angular/core';
import {ISeries} from '../series/series.types';
import {SeriesService} from '../series/series.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  get perpage(): number {
    return this.limit;
  }
  get page(): number {
    return Math.ceil(this.skip / this.limit) + 1;
  }
  set page(value: number){
    this.skip = (value - 1) * this.limit;
  }
  animeSeries: ISeries[] = [];
  animeSeriesSub: Subscription;
  private limit = 8;
  private skip = 0;
  totalSeries = 0;
  isLoading = true;
  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.animeSeriesSub = this.seriesService
      .getSeriesListUpdatedListener()
      .subscribe(response => {
        this.animeSeries = response.data;
        this.totalSeries = response.total;
        this.limit = response.limit;
        this.skip = response.skip;
        this.isLoading = false;
      }, err => {
        alert('API error');
      });
    this.getSeriesList();
  }

  ngOnDestroy(): void {
    this.animeSeriesSub.unsubscribe();
  }

  changePage(page: number): void {
    this.page = page;
    this.getSeriesList();
  }

  private getSeriesList(): void{
    this.isLoading = true;
    this.seriesService.getSeriesList(this.skip, this.limit);
  }
}
