import { Component, OnInit } from '@angular/core';
import { HorizontalchartComponent } from '../../components/horizontalchart/horizontalchart.component';
import { GameService } from '../../services/game.service';


@Component({
	selector: 'app-start',
	imports: [ HorizontalchartComponent ],
	standalone: true,
	templateUrl: './start.component.html',
	styleUrl: './start.component.css'
})
export class StartComponent {
	
	

}
