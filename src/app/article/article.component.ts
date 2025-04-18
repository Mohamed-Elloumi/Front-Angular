import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Publication } from 'src/Models/Publication';
import { PubService } from 'src/Services/pub.service';
import { PubDetailsComponent } from '../pub-details/pub-details.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PubModalComponent } from '../pub-modal/pub-modal.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
   

  
    //injectiion de dépendance:mecanisme qui permet d'utiliser un service dans un composant
    constructor(private PS:PubService,private dialog:MatDialog){}
    dataSource : MatTableDataSource<Publication> = new MatTableDataSource<Publication>(); 
    displayedColumns: string[] = ['id', 'titre', 'type', 'date', 'lien','Sourcepdf','action'];
    ngOnInit(){
      this.fetchData()
    }
    fetchData():void{
      this.PS.GetAllPubs().subscribe((data)=>{
        this.dataSource.data = data;
      })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
open(){
 let dialogRef= this.dialog.open(PubModalComponent)
 dialogRef.afterClosed().subscribe((res: any) => {
  if (res) {
    this.PS.addPub(res).subscribe(() => {
      this.fetchData();
    });
  }
 });

}
  openvis(id:string){
    this.PS.getPubById(id).subscribe((evtRecupere: any)=>{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data=evtRecupere
    const dialogRef= this.dialog.open(PubDetailsComponent, dialogConfig);
    
      
    }
  );
  }
  }


