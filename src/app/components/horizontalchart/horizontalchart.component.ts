import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import * as types from '../../interfaces/interfaces';


@Component({
  selector: 'app-horizontalchart',
  standalone: true,
  imports: [NgxChartsModule, CommonModule],
  templateUrl: './horizontalchart.component.html',
  styleUrl: './horizontalchart.component.css'
})
export class HorizontalchartComponent implements OnDestroy {
  
	@Input() results: any[] = [];
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

	}

	ngOnDestroy(): void {
		clearInterval(this.interval);
	}

	onSelect(event: any) {
		console.log(event);
	}
}
