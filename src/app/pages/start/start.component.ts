import { Component } from '@angular/core';
import { HorizontalchartComponent } from '../../components/horizontalchart/horizontalchart.component';


@Component({
  selector: 'app-start',
  imports: [ HorizontalchartComponent],
  standalone: true,
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {

}
