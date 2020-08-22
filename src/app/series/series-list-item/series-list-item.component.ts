import {Component, Input, OnInit} from '@angular/core';
import {ISeries} from '../series.types';

@Component({
  selector: 'app-series-list-item',
  templateUrl: './series-list-item.component.html',
  styleUrls: ['./series-list-item.component.css'],
})
export class SeriesListItemComponent implements OnInit {
  @Input() series: ISeries;
  constructor() { }

  ngOnInit(): void {
  }

}
