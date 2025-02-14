import { Component, OnInit } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Member } from 'src/Models/Member';
import { MemberService } from 'src/Services/member.service';
import { ConfirmedDialogueComponent } from '../confirmed-dialogue/confirmed-dialogue.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  dataSource : Member[] = [];
  displayedColumns: string[] = ['id', 'cin', 'name', 'type', 'createdDate','actions'];

  //injectiion de dépendance:mecanisme qui permet d'utiliser un service dans un composant
  constructor(private MS:MemberService,private dialog:MatDialog) { }
  ngOnInit() {
    this.MS.GetAllMembers().subscribe(
      (data)=>{
        this.dataSource = data;
      }
    );
  }

  
  deleteMember(id: string) {
    //lancer la boite de dialogue
    let dialogRef = this.dialog.open(ConfirmedDialogueComponent, {
      height: '200px',
      width: '300px',
    });
    dialogRef.afterClosed().subscribe(result => {
     if(result){
      this.MS.deleteMember(id).subscribe(
        () => {
          this.MS.GetAllMembers().subscribe(
            (data)=>{
              this.dataSource = data;
            }
          );
        
        }
        );
     }
    });
    

  
    
  }


}


