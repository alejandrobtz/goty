import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@Component({
  selector: 'app-horizontalchart',
  standalone: true,
  imports: [NgxChartsModule, CommonModule],
  templateUrl: './horizontalchart.component.html',
  styleUrl: './horizontalchart.component.css'
})
export class HorizontalchartComponent implements OnDestroy {
  results: any[] = [
    {
      "name": "Game 1",
      "value": 3
    },
    {
      "name": "Game 2",
      "value": 10
    },
    {
      "name": "Game 3",
      "value": 7
    }
  ];;
  view: number[] = [700, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Games';
  showYAxisLabel = true;
  yAxisLabel = 'Votes';
  colorScheme = 'nightLights';

  interval: any;

  constructor() {
    this.interval = setInterval(() => {

      const newResults = [...this.results];
      for( let i in newResults ) {
        this.results[i].value = Math.round(Math.random() * 500);
      }

      this.results = newResults;
    }, 1500);

  }

  ngOnDestroy(): void {
      clearInterval(this.interval);
  }

  onSelect(event: any) {
    console.log(event);
  }
}
