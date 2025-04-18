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
  AddEvent(e:Evt):Observable<Evt>{
    return this.http.post<Evt>('http://localhost:3000/Evt',e)
  }
  getEventById(id:string): Observable<void> {
    return this.http.get<void>(`http://localhost:3000/Evt/${id}`);
  }
  updateEvent(id:string, e:Evt): Observable<void> {
    return this.http.put<void>(`http://localhost:3000/Evt/${id}`, e);
  }
  deleteEventById(id:string): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/Evt/${id}`);
  }
}