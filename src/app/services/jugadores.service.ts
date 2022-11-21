import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JugadoresService {
  constructor(private http: HttpClient) {}
  public getAllPlayers(): Observable<any> {
    return this.http.get('http://localhost:3000/players');
  }
  public getPlayer(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/players/' + id);
  }
  public postPlayer(newPlayer: any) {
    console.log(newPlayer);

    return this.http.post('http://localhost:3000/players/create', newPlayer);
  }
  public deletePlayer(id: string) {
    return this.http.delete('http://localhost:3000/players/delete/' + id);
  }
  public putPlayer(id: string, updatedPlayer: any) {
    return this.http.put(
      'http://localhost:3000/players/edit/' + id,
      updatedPlayer
    );
  }
}
