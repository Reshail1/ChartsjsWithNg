import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';


const routes: Routes = [
  {
    path: 'bar',
    component: BarChartComponent
  },
  {
    path: 'line',
    component: LineChartComponent
  },
  {
    path: 'radar',
    component: RadarChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
