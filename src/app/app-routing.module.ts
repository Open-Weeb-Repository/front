import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SeriesDetailComponent} from './series/series-detail/series-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'series/:id', component: SeriesDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
