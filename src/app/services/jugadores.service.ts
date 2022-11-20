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
}
