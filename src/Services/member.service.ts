import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//decorateur qii permer d'indiquer que le service accepte d'etre injecter dans un autre service ou dans un composant
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  constructor(private http:HttpClient) { }
//fonction qui envoie une requete en mode get pour recuperer les membres
GetAllMembers():Observable<any[]>{
 return this.http.get<any[]>('http://localhost:3000/members')

}
addMember(member:any):Observable<any>{
  return this.http.post('http://localhost:3000/members',member)}

}
