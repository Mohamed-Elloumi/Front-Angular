import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EventService } from 'src/Services/evenement.service';
import { ModalEventComponent } from './modal-event.component';
import { Evt } from 'src/Models/Evenement';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit,AfterViewInit{
  constructor(private ES:EventService,private dialog:MatDialog){
    
  }
  dataSource: MatTableDataSource<Evt>= new MatTableDataSource<Evt>(); 
  displayedColumns: string[] = ['id', 'title', 'dateDebut', 'dateFin', 'lieu','action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(){
    this.fetchData()
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  fetchData():void{
      this.ES.GetAllEvents().subscribe((data)=>{
        this.dataSource.data = data;
      })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  open():void{
    let dialogRef = this.dialog.open(ModalEventComponent, {
          height: '500px',
          width: '300px',
        });
        dialogRef.afterClosed().subscribe(result => {
          
            // this.MS.deleteMemberById(memberId).subscribe(()=>{
          
            //   this.MS.GetAllMembers().subscribe((a)=>{
            //     this.dataSource=a
            //   })
               
            // });
            if(result){
            console.log("Dialog result:",result); 
            this.ES.AddEvent(result).subscribe(()=>{
          
              this.fetchData()
                 
              });
            }
          
        });
  }

  openedit(id:string){
    const dialogConfig = new MatDialogConfig();
    this.ES.getEventById(id).subscribe((evtRecupere)=>{
      // envoyer evtRecupere vers la boite
      
      dialogConfig.data =evtRecupere
      this.dialog.open(ModalEventComponent, dialogConfig);
      console.log("evtRecupere",evtRecupere)
    })
  }
}