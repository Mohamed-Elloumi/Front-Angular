import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/Models/Member';
//decorateur qii permer d'indiquer que le service accepte d'etre injecter dans un autre service ou dans un composant
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  constructor(private http:HttpClient) { }
//fonction qui envoie une requete en mode get pour recuperer les membres
GetAllMembers():Observable<Member[]>{
 return this.http.get<Member[]>('http://localhost:3000/members')

}
getMemberById(id:string):Observable<Member>{
  return this.http.get<Member>(`http://localhost:3000/members/${id}`)
}
addMember(member:Member):Observable<Member>{
  return this.http.post<Member>('http://localhost:3000/members',member)}
deleteMember(id:string):Observable<Member>{
  return this.http.delete<Member>(`http://localhost:3000/members/${id}`)
  }
 updateMember(id:string,member:Member):Observable<Member>{
  return this.http.put<Member>(`http://localhost:3000/members/${id}`,member)
 }

}
