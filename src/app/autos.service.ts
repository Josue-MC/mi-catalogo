import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Automovil } from './models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  private autosURL = 'https://catalogo-autos.herokuapp.com/api/autos/';
  private autosActionURL = 'https://catalogo-autos.herokuapp.com/api/autos'
  
  constructor(private http: HttpClient) { }

  getAutos(): Observable<any>{
    return this.http.get<any>(this.autosURL)
  }

  addAutos(auto: Automovil): Observable<any>{
    return this.http.post<any>(this.autosActionURL, auto);
  }

  updateAutos(auto: Automovil): Observable<any>{
    return this.http.put<any>(`${this.autosActionURL}/${auto._id}`, auto);
  }

  deleteAuto(auto: Automovil): Observable<any>{
    return this.http.delete<any>(`${this.autosActionURL}/${auto._id}`);
  }
}
