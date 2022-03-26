import { Injectable } from '@angular/core';
import { Flag } from './flag';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlagService {
  private flagsUrl = 'api/flags'; //URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getFlags(): Observable<Flag[]> {
    return this.http.get<Flag[]>(this.flagsUrl);
  }

  getFlag(id: number): Observable<Flag> {
    const url = `${this.flagsUrl}/${id}`;
    return this.http.get<Flag>(url);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    }
  }
}
