import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import * as types from '../../interfaces/interfaces';	
import Swal from 'sweetalert2';

@Component({
	selector: 'app-goty',
	standalone: true,
	imports: [],
	templateUrl: './goty.component.html',
	styleUrl: './goty.component.css'
})
export class GotyComponent implements OnInit {
  	constructor(private gamesService: GameService) { }

	public games: types.IGame[] = [];

	ngOnInit(): void {
		this.gamesService.getAllNominatedGames().subscribe((games: types.IGame[]) => {
			console.log(games);
			this.games = games;
		});
	}	

	public vote(gameId:string) {
		this.gamesService.vote(gameId).subscribe((response: any) => {
			if(response.ok) {
				Swal.fire('Voted!', `${ response.msj }`,'success');
			} else {
				Swal.fire('Error!', `${ response.msj }`, 'error');
			}
		});
	}


}
