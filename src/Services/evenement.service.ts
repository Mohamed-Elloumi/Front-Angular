import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evt } from 'src/Models/Evenement';

@Injectable({
  providedIn: 'root'
})
export class EventService {
constructor(private http:HttpClient) { }
  GetAllEvents():Observable<Evt[]>{
    return this.http.get<Evt[]>('http://localhost:3000/Evt')
    
  }
}