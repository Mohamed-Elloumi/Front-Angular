
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Evt } from 'src/Models/Evenement';
import { EventService } from 'src/Services/evenement.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  dataSource!: MatTableDataSource<Evt>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
   constructor(private ES:EventService){}
 
  ngOnInit() {
    this.fetchdata()
  }
  fetchdata():void
  {
    this.ES.GetAllEvents().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }
  displayedColumns: string[] = ['id', "title",'dateDebut', 'dateFin', 'lieu'];
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

}