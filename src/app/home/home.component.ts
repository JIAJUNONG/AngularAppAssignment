import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [15339, 21345, 18483, 24003, 23489, 24092, 12034], label: 'Simple Data Source' }

  ];
  public lineChartLabels: Label[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartColors: Color[] = [
    {
      backgroundColor: 'transparent',
      borderColor: '#007bff',
      borderWidth: 1,
      pointBackgroundColor: '#007bff',
      pointBorderColor: '007bff'}
  ];

  constructor() { }

  ngOnInit() {
  }


}
