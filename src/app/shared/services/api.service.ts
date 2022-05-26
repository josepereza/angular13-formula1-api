import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../interfaces/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient ) { }
  getApi():Observable<API>{
    return this.http.get<API>('https://ergast.com/api/f1/current/last/results.json')
  }
}
