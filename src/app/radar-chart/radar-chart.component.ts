import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent implements OnInit {

  radarChart;
  @ViewChild('radarChart', {static: true}) ctx: HTMLCanvasElement | any;
  constructor() { }

  ngOnInit() {
    this.radarChart = new Chart(this.ctx.nativeElement, {
      type: 'radar',
      data: {
        labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
        datasets: [{
          data: [20, 10, 4, 2],
          label: 'Series 1',
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
          ],
        },{
          data: [25, 10, 35, 5],
          label: 'Series 2',
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)'
          ],
        },
        {
          data: [33,1, 9, 17],
          label: 'Series 3',
          backgroundColor: [
            'rgba(255, 206, 86, 0.2)',
            // 'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgba(255, 206, 86, 1)',
            // 'rgba(75, 192, 192, 1)',
          ],
        },
        {
          data: [12,21, 51, 1],
          label: 'Series 4',
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
          ],
        },]
      },
      options: {
        // scale: {
        //     angleLines: {
        //         display: false
        //     },
        //     ticks: {
        //         suggestedMin: 50,
        //         suggestedMax: 100
        //     }
        // }
      }
    })
  }
}
