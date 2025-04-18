import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publication } from 'src/Models/Publication';

@Injectable({
  providedIn: 'root'
})
export class PubService {

  constructor(private http:HttpClient ) { }
  GetAllPubs():Observable<Publication[]>{
    return this.http.get<Publication[]>('http://localhost:3000/Publication')
    
  }
  getPubById(id:string): Observable<Publication> {
    return this.http.get<Publication>(`http://localhost:3000/Publication/${id}`);
  }
  addPub(publication: Publication): Observable<Publication> {
    return this.http.post<Publication>('http://localhost:3000/Publication', publication);
  }

}
