import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesListItemComponent } from './series-list-item.component';

describe('SeriesListItemComponent', () => {
  let component: SeriesListItemComponent;
  let fixture: ComponentFixture<SeriesListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
