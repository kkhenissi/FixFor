import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  @Input() label: String;
  @Input() total: String;
  @Input() percentage: String;
  
  Highcharts = Highcharts;
  chartOptions = {};
  @Input() data = [];
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
        chart: {
            type: 'area',
            backgroundColor: null,
            borderwidth: 0,
            margin: [2, 2, 2, 2],
            height: 60
        },
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
 
        tooltip: {
            split: true,
            outside: true,
            // valueSuffix: ' millions'
        },
        legend: {
           enabled: false
        },
        credits: {
           enabled: false
        },
        exporting: {
            enabled: false
        },
        xAxis: {
          labels: {
            enabled: false
          },
          title: {
            text: null
          },
          startOnTick: false,
          endOnTick: false,
          tickOptions: []
        },
        yAxis: {
          labels: {
            enabled: false
          },
          title: {
            text: null
          },
          startOnTick: false,
          endOnTick: false,
          tickOptions: []
        },
        series: [{
           data: this.data
        }]
    };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  //  HC_exporting(this.Highcharts);
  }

}
