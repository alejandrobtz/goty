import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, catchError, of } from 'rxjs';
import * as types from '../interfaces/interfaces';

@Injectable({
  	providedIn: 'root',
})


export class GameService {

	constructor(private http: HttpClient) { }

	public getAllNominatedGames(): Observable<types.IGame[]> {
		return this.http.get<types.IGame[]>(`${environment.url}/api/goty`)
	}

	public vote(gameId: string): Observable<any> {
		return this.http.post<any>(`${environment.url}/api/goty/${ gameId }asas`, {})
			.pipe(
				catchError((err) => { 
					return of(err.error);
				})
			)
	}
  
}
