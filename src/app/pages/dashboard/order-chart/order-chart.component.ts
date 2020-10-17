import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-order-chart',
  templateUrl: './order-chart.component.html',
  styleUrls: ['./order-chart.component.less']
})
export class OrderChartComponent implements OnInit {
  deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

  constructor() { }

  ngOnInit(): void {
  }

  public lineChartData: ChartDataSets[] = [

    { data: [60, 90, 20, 60, 60, 70, 65], label: 'Series A' }

  ];

  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April'];

  public lineChartOptions: (ChartOptions) = {
    responsive: true,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 50,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          display: false,
        },
      }],
      yAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          display: false,
          beginAtZero: true
        },
        display: false,
      }],
    },
    legend: {
      display: false
    }
  };

  public lineChartColors: Color[] = [

    { // grey

      backgroundColor: 'rgba(59,59,152,0)',

      borderColor: 'rgba(0, 21, 41,1)',

      pointBackgroundColor: 'rgba(0, 21, 41,1)',

      pointBorderColor: '#fff',

      pointHoverBackgroundColor: '#fff',

      pointHoverBorderColor: 'rgba(148,159,177,0.8)'

    },

    { // dark grey

      backgroundColor: 'rgba(77,83,96,0.2)',

      borderColor: 'rgba(77,83,96,1)',

      pointBackgroundColor: 'rgba(77,83,96,1)',

      pointBorderColor: '#fff',

      pointHoverBackgroundColor: '#fff',

      pointHoverBorderColor: 'rgba(77,83,96,1)'

    },

    { // red

      backgroundColor: 'rgba(255,0,0,0.3)',

      borderColor: 'red',

      pointBackgroundColor: 'rgba(148,159,177,1)',

      pointBorderColor: '#fff',

      pointHoverBackgroundColor: '#fff',

      pointHoverBorderColor: 'rgba(148,159,177,0.8)'

    }

  ];

  public lineChartLegend = false;

  public lineChartType: ChartType = 'line';

}
