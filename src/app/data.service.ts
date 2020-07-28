import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from './shared/model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly DATA_URL = 'assets/json/mock.json';
  constructor(private http: HttpClient) {}

  getData = () => {
    return this.http.get<Game[]>(`${this.DATA_URL}`);
  }
}
