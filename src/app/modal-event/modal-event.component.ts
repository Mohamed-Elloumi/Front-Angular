import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-event',
  templateUrl: './modal-event.component.html',
  styleUrls: ['./modal-event.component.css']
})
export class ModalEventComponent {
  //forcagae de type =>BOITE
  constructor(public dialogRef : MatDialogRef<ModalEventComponent>,@Inject(MAT_DIALOG_DATA) data:any) {
    console.log("dataRecu",data)
    if (data) {
     this.form=new FormGroup({
        title: new FormControl(data.title),
        dateDebut: new FormControl(data.dateDebut),
        dateFin: new FormControl(data.dateFin),
        lieu: new FormControl(data.lieu)
      });
    } else {
      this.form=new FormGroup({
        title: new FormControl(null),
        dateDebut: new FormControl(null),
        dateFin: new FormControl(null),
        lieu: new FormControl(null)
      
      });
    }
   }
  //Declarer  form
  form!:FormGroup;
  //initialiser form

  //save and close
  save(){
    this.dialogRef.close(this.form.value);
  }
  //close
  close(){
    this.dialogRef.close();
  }

}
