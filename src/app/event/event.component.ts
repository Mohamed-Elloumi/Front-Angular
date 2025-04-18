
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Evt } from 'src/Models/Evenement';
import { EventService } from 'src/Services/evenement.service';
import { ModalEventComponent } from '../modal-event/modal-event.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmedDialogueComponent } from '../confirmed-dialogue/confirmed-dialogue.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {

  dataSource!: MatTableDataSource<Evt>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
   constructor(private ES:EventService,private dialog:MatDialog
   ) {
    this.dataSource=new MatTableDataSource();
   }
 
  ngOnInit() {
    this.fetchdata()
  }
  fetchdata():void
  {
    this.ES.GetAllEvents().subscribe((data)=>{
      this.dataSource.data=data;
    })
  }
  displayedColumns: string[] = ['id', "title",'dateDebut', 'dateFin', 'lieu','action'];
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openedit(id:string){
    const dialogConfig = new MatDialogConfig();
    this.ES.getEventById(id).subscribe((evtRecupere)=>{
    dialogConfig.data=evtRecupere
    const dialogRef= this.dialog.open(ModalEventComponent, dialogConfig);
      //envoyer evtRecupere vers la boite
  dialogConfig.data = evtRecupere;
  dialogRef.afterClosed().subscribe(
    (data: any) => {
      this.ES.updateEvent(id, data).subscribe(
        () => {
          this.fetchdata();
        }
      );
    }
  );
  })
  }
    deleteevent(id: string) {
      //lancer la boite de dialogue
      let dialogRef = this.dialog.open(ConfirmedDialogueComponent, {
        height: '200px',
        width: '300px',
      });
      dialogRef.afterClosed().subscribe(result => {
       if(result){
        this.ES. deleteEventById(id).subscribe(
          () => {
            this.ES.GetAllEvents().subscribe(
              (data)=>{
                this.dataSource.data = data;
              }
            );
          
          }
          );
       }
      });
      
  
    
      
    }

open(): void{
  //lancer l'ouverture de la boite de dialogue ModalEventComponent
  const dialogRef=this.dialog.open(ModalEventComponent);
  //recuperer les données de la boite de dialogue 
  dialogRef.afterClosed().subscribe(
    data => {console.log("Dialog output:", data)
    if (data){this.ES.AddEvent(data).subscribe(
      ()=>{
        this.fetchdata();
      }
);    
  }}
  );
    }}
