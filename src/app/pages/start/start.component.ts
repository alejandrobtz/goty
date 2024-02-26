import { Component, OnInit } from '@angular/core';
import { HorizontalchartComponent } from '../../components/horizontalchart/horizontalchart.component';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import * as types from '../../interfaces/interfaces';


@Component({
	selector: 'app-start',
	imports: [ HorizontalchartComponent ],
	standalone: true,
	templateUrl: './start.component.html',
	styleUrl: './start.component.css'
})
export class StartComponent implements OnInit {
	gamesCollection$: Observable<any>;

	gamesResult: any[] = [];

	constructor(private db: Firestore) {
		const gamesRef = collection(db, 'goty');
		this.gamesCollection$ = collectionData(gamesRef) as Observable<any>;
	}

	ngOnInit(): void {
		this.gamesCollection$.pipe(
			map((resp: types.IGame[]) => resp.map(({name, votes}) => ({ name, value:votes })))
		).subscribe(resp =>this.gamesResult = resp);
 	}


}
