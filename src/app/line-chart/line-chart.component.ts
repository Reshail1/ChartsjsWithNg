import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js'
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  lineChart;
  @ViewChild('lineChart', {static: true}) ctx: HTMLCanvasElement | any;
  constructor() { }

  ngOnInit() {
    this.lineChart = new Chart(this.ctx.nativeElement, {
      type: 'line',
      data: {
        labels: ['10', '20', '30'],
        datasets: [
          {
            data: [5, 10, 19, 49],
            borderColor: '#00AEFF',
            fill: false,
            label: 'My First Dataset'
          },
          {
            data: [9, 27,88],
            borderColor: 'red',
            fill: false,
            label: 'My Second Dataset'
          }
        ]
      },
      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
    }
    })
  }

}
