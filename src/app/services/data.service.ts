import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICharacters } from '../interfaces/ICharacters';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private httpClient: HttpClient) {}

  getCharacteres( page: number = 1): Observable<ICharacters>{
    return this.httpClient.get<ICharacters>(`https://rickandmortyapi.com/api/character?page=${page}`);
  }
}
