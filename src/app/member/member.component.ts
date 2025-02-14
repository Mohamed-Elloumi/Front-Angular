import { Component, OnInit } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { MemberService } from 'src/Services/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  dataSource : any[] = [];
  displayedColumns: string[] = ['id', 'cin', 'name', 'type', 'createdDate','actions'];

  //injectiion de dépendance:mecanisme qui permet d'utiliser un service dans un composant
  constructor(private MS:MemberService) { }
  ngOnInit() {
    this.MS.GetAllMembers().subscribe(
      (data)=>{
        this.dataSource = data;
      }
    );
  }
}
